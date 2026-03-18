"use client"

import React from "react"
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
} from "react-icons/si"
import { FaAmazon } from "react-icons/fa"
import { HiOutlineCube, HiOutlineLink, HiOutlineBolt } from "react-icons/hi2"

export interface IntegrationItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export interface IntegrationBullet {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

export interface IntegrationsProps {
  label?: string
  heading: string
  description: string
  bullets: IntegrationBullet[]
  integrations?: IntegrationItem[]
}

export const defaultIntegrations: IntegrationItem[] = [
  { name: "Shopify", icon: SiShopify, color: "text-[#96BF48]" },
  { name: "Amazon", icon: FaAmazon, color: "text-[#FF9900]" },
  { name: "WooCommerce", icon: SiWoo, color: "text-[#96588A]" },
  { name: "BigCommerce", icon: SiBigcommerce, color: "text-[#121118]" },
  { name: "Wix", icon: SiWix, color: "text-[#0C6EFC]" },
  { name: "Etsy", icon: SiEtsy, color: "text-[#F1641E]" },
  { name: "eBay", icon: SiEbay, color: "text-[#E53238]" },
  { name: "Walmart", icon: SiWalmart, color: "text-[#0071DC]" },
  { name: "Square", icon: SiSquare, color: "text-[#006AFF]" },
  { name: "Squarespace", icon: SiSquarespace, color: "text-[#000000]" },
  { name: "Target", icon: SiTarget, color: "text-[#CC0000]" },
  { name: "TikTok Shop", icon: SiTiktok, color: "text-[#000000]" },
  { name: "QuickBooks", icon: SiQuickbooks, color: "text-[#2CA01C]" },
  { name: "Xero", icon: SiXero, color: "text-[#13B5EA]" },
  { name: "AfterShip", icon: SiAftership, color: "text-[#9B59B6]" },
  { name: "USPS", icon: SiUsps, color: "text-[#333366]" },
  { name: "UPS", icon: SiUps, color: "text-[#351C15]" },
  { name: "FedEx", icon: SiFedex, color: "text-[#4D148C]" },
]

export const defaultIntegrationBullets: IntegrationBullet[] = [
  {
    icon: HiOutlineBolt,
    title: "One-click setup",
    description: "Most shopping carts can be connected in minutes, not days.",
  },
  {
    icon: HiOutlineLink,
    title: "Real-time sync",
    description:
      "Orders, inventory, and tracking data sync bidirectionally in real-time.",
  },
  {
    icon: HiOutlineCube,
    title: "Multi-channel ready",
    description:
      "Manage DTC, wholesale, and marketplace orders from one dashboard.",
  },
]

export function Integrations({
  label = "Integrations",
  heading,
  description,
  bullets,
  integrations = defaultIntegrations,
}: IntegrationsProps) {
  return (
    <section id="integrations" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Copy */}
          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3">{label}</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              {heading}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            <div className="mt-8 space-y-4">
              {bullets.map((bullet) => (
                <IntegrationFeature
                  key={bullet.title}
                  icon={bullet.icon}
                  title={bullet.title}
                  description={bullet.description}
                />
              ))}
            </div>
          </div>

          {/* Right - Integration grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="group flex flex-col items-center justify-center p-4 rounded-xl border border-border/60 bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <integration.icon
                  className={`h-7 w-7 ${integration.color} mb-2 group-hover:scale-110 transition-transform`}
                />
                <span className="text-xs font-medium text-center leading-tight">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrationFeature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <div className="flex gap-3">
      <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-blue-500" />
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
