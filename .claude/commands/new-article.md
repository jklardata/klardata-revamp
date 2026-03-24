# New Blog Article

Create a new SEO-optimized blog article for klardata.com.

## Usage
/new-article [slug] "[title]" [category] "[description]"

Example:
/new-article semantic-layer-cube "What Is Cube? The Semantic Layer for Modern Data Stacks" "Semantic Layer" "Cube sits between your warehouse and your BI tools. Here's what it does, when to use it, and how it compares to dbt metrics and LookML."

## Instructions

You will create a new blog article at /Users/justinleu/klardata-revamp/app/blog/[slug]/page.tsx.

### Step 1 — Read existing article for structure
Read /Users/justinleu/klardata-revamp/app/blog/semantic-layer-metric-definitions/page.tsx to use as the structural template.

### Step 2 — Create the article

Create /Users/justinleu/klardata-revamp/app/blog/[slug]/page.tsx following these rules exactly:

**Design:**
- Background: bg-[#0d1b2e]
- Hero: gradient overlay with category badge, date (today's date), read time
- Cards: rounded-2xl bg-slate-800/50 border border-white/10 p-8
- H2: text-2xl font-bold text-white mb-6
- Body: text-slate-300 leading-relaxed
- List bullets: flex items-start gap-2 with colored accent bullet
- Sidebar: author card + related articles

**Metadata (SEO):**
- title: "[Article Title] | Klardata"
- description: 150-160 characters, keyword-rich
- keywords: array of 8-10 long-tail keywords relevant to the topic
- alternates.canonical: "https://klardata.com/blog/[slug]"
- openGraph: title, description, url, type: "article", publishedTime, authors, images
- twitter: title, description

**Schema.org:**
- BlogPosting JSON-LD with headline, description, datePublished, dateModified, author, publisher, url, mainEntityOfPage

**Content rules:**
- NEVER use em dashes (—). Use colons for introductions, commas or periods for parentheticals.
- Hyphens are fine in compound words and ranges.
- Write all sections fully — no placeholders or stubs.
- Each section: 2-4 substantive paragraphs.
- Include a CTA section at the end relevant to Klardata consulting services.
- Include a relatedArticles array with 2 relevant existing articles from the blog.

**Existing articles to cross-link from:**
- tableau-to-dbt-migration
- tableau-workbook-audit
- tableau-workbook-documentation
- tableau-workbook-diff
- semantic-layer-metric-definitions
- semantic-layer-access-control
- semantic-layer-lineage-traceability
- semantic-layer-agent-query-tolerance
- semantic-layer-governance-maturity
- ai-semantic-layer
- tableau-vs-power-bi
- roi-business-intelligence

### Step 3 — Update the blog listing

Read /Users/justinleu/klardata-revamp/app/blog/page.tsx and add the new article to the articles array at the top (most recent first). Match the existing entry format exactly — include title, excerpt, date, category, readTime, slug, gradient, accentColor, and icon.

### Step 4 — Update the sitemap

Read /Users/justinleu/klardata-revamp/app/sitemap.ts and add the new URL:
{ url: `${base}/blog/[slug]`, lastModified: new Date("[today]"), changeFrequency: "monthly", priority: 0.8 }

### Step 5 — Commit and deploy

```
git add app/blog/[slug]/ app/blog/page.tsx app/sitemap.ts
git commit -m "Add article: [title]

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push origin main
```

Confirm the article URL when done: https://klardata.com/blog/[slug]
