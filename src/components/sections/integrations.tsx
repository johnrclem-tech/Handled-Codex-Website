import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HiOutlineArrowRight } from "react-icons/hi2"
import {
  SiShopify,
  SiWoo,
  SiBigcommerce,
  SiWix,
  SiEtsy,
  SiEbay,
  SiWalmart,
  SiSquare,
  SiSquarespace,
  SiTarget,
  SiAftership,
  SiUsps,
  SiUps,
  SiFedex,
  SiTiktok,
  SiDhl,
} from "react-icons/si"
import { FaAmazon, FaMagento } from "react-icons/fa6"
import { HiOutlineTruck } from "react-icons/hi2"

export interface IntegrationItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export interface IntegrationsProps {
  label?: string
  heading: string
  description: string
  ctaText?: string
  ctaHref?: string
  integrations?: IntegrationItem[]
}

export const defaultIntegrations: IntegrationItem[] = [
  { name: "Shopify", icon: SiShopify, color: "text-[#96BF48]" },
  { name: "Amazon", icon: FaAmazon, color: "text-[#FF9900]" },
  { name: "WooCommerce", icon: SiWoo, color: "text-[#96588A]" },
  { name: "BigCommerce", icon: SiBigcommerce, color: "text-[#121118]" },
  { name: "Magento", icon: FaMagento, color: "text-[#EE672F]" },
  { name: "Wix", icon: SiWix, color: "text-[#0C6EFC]" },
  { name: "Squarespace", icon: SiSquarespace, color: "text-[#000000]" },
  { name: "Square", icon: SiSquare, color: "text-[#006AFF]" },
  { name: "Etsy", icon: SiEtsy, color: "text-[#F1641E]" },
  { name: "eBay", icon: SiEbay, color: "text-[#E53238]" },
  { name: "Walmart", icon: SiWalmart, color: "text-[#0071DC]" },
  { name: "Target", icon: SiTarget, color: "text-[#CC0000]" },
  { name: "TikTok Shop", icon: SiTiktok, color: "text-[#000000]" },
  { name: "USPS", icon: SiUsps, color: "text-[#333366]" },
  { name: "UPS", icon: SiUps, color: "text-[#351C15]" },
  { name: "FedEx", icon: SiFedex, color: "text-[#4D148C]" },
  { name: "DHL", icon: SiDhl, color: "text-[#FFCC00]" },
  { name: "Royal Mail", icon: HiOutlineTruck, color: "text-[#E2001A]" },
  { name: "AfterShip", icon: SiAftership, color: "text-[#9B59B6]" },
]

function IntegrationIcon({ integration }: { integration: IntegrationItem }) {
  return (
    <div
      className="flex items-center justify-center w-16 h-16 rounded-xl border border-border/60 bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shrink-0"
      title={integration.name}
    >
      <integration.icon
        className={`h-9 w-9 ${integration.color} transition-transform`}
      />
    </div>
  )
}

export function Integrations({
  label = "Integrations",
  heading,
  description,
  ctaText = "Get a fulfillment quote",
  ctaHref = "#get-a-quote",
  integrations = defaultIntegrations,
}: IntegrationsProps) {
  const doubled = [...integrations, ...integrations]

  return (
    <section id="integrations" className="py-24 lg:py-32 overflow-hidden">
      {/* Centered header — constrained width */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="section-label mb-3">{label}</p>
          <h2 className="section-heading">{heading}</h2>
          <p className="section-description">{description}</p>
        </div>
      </div>

      {/* Full-width marquee row */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        <div className="flex gap-5 animate-marquee-left w-max">
          {doubled.map((integration, i) => (
            <IntegrationIcon key={`${integration.name}-${i}`} integration={integration} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button size="lg" asChild>
          <Link href={ctaHref}>
            {ctaText}
            <HiOutlineArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
