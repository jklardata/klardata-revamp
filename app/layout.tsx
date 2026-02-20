import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klardata | Business Intelligence & Analytics Consulting",
  description: "Expert business intelligence and analytics consulting services for medium-sized businesses and startups. 17+ years of experience serving companies like Google, Eventbrite, and Toyota.",
  keywords: "business intelligence, data analytics, BI consulting, tableau, data warehousing, ETL, data infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
