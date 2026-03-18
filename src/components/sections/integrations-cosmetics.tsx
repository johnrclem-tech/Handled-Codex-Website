"use client"

import React from "react"
import { HiOutlineBolt, HiOutlineLink, HiOutlineCube } from "react-icons/hi2"
import { Integrations, type IntegrationBullet } from "./integrations"

const bullets: IntegrationBullet[] = [
  {
    icon: HiOutlineBolt,
    title: "Connect your beauty store instantly",
    description:
      "One-click integrations with Shopify, Amazon, Etsy, TikTok Shop, and every major platform beauty brands sell on.",
  },
  {
    icon: HiOutlineLink,
    title: "Real-time inventory & lot tracking",
    description:
      "Stock levels, lot numbers, and expiration dates sync across all your sales channels automatically — preventing overselling and expired shipments.",
  },
  {
    icon: HiOutlineCube,
    title: "Omnichannel cosmetics fulfillment",
    description:
      "Fulfill DTC orders, marketplace sales, retail wholesale for Sephora and Ulta, and subscription boxes from one inventory pool.",
  },
]

export function CosmeticsIntegrations() {
  return (
    <Integrations
      label="Beauty Brand Integrations"
      heading="Connect your beauty brand in under 24 hours"
      description="Handled integrates with every platform cosmetics brands sell on. Orders, inventory, lot data, and tracking sync in real time across all your channels."
      bullets={bullets}
    />
  )
}
