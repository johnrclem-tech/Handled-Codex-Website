"use client"

import React, { useEffect, useRef, useState } from "react"
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
  integrations?: IntegrationItem[]
}

export const defaultIntegrations: IntegrationItem[] = [
  // Row 1 — Ecommerce & Marketplaces
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
  // Row 2 — Shipping, Accounting, Marketing, Comms
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

function ScrollingRow({
  items,
  speed = 0.4,
}: {
  items: IntegrationItem[]
  speed?: number
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let animationId: number
    let position = 0

    function animate() {
      if (!isPaused && el) {
        position += speed
        const halfWidth = el.scrollWidth / 2
        if (position >= halfWidth) {
          position -= halfWidth
        }
        el.style.transform = `translateX(${-position}px)`
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused, speed])

  // Double the items for seamless loop
  const doubled = [...items, ...items]

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div ref={scrollRef} className="flex gap-3 w-max will-change-transform">
        {doubled.map((integration, i) => (
          <div
            key={`${integration.name}-${i}`}
            className="group flex flex-col items-center justify-center w-28 h-24 rounded-xl border border-border/60 bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 shrink-0"
          >
            <integration.icon
              className={`h-7 w-7 ${integration.color} mb-2 group-hover:scale-110 transition-transform`}
            />
            <span className="text-xs font-medium text-center leading-tight px-1">
              {integration.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Integrations({
  label = "Integrations",
  heading,
  description,
  integrations = defaultIntegrations,
}: IntegrationsProps) {
  const midpoint = Math.ceil(integrations.length / 2)
  const row1 = integrations.slice(0, midpoint)
  const row2 = integrations.slice(midpoint)

  return (
    <section id="integrations" className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-blue-600 mb-3">{label}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Full-width scrolling rows */}
      <div className="space-y-3">
        <ScrollingRow items={row1} speed={0.4} />
        <ScrollingRow items={row2} speed={0.3} />
      </div>
    </section>
  )
}
