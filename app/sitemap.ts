import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://klardata.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog/ai-data-budget-surge`, lastModified: new Date("2026-03-10"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/ai-semantic-layer`, lastModified: new Date("2026-03-04"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/bi-implementation-ready`, lastModified: new Date("2026-02-25"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/5-signs-business-needs-data-warehouse`, lastModified: new Date("2026-02-05"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/tableau-vs-power-bi`, lastModified: new Date("2026-01-28"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/roi-business-intelligence`, lastModified: new Date("2026-01-15"), changeFrequency: "monthly", priority: 0.8 },
  ];
}
