import React from "react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { isPublishedPath } from "@/lib/site-routes"

const footerLinks = {
  Services: [
    { name: "Ecommerce Fulfillment", href: "/services/ecommerce-fulfillment" },
    { name: "B2B & Retail", href: "/services/b2b-fulfillment" },
    { name: "Omnichannel", href: "/services/omnichannel-fulfillment" },
    { name: "Pick & Pack", href: "/services/pick-and-pack" },
    { name: "Returns", href: "/services/returns" },
  ],
  Industries: [
    { name: "Cosmetics Fulfillment", href: "/industries/cosmetics-fulfillment" },
    { name: "Apparel Fulfillment", href: "/industries/apparel-fulfillment" },
  ],
  Integrations: [
    { name: "Shopify Fulfillment", href: "/integrations/shopify-fulfillment" },
    { name: "Amazon", href: "/integrations/amazon" },
    { name: "WooCommerce", href: "/integrations/woocommerce" },
    { name: "BigCommerce", href: "/integrations/bigcommerce" },
    { name: "ShipStation", href: "/integrations/shipstation" },
  ],
  Locations: [
    { name: "Los Angeles", href: "/locations/los-angeles" },
    { name: "New Jersey", href: "/locations/new-jersey" },
    { name: "East Coast", href: "/locations/east-coast" },
    { name: "West Coast", href: "/locations/west-coast" },
  ],
  Resources: [
    { name: "All Sections", href: "/section-test" },
    { name: "Keyword Analysis", href: "/internal/keyword-analysis" },
  ],
  Legal: [
    { name: "Policies", href: "/policies" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  const filteredColumns = Object.entries(footerLinks)
    .map(([title, links]) => [
      title,
      links.filter((link) => isPublishedPath(link.href)),
    ] as const)
    .filter(([, links]) => links.length > 0)

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-1.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <span className="text-sm font-bold text-primary-foreground">H</span>
              </div>
              <span className="text-lg font-bold">Handled</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Fulfillment infrastructure for modern ecommerce brands.
            </p>
          </div>

          {filteredColumns.map(([title, links]) => (
            <div key={title}>
              <p className="mb-3 text-sm font-semibold">{title}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Handled. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/internal/keyword-analysis"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Keyword Analysis
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
