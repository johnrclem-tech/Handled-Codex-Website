"use client"

import React from "react"
import { HiOutlineBolt, HiOutlineLink, HiOutlineCube } from "react-icons/hi2"
import { Integrations, type IntegrationBullet } from "./integrations"

const bullets: IntegrationBullet[] = [
  {
    icon: HiOutlineBolt,
    title: "Connect your clothing store in minutes",
    description:
      "One-click integrations with Shopify, Amazon, eBay, Etsy, TikTok Shop, and every major platform apparel brands sell on.",
  },
  {
    icon: HiOutlineLink,
    title: "Real-time size & variant sync",
    description:
      "Stock levels across every size-color combination sync automatically to all your sales channels — no manual spreadsheet updates.",
  },
  {
    icon: HiOutlineCube,
    title: "Omnichannel apparel fulfillment",
    description:
      "Fulfill DTC, wholesale, marketplace, and retail orders for your clothing brand from a single inventory pool.",
  },
]

export function ApparelIntegrations() {
  return (
    <Integrations
      label="Apparel Integrations"
      heading="Connect your clothing brand in under 24 hours"
      description="Handled integrates with every platform apparel brands sell on. Orders, inventory, size-color matrices, and tracking sync in real time."
      bullets={bullets}
    />
  )
}
