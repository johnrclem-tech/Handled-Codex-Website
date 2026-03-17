import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Handled — Fulfillment Infrastructure for Modern Brands",
  description:
    "Ship faster, scale smarter. Handled gives ecommerce brands the warehouse network, technology, and performance guarantees to deliver exceptional customer experiences. Bi-coastal 3PL with same-day shipping and 99.9% accuracy.",
  keywords: [
    "ecommerce fulfillment",
    "3PL",
    "order fulfillment",
    "warehouse",
    "DTC fulfillment",
    "B2B fulfillment",
    "Shopify fulfillment",
    "same-day shipping",
  ],
  openGraph: {
    title: "Handled — Fulfillment Infrastructure for Modern Brands",
    description:
      "Ship faster, scale smarter. Bi-coastal fulfillment with same-day shipping and 99.9% accuracy.",
    siteName: "Handled",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
