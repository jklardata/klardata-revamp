import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://klardata.com"),
  title: {
    default: "Klardata | Business Intelligence & Analytics Consulting",
    template: "%s | Klardata",
  },
  description: "Expert business intelligence and analytics consulting. 17+ years serving Google, Pinterest, Salesforce, and more. Data strategy, BI implementation, and data infrastructure.",
  openGraph: {
    type: "website",
    siteName: "Klardata",
    locale: "en_US",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Klardata — BI & Analytics Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@klardata",
    site: "@klardata",
  },
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
