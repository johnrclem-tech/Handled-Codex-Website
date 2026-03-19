"use client"

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
  SiQuickbooks,
  SiXero,
  SiAftership,
  SiUsps,
  SiUps,
  SiFedex,
  SiTiktok,
  SiDhl,
  SiSage,
  SiZendesk,
  SiSalesforce,
  SiHubspot,
  SiIntercom,
  SiMailchimp,
  SiSlack,
  SiWhatsapp,
} from "react-icons/si"
import { FaAmazon, FaMagento } from "react-icons/fa6"
import {
  HiOutlineEnvelope,
  HiOutlineBuildingOffice,
  HiOutlineChatBubbleLeftRight,
  HiOutlineBookOpen,
  HiOutlineTruck,
} from "react-icons/hi2"

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
  { name: "Salesforce", icon: SiSalesforce, color: "text-[#00A1E0]" },
  { name: "HubSpot", icon: SiHubspot, color: "text-[#FF7A59]" },
  { name: "Zendesk", icon: SiZendesk, color: "text-[#03363D]" },
  { name: "Intercom", icon: SiIntercom, color: "text-[#6AFDEF]" },
  { name: "USPS", icon: SiUsps, color: "text-[#333366]" },
  { name: "UPS", icon: SiUps, color: "text-[#351C15]" },
  { name: "FedEx", icon: SiFedex, color: "text-[#4D148C]" },
  { name: "DHL", icon: SiDhl, color: "text-[#FFCC00]" },
  { name: "Royal Mail", icon: HiOutlineTruck, color: "text-[#E2001A]" },
  { name: "AfterShip", icon: SiAftership, color: "text-[#9B59B6]" },
  { name: "QuickBooks", icon: SiQuickbooks, color: "text-[#2CA01C]" },
  { name: "Xero", icon: SiXero, color: "text-[#13B5EA]" },
  { name: "FreshBooks", icon: HiOutlineBookOpen, color: "text-[#0075DD]" },
  { name: "Sage", icon: SiSage, color: "text-[#00D639]" },
  { name: "NetSuite", icon: HiOutlineBuildingOffice, color: "text-[#1B3E59]" },
  { name: "Klaviyo", icon: HiOutlineEnvelope, color: "text-[#000000]" },
  { name: "Mailchimp", icon: SiMailchimp, color: "text-[#FFE01B]" },
  { name: "Gorgias", icon: HiOutlineChatBubbleLeftRight, color: "text-[#1F1F46]" },
  { name: "Slack", icon: SiSlack, color: "text-[#4A154B]" },
  { name: "WhatsApp", icon: SiWhatsapp, color: "text-[#25D366]" },
]

function IntegrationCard({ integration }: { integration: IntegrationItem }) {
  return (
    <div className="flex flex-col items-center justify-center w-20 h-20 rounded-xl border border-border/60 bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shrink-0">
      <integration.icon
        className={`h-8 w-8 ${integration.color} mb-1.5 group-hover:scale-110 transition-transform`}
      />
      <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight px-1 truncate max-w-full">
        {integration.name}
      </span>
    </div>
  )
}

function VerticalMarquee({
  items,
  reverse = false,
}: {
  items: IntegrationItem[]
  reverse?: boolean
}) {
  const doubled = [...items, ...items]
  return (
    <div className="relative overflow-hidden h-[540px]">
      <div
        className={`flex flex-col gap-3 ${reverse ? "animate-marquee-down" : "animate-marquee-up"}`}
      >
        {doubled.map((integration, i) => (
          <IntegrationCard key={`${integration.name}-${i}`} integration={integration} />
        ))}
      </div>
    </div>
  )
}

function splitIntoColumns(items: IntegrationItem[], cols: number): IntegrationItem[][] {
  const columns: IntegrationItem[][] = Array.from({ length: cols }, () => [])
  items.forEach((item, i) => {
    columns[i % cols].push(item)
  })
  return columns
}

export function Integrations({
  label = "Integrations",
  heading,
  description,
  ctaText = "Get a fulfillment quote",
  ctaHref = "#get-a-quote",
  integrations = defaultIntegrations,
}: IntegrationsProps) {
  const columns = splitIntoColumns(integrations, 4)

  return (
    <section id="integrations" className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-12 max-md:flex-col lg:gap-20">
          {/* Left side — header + CTA */}
          <div className="space-y-5 md:max-w-md lg:max-w-lg shrink-0">
            <p className="text-sm font-semibold text-blue-600">{label}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="pt-2">
              <Button size="lg" asChild>
                <Link href={ctaHref}>
                  {ctaText}
                  <HiOutlineArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side — vertical scrolling columns */}
          <div className="relative grid shrink-0 grid-cols-3 gap-3 lg:grid-cols-4">
            {/* Top/bottom fade overlays */}
            <div className="absolute top-0 z-10 h-1/4 w-full bg-gradient-to-b from-background to-transparent pointer-events-none" />
            <div className="absolute bottom-0 z-10 h-1/4 w-full bg-gradient-to-t from-background to-transparent pointer-events-none" />

            {columns.slice(0, 3).map((col, i) => (
              <VerticalMarquee key={i} items={col} reverse={i % 2 === 1} />
            ))}
            {/* 4th column hidden on smaller screens */}
            <div className="hidden lg:block">
              <VerticalMarquee items={columns[3]} reverse />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
