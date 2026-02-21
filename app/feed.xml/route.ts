import { NextResponse } from "next/server";

const SITE_URL = "https://klardata.com";

const articles = [
  {
    title: "5 Signs Your Business Needs a Data Warehouse",
    description:
      "Spreadsheets worked when you started, but now they're holding you back. Here's how to know when it's time to upgrade your data infrastructure.",
    slug: "5-signs-business-needs-data-warehouse",
    pubDate: "Thu, 05 Feb 2026 00:00:00 +0000",
    category: "Data Infrastructure",
  },
  {
    title: "Tableau vs. Power BI: Which BI Tool is Right for You?",
    description:
      "An honest comparison of the two leading business intelligence platforms, including costs, capabilities, and ideal use cases.",
    slug: "tableau-vs-power-bi",
    pubDate: "Wed, 28 Jan 2026 00:00:00 +0000",
    category: "BI Tools",
  },
  {
    title: "How to Calculate ROI on Business Intelligence Investment",
    description:
      "BI projects often struggle to show value. This framework helps you quantify the impact and justify the investment to stakeholders.",
    slug: "roi-business-intelligence",
    pubDate: "Thu, 15 Jan 2026 00:00:00 +0000",
    category: "Strategy",
  },
];

export async function GET() {
  const items = articles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${SITE_URL}/blog/${article.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${article.slug}</guid>
      <description><![CDATA[${article.description}]]></description>
      <pubDate>${article.pubDate}</pubDate>
      <category><![CDATA[${article.category}]]></category>
      <author>justin@klardata.com (Justin Leu)</author>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Klardata Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Practical guides on data analytics, business intelligence, and making better decisions with data.</description>
    <language>en-us</language>
    <managingEditor>justin@klardata.com (Justin Leu)</managingEditor>
    <webMaster>justin@klardata.com (Justin Leu)</webMaster>
    <lastBuildDate>${articles[0].pubDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
