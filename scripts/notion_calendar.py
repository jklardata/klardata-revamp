#!/usr/bin/env python3
"""
Notion Content Calendar Populator for Klardata
Creates a database and populates all 24 content calendar entries.

Usage:
    pip install requests
    python notion_calendar.py

Set these env vars or edit the constants below:
    NOTION_TOKEN   - your Notion integration secret
    NOTION_PAGE_ID - the parent page ID where the DB will be created
"""

import os
import json
import requests
from datetime import date

NOTION_TOKEN = os.environ.get("NOTION_TOKEN", "YOUR_INTEGRATION_SECRET_HERE")
PARENT_PAGE_ID = os.environ.get("NOTION_PAGE_ID", "YOUR_PARENT_PAGE_ID_HERE")

HEADERS = {
    "Authorization": f"Bearer {NOTION_TOKEN}",
    "Content-Type": "application/json",
    "Notion-Version": "2022-06-28",
}

# ---------------------------------------------------------------------------
# Content calendar entries
# ---------------------------------------------------------------------------

ENTRIES = [
    # Week 1 — Credibility & Hook
    {
        "week": "Week 1",
        "date": "2026-03-02",
        "day": "Mon",
        "type": "LinkedIn Post",
        "topic": "17 years ago I started in data. Here's the one thing most businesses still get wrong about BI in 2026.",
    },
    {
        "week": "Week 1",
        "date": "2026-03-04",
        "day": "Wed",
        "type": "LinkedIn Post",
        "topic": "A city fire department reduced manual reporting by 80% after we modernized their analytics. Public safety runs on data too.",
    },
    {
        "week": "Week 1",
        "date": "2026-03-07",
        "day": "Fri",
        "type": "Blog Post",
        "topic": "5 Signs Your Business Is Ready for a BI Implementation",
    },
    # Week 2 — Case Study: EdTech
    {
        "week": "Week 2",
        "date": "2026-03-09",
        "day": "Mon",
        "type": "LinkedIn Post",
        "topic": "Report generation went from days → minutes for a growing EdTech startup. Here's how we did it with Tableau + AWS.",
    },
    {
        "week": "Week 2",
        "date": "2026-03-11",
        "day": "Wed",
        "type": "LinkedIn Post",
        "topic": "90% dashboard adoption rate doesn't happen by accident—here's what most BI consultants skip during rollout.",
    },
    {
        "week": "Week 2",
        "date": "2026-03-14",
        "day": "Fri",
        "type": "Blog Post",
        "topic": "How We Built a Student Analytics Platform on Tableau Server + AWS",
    },
    # Week 3 — Service Spotlight: Data Infrastructure
    {
        "week": "Week 3",
        "date": "2026-03-16",
        "day": "Mon",
        "type": "LinkedIn Post",
        "topic": "Your data is in Salesforce. Your orders are in Shopify. Your inventory is in Excel. This is why your reports are always wrong.",
    },
    {
        "week": "Week 3",
        "date": "2026-03-18",
        "day": "Wed",
        "type": "LinkedIn Post",
        "topic": "ETL vs ELT—which one is right for your business?",
    },
    {
        "week": "Week 3",
        "date": "2026-03-21",
        "day": "Fri",
        "type": "Blog Post",
        "topic": "Building a Data Warehouse from Scratch: What Small Businesses Get Wrong",
    },
    # Week 4 — Case Study: Real Estate NLP
    {
        "week": "Week 4",
        "date": "2026-03-23",
        "day": "Mon",
        "type": "LinkedIn Post",
        "topic": "We used NLP to identify $12M in undervalued properties for a commercial real estate firm. Unstructured data is an untapped goldmine.",
    },
    {
        "week": "Week 4",
        "date": "2026-03-25",
        "day": "Wed",
        "type": "LinkedIn Post",
        "topic": "50% of your market research time is probably wasted. Here's what we automated.",
    },
    {
        "week": "Week 4",
        "date": "2026-03-28",
        "day": "Fri",
        "type": "Blog Post",
        "topic": "Using Python NLP to Extract Competitive Intelligence from Property Listings",
    },
    # Week 5 — Tableau Deep Dive
    {
        "week": "Week 5",
        "date": "2026-03-30",
        "day": "Mon",
        "type": "LinkedIn Post",
        "topic": "Tableau tip: The #1 mistake I see in dashboards built by non-consultants.",
    },
    {
        "week": "Week 5",
        "date": "2026-04-01",
        "day": "Wed",
        "type": "LinkedIn Post",
        "topic": "Tableau Server vs Tableau Cloud in 2026—which should you choose?",
    },
    {
        "week": "Week 5",
        "date": "2026-04-04",
        "day": "Fri",
        "type": "Blog Post",
        "topic": "Tableau Server Setup on AWS: A Practical Guide for Growing Businesses",
    },
    # Week 6 — Case Study: E-Commerce
    {
        "week": "Week 6",
        "date": "2026-04-06",
        "day": "Mon",
        "type": "LinkedIn Post",
        "topic": "An e-commerce company was losing on price without knowing it. We built them a daily competitor intelligence system in Python.",
    },
    {
        "week": "Week 6",
        "date": "2026-04-08",
        "day": "Wed",
        "type": "LinkedIn Post",
        "topic": "20+ market gaps identified. Here's what automated competitive analysis actually looks like.",
    },
    {
        "week": "Week 6",
        "date": "2026-04-11",
        "day": "Fri",
        "type": "Blog Post",
        "topic": "How to Build a Competitor Price Monitoring System with Python + Tableau",
    },
    # Week 7 — Proof of Concept / Stakeholder Buy-In
    {
        "week": "Week 7",
        "date": "2026-04-13",
        "day": "Mon",
        "type": "LinkedIn Post",
        "topic": "Your stakeholders won't approve a $100K BI project. Start with a proof of concept instead—here's the 3-week approach.",
    },
    {
        "week": "Week 7",
        "date": "2026-04-15",
        "day": "Wed",
        "type": "LinkedIn Post",
        "topic": "The first question I ask every new client: 'What decision are you trying to make?' (Most can't answer it.)",
    },
    {
        "week": "Week 7",
        "date": "2026-04-18",
        "day": "Fri",
        "type": "Blog Post",
        "topic": "How to Get Stakeholder Buy-In for a BI Project (Without the 40-Page Deck)",
    },
    # Week 8 — Authority + CTA
    {
        "week": "Week 8",
        "date": "2026-04-20",
        "day": "Mon",
        "type": "LinkedIn Post",
        "topic": "The 3 BI projects that gave clients the fastest ROI—and what they had in common.",
    },
    {
        "week": "Week 8",
        "date": "2026-04-22",
        "day": "Wed",
        "type": "LinkedIn Post",
        "topic": "I worked with Google, Pinterest, Salesforce, and Toyota. Here's what enterprise data teams do that small businesses don't.",
    },
    {
        "week": "Week 8",
        "date": "2026-04-25",
        "day": "Fri",
        "type": "Blog Post",
        "topic": "What a BI Assessment Actually Looks Like: A Step-by-Step Walkthrough",
    },
]

