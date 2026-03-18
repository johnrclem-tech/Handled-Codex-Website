"use client"

import React from "react"
import { HiOutlineBolt, HiOutlineLink, HiOutlineCube } from "react-icons/hi2"
import { Integrations, type IntegrationBullet } from "./integrations"

const bullets: IntegrationBullet[] = [
  {
    icon: HiOutlineBolt,
    title: "One-click store connections",
    description:
      "Connect Shopify, WooCommerce, BigCommerce, Squarespace, Wix, or any major ecommerce platform in minutes.",
  },
  {
    icon: HiOutlineLink,
    title: "Real-time order & inventory sync",
    description:
      "Orders flow in automatically. Inventory levels and tracking numbers push back to your store in real time — zero manual work.",
  },
  {
    icon: HiOutlineCube,
    title: "Sell everywhere, fulfill from one place",
    description:
      "DTC, Amazon, Walmart, eBay, Etsy, TikTok Shop, and retail — all fulfilled from a single inventory pool with one dashboard.",
  },
]

export function EcommerceIntegrations() {
  return (
    <Integrations
      label="Ecommerce Integrations"
      heading="Connect your online store in under 24 hours"
      description="Handled integrates seamlessly with every major ecommerce platform, marketplace, and shipping carrier. Orders, inventory, and tracking sync automatically."
      bullets={bullets}
    />
  )
}
