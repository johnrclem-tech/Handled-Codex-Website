import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  HiOutlineArrowRight,
  HiOutlineShoppingCart,
  HiOutlineTruck,
  HiOutlineCalculator,
  HiOutlineChatBubbleLeftRight,
  HiOutlineMegaphone,
} from "react-icons/hi2"
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
  HiOutlineBookOpen,
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

const categories = [
  {
    label: "Ecommerce Platforms",
    icon: HiOutlineShoppingCart,
    color: "bg-blue-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    range: [0, 13] as const,
  },
  {
    label: "CRM & Support",
    icon: HiOutlineChatBubbleLeftRight,
    color: "bg-emerald-500",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    range: [13, 17] as const,
  },
  {
    label: "Shipping & Logistics",
    icon: HiOutlineTruck,
    color: "bg-purple-500",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    range: [17, 23] as const,
  },
  {
    label: "Finance & Accounting",
    icon: HiOutlineCalculator,
    color: "bg-amber-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    range: [23, 28] as const,
  },
  {
    label: "Marketing & Comms",
    icon: HiOutlineMegaphone,
    color: "bg-rose-500",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    range: [28, 33] as const,
  },
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

export function Integrations({
  label = "Integrations",
  heading,
  description,
  ctaText = "Get a fulfillment quote",
  ctaHref = "#get-a-quote",
  integrations = defaultIntegrations,
}: IntegrationsProps) {
  return (
    <section id="integrations" className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered header */}
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="section-label mb-3">{label}</p>
          <h2 className="section-heading">{heading}</h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          {categories.map((cat, i) => {
            const items = integrations.slice(cat.range[0], cat.range[1])
            if (items.length === 0) return null
            const isEven = i % 2 === 0

            return (
              <div key={cat.label} className="relative mb-16 last:mb-0">
                {/* Timeline node */}
                <div className="absolute left-5 lg:left-1/2 -translate-x-1/2 z-10">
                  <div className={`h-10 w-10 rounded-full ${cat.iconBg} border-4 border-background flex items-center justify-center shadow-sm`}>
                    <cat.icon className={`h-4 w-4 ${cat.iconColor}`} />
                  </div>
                </div>

                {/* Content card — alternates sides on lg */}
                <div className={`pl-16 lg:pl-0 lg:w-[calc(50%-2rem)] ${isEven ? "lg:mr-auto lg:pr-4" : "lg:ml-auto lg:pl-4"}`}>
                  <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`h-1.5 w-1.5 rounded-full ${cat.color}`} />
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {cat.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((integration) => (
                        <IntegrationCard key={integration.name} integration={integration} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" asChild>
            <Link href={ctaHref}>
              {ctaText}
              <HiOutlineArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