# ---------------------------------------------------------------------------
# API helpers
# ---------------------------------------------------------------------------

def create_database(parent_page_id: str) -> str:
    """Create the Notion database and return its ID."""
    payload = {
        "parent": {"type": "page_id", "page_id": parent_page_id},
        "title": [{"type": "text", "text": {"content": "Klardata Content Calendar"}}],
        "properties": {
            "Topic": {"title": {}},
            "Date": {"date": {}},
            "Week": {
                "select": {
                    "options": [
                        {"name": "Week 1", "color": "red"},
                        {"name": "Week 2", "color": "orange"},
                        {"name": "Week 3", "color": "yellow"},
                        {"name": "Week 4", "color": "green"},
                        {"name": "Week 5", "color": "blue"},
                        {"name": "Week 6", "color": "purple"},
                        {"name": "Week 7", "color": "pink"},
                        {"name": "Week 8", "color": "gray"},
                    ]
                }
            },
            "Day": {
                "select": {
                    "options": [
                        {"name": "Mon", "color": "blue"},
                        {"name": "Wed", "color": "green"},
                        {"name": "Fri", "color": "orange"},
                    ]
                }
            },
            "Type": {
                "select": {
                    "options": [
                        {"name": "LinkedIn Post", "color": "blue"},
                        {"name": "Blog Post", "color": "green"},
                    ]
                }
            },
            "Status": {
                "select": {
                    "options": [
                        {"name": "Not Started", "color": "gray"},
                        {"name": "Drafting", "color": "yellow"},
                        {"name": "Ready", "color": "blue"},
                        {"name": "Published", "color": "green"},
                    ]
                }
            },
            "Notes": {"rich_text": {}},
        },
    }

    response = requests.post(
        "https://api.notion.com/v1/databases",
        headers=HEADERS,
        json=payload,
    )
    response.raise_for_status()
    db_id = response.json()["id"]
    print(f"Created database: {db_id}")
    return db_id


def add_entry(database_id: str, entry: dict) -> None:
    """Add a single row to the database."""
    payload = {
        "parent": {"database_id": database_id},
        "properties": {
            "Topic": {
                "title": [{"type": "text", "text": {"content": entry["topic"]}}]
            },
            "Date": {"date": {"start": entry["date"]}},
            "Week": {"select": {"name": entry["week"]}},
            "Day": {"select": {"name": entry["day"]}},
            "Type": {"select": {"name": entry["type"]}},
            "Status": {"select": {"name": "Not Started"}},
        },
    }

    response = requests.post(
        "https://api.notion.com/v1/pages",
        headers=HEADERS,
        json=payload,
    )
    response.raise_for_status()
    print(f"  Added: [{entry['week']} {entry['day']}] {entry['topic'][:60]}...")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    if NOTION_TOKEN == "YOUR_INTEGRATION_SECRET_HERE":
        print("Error: set NOTION_TOKEN env var or edit the constant at the top of this file.")
        return
    if PARENT_PAGE_ID == "YOUR_PARENT_PAGE_ID_HERE":
        print("Error: set NOTION_PAGE_ID env var or edit the constant at the top of this file.")
        return

    print("Creating Klardata Content Calendar in Notion...")
    db_id = create_database(PARENT_PAGE_ID)

    print(f"\nAdding {len(ENTRIES)} entries...")
    for entry in ENTRIES:
        add_entry(db_id, entry)

    print(f"\nDone! Open Notion and find 'Klardata Content Calendar' on your page.")
    print("Tip: add a Calendar view grouped by Date and a Board view grouped by Status.")


if __name__ == "__main__":
    main()
