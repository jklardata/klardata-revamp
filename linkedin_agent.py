import os
import time
import argparse
import requests
import feedparser
from datetime import datetime, timezone, timedelta
from anthropic import Anthropic
from bs4 import BeautifulSoup
from dotenv import load_dotenv
from supabase import create_client

load_dotenv()

# ── Config ────────────────────────────────────────────────────────────────────

RSS_FEEDS = [
    {"url": os.getenv("OWN_BLOG_FEED", "https://klardata.com/feed.xml"), "type": "own_blog"},
    {"url": "https://towardsdatascience.com/feed",        "type": "industry_news"},
    {"url": "https://analyticsvidhya.com/feed/",          "type": "industry_news"},
]

supabase = create_client(os.getenv("SUPABASE_URL"), os.getenv("SUPABASE_KEY"))

client = Anthropic(api_key=os.getenv("ANTHROPIC_API_KEY"))

SYSTEM_PROMPT = (
    "You are a LinkedIn content strategist for Justin, a senior data analytics consultant "
    "with 17 years experience. Clients include Google, Salesforce, Toyota, Eventbrite, and Cisco. "
    "He specializes in Tableau, Power BI, Salesforce analytics, Azure, and data pipeline architecture. "
    "Write in a direct, confident practitioner voice. No corporate fluff, no generic advice. "
    "Sound like a practitioner talking to peers."
)

# ── Fetch ─────────────────────────────────────────────────────────────────────

def fetch_feed(url: str, days: int = 7) -> list[dict]:
    """Parse RSS feed, return entries from the last `days` days. Never crashes."""
    try:
        feed   = feedparser.parse(url)
        cutoff = datetime.now(timezone.utc) - timedelta(days=days)
        entries = []

        for entry in feed.entries:
            published = None
            for attr in ("published_parsed", "updated_parsed"):
                raw = getattr(entry, attr, None)
                if raw:
                    published = datetime(*raw[:6], tzinfo=timezone.utc)
                    break

            if published and published < cutoff:
                continue

            entries.append({
                "title":     getattr(entry, "title",   ""),
                "link":      getattr(entry, "link",    ""),
                "summary":   getattr(entry, "summary", ""),
                "published": published.isoformat() if published else "",
            })

        return entries

    except Exception as e:
        print(f"  [warn] Feed fetch failed ({url}): {e}")
        return []


def fetch_full_content(url: str) -> str:
    """Download article HTML and return plain text capped at 3000 words."""
    try:
        resp = requests.get(
            url, timeout=15,
            headers={"User-Agent": "Mozilla/5.0 (compatible; LinkedInAgent/1.0)"}
        )
        resp.raise_for_status()
        soup = BeautifulSoup(resp.text, "html.parser")

        body = soup.find("article") or soup.find("main")
        if not body:
            divs = soup.find_all("div")
            body = max(divs, key=lambda d: len(d.get_text()), default=None)

        if not body:
            return ""

        words = body.get_text(separator=" ", strip=True).split()
        return " ".join(words[:3000])

    except Exception as e:
        print(f"  [warn] Content fetch failed ({url}): {e}")
        return ""

# ── Generate ──────────────────────────────────────────────────────────────────

def generate_post(content: str, content_type: str, source_title: str, source_url: str) -> str:
    """Draft a LinkedIn post via Claude. Returns post text or raises on failure."""
    if content_type == "own_blog":
        user_prompt = (
            "Transform this blog post into a LinkedIn post. "
            "Structure: bold hook line under 12 words, 3-4 short conversational paragraphs "
            "with a concrete insight or lesson, soft CTA inviting comments or consultation. "
            f"End with 3-5 hashtags. Under 1300 characters total.\n\nBlog post:\n{content}"
        )
    else:
        user_prompt = (
            "Write a LinkedIn post sharing your reaction to this article as a senior data analytics practitioner. "
            "Don't summarize it — share a specific opinion, pushback, or real-world experience that adds context. "
            "Structure: bold hook, 2-3 paragraphs of your take, 1 question to spark comments. "
            f"End with 3-5 hashtags. Under 1300 characters.\n\nArticle:\n{content}"
        )

    response = client.messages.create(
        model      = "claude-sonnet-4-6",
        max_tokens = 500,
        system     = SYSTEM_PROMPT,
        messages   = [{"role": "user", "content": user_prompt}],
    )

    return response.content[0].text.strip()

