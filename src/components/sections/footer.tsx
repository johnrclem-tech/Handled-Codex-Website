import React from "react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  Services: [
    { name: "DTC Fulfillment", href: "/services/ecommerce-fulfillment" },
    { name: "B2B & Retail", href: "/services/b2b-fulfillment" },
    { name: "Omnichannel", href: "/services/omnichannel-fulfillment" },
    { name: "Pick & Pack", href: "/services/pick-and-pack" },
    { name: "Returns", href: "/services/returns" },
  ],
  Integrations: [
    { name: "Shopify", href: "/integrations/shopify" },
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
  Company: [
    { name: "About", href: "/company" },
    { name: "Contact Sales", href: "/contact-sales" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1.5 mb-4">
              <div className="h-7 w-7 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">H</span>
              </div>
              <span className="text-lg font-bold">Handled</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fulfillment infrastructure for modern ecommerce brands.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-semibold mb-3">{title}</p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Handled. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
