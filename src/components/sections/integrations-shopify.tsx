"use client"

import React from "react"
import { HiOutlineBolt, HiOutlineLink, HiOutlineCube } from "react-icons/hi2"
import { Integrations, type IntegrationBullet } from "./integrations"

const bullets: IntegrationBullet[] = [
  {
    icon: HiOutlineBolt,
    title: "Native Shopify integration",
    description:
      "Connect your Shopify or Shopify Plus store in one click. Orders flow to our warehouse automatically.",
  },
  {
    icon: HiOutlineLink,
    title: "Real-time inventory sync",
    description:
      "Stock levels, order statuses, and tracking numbers sync back to Shopify in real time — no manual updates.",
  },
  {
    icon: HiOutlineCube,
    title: "Multi-channel from one dashboard",
    description:
      "Sell on Shopify, Amazon, TikTok Shop, Walmart, and more — all fulfilled from a single inventory pool.",
  },
]

export function ShopifyIntegrations() {
  return (
    <Integrations
      label="Shopify Integrations"
      heading="Your Shopify store, connected in minutes"
      description="Handled integrates natively with Shopify and Shopify Plus. Orders, inventory, and tracking sync automatically — so you can focus on selling, not spreadsheets."
      bullets={bullets}
    />
  )
}