# ── Save ──────────────────────────────────────────────────────────────────────

def save_to_supabase(
    post_draft:   str,
    source_title: str,
    source_url:   str,
    content_type: str,
) -> str | None:
    """Insert a new row into linkedin_posts. Returns record ID or None on failure."""
    data = {
        "post_draft":      post_draft,
        "source_title":    source_title,
        "source_url":      source_url,
        "content_type":    "Own Blog" if content_type == "own_blog" else "Industry News",
        "status":          "Pending Review",
        "date_created":    datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "character_count": len(post_draft),
    }

    try:
        resp = supabase.table("linkedin_posts").insert(data).execute()
        return resp.data[0]["id"] if resp.data else None

    except Exception as e:
        print(f"  [error] Supabase save failed: {e}")
        return None

# ── Run ───────────────────────────────────────────────────────────────────────

def run_agent(dry_run: bool = False, source_filter: str | None = None, limit: int = 5, days: int = 7):
    """Main orchestration loop."""
    print("LinkedIn Content Agent")
    print("─" * 50)

    processed = 0
    saved      = 0
    errors     = 0
    results    = []  # for summary table

    for feed_cfg in RSS_FEEDS:
        feed_url  = feed_cfg["url"]
        feed_type = feed_cfg["type"]

        if source_filter and feed_type != source_filter:
            continue

        print(f"\nFeed [{feed_type}]: {feed_url}")

        try:
            entries = fetch_feed(feed_url, days=days)
        except Exception as e:
            print(f"  [error] {e}")
            errors += 1
            continue

        print(f"  {len(entries)} recent article(s)")

        for entry in entries:
            if processed >= limit:
                break

            title = entry["title"]
            url   = entry["link"]
            print(f"\n  • {title[:65]}{'…' if len(title) > 65 else ''}")

            # Generate
            try:
                full_content = fetch_full_content(url)
                content      = full_content or entry.get("summary", "")
                post         = generate_post(content, feed_type, title, url)
            except Exception as e:
                print(f"    [error] Generation failed: {e}")
                errors += 1
                results.append({
                    "title":    title,
                    "chars":    0,
                    "status":   "error",
                    "record_id": "",
                })
                continue

            processed += 1
            char_count = len(post)
            print(f"    Generated ({char_count} chars)")

            # Save or print
            if dry_run:
                print("\n" + "─" * 40)
                print(post)
                print("─" * 40)
                results.append({
                    "title":     title,
                    "chars":     char_count,
                    "status":    "dry-run",
                    "record_id": "",
                })
            else:
                record_id = save_to_supabase(post, title, url, feed_type)
                if record_id:
                    saved += 1
                    print(f"    Saved → {record_id}")
                    results.append({
                        "title":     title,
                        "chars":     char_count,
                        "status":    "saved",
                        "record_id": record_id,
                    })
                else:
                    errors += 1
                    # Fallback: print draft so nothing is lost
                    print("    [fallback] Printing draft to console:")
                    print("\n" + post + "\n")
                    results.append({
                        "title":     title,
                        "chars":     char_count,
                        "status":    "failed",
                        "record_id": "",
                    })

            time.sleep(3)  # rate-limit buffer between API calls

        if processed >= limit:
            print(f"\n  Limit of {limit} reached — stopping.")
            break

    # ── Summary table ─────────────────────────────────────────────────────────
    print("\n" + "═" * 80)
    print(f"{'SOURCE TITLE':<40} {'CHARS':>6}  {'STATUS':<12} {'RECORD ID'}")
    print("─" * 80)
    for r in results:
        title_col = r["title"][:38] + ("…" if len(r["title"]) > 38 else "")
        print(f"{title_col:<40} {r['chars']:>6}  {r['status']:<12} {r['record_id']}")
    print("═" * 80)
    print(f"Processed {processed} posts | Saved {saved} drafts | {errors} errors")

# ── CLI ───────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="LinkedIn Content Agent")
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Generate posts but print them instead of saving to Airtable",
    )
    parser.add_argument(
        "--source",
        choices=["own_blog", "industry_news"],
        default=None,
        help="Only process this feed type",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=5,
        help="Max number of posts to process per run (default: 5)",
    )
    parser.add_argument(
        "--days",
        type=int,
        default=7,
        help="Look back this many days for articles (default: 7)",
    )

    args = parser.parse_args()
    run_agent(dry_run=args.dry_run, source_filter=args.source, limit=args.limit, days=args.days)
