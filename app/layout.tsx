import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.klardata.com"),
  title: {
    default: "Klardata | Business Intelligence & Analytics Consulting",
    template: "%s | Klardata",
  },
  description: "Expert business intelligence and analytics consulting. 17+ years serving Google, Pinterest, Salesforce, and more. Data strategy, BI implementation, and data infrastructure.",
  keywords: ["business intelligence consulting", "analytics consulting", "data strategy", "BI implementation", "data infrastructure", "Tableau consulting", "dbt consulting", "Snowflake", "BigQuery", "data warehouse consulting", "analytics engineering"],
  openGraph: {
    type: "website",
    siteName: "Klardata",
    locale: "en_US",
    images: [{ url: "/api/og?title=Business+Intelligence+%26+Analytics+Consulting&category=Insights", width: 1200, height: 630, alt: "Klardata — BI & Analytics Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@klardata",
    site: "@klardata",
  },
  icons: {
    icon: "/photos/klardata_favicon2.png",
    shortcut: "/photos/klardata_favicon2.png",
    apple: "/photos/klardata_favicon2.png",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Klardata",
  "url": "https://www.klardata.com",
  "description": "Business intelligence and analytics consulting. Data strategy, BI implementation, Tableau, dbt, Snowflake, and BigQuery.",
  "founder": { "@type": "Person", "name": "Justin Leu" },
  "areaServed": "US",
  "serviceType": ["Business Intelligence Consulting", "Analytics Engineering", "Data Strategy", "BI Implementation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
