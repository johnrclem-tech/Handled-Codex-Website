"use client"

import React from "react"
import { Warehouse, PackageCheck, Truck, Sparkles } from "lucide-react"
import { Pricing } from "@/components/sections/pricing"
import type { PricingPlan } from "@/components/sections/pricing"

const plans: PricingPlan[] = [
  {
    name: "Storage",
    icon: <Warehouse className="h-6 w-6" />,
    description:
      "Your Shopify inventory is stored securely with real-time sync to your store. Monthly pallet-based pricing means you only pay for the space you use.",
    target: "Shopify Inventory:",
    features: [
      "Pallet-level storage",
      "Real-time Shopify inventory sync",
      "Climate-controlled space",
      "Smart bin organization",
      "Scale up/down monthly",
    ],
  },
  {
    name: "Fulfillment",
    icon: <PackageCheck className="h-6 w-6" />,
    description:
      "Every Shopify order is picked and packed with care. Per-order pricing means your costs only rise when your Shopify sales do.",
    target: "Order Processing:",
    features: [
      "Barcode-verified pick & pack",
      "Shopify order auto-sync",
      "Same-day dispatch",
      "Dashboard transparency",
      "Flash sale scalability",
    ],
  },
  {
    name: "Shipping",
    icon: <Truck className="h-6 w-6" />,
    description:
      "We optimize every Shopify order for speed and savings. Per-shipment pricing based on the carrier and service level selected at checkout.",
    target: "Shopify Shipping:",
    features: [
      "Discounted carrier rates",
      "Shop Promise eligible",
      "2-day ground nationwide",
      "Auto tracking push to Shopify",
      "Real-time delivery dates",
    ],
  },
  {
    name: "Projects",
    icon: <Sparkles className="h-6 w-6" />,
    description:
      "From Shopify subscription kitting to custom branded packaging, per-project pricing is based on complexity and scope.",
    target: "Custom Workflows:",
    features: [
      "Custom kitting/assembly",
      "Branded unboxing",
      "Shopify Flow automations",
      "Returns processing",
      "Subscription box builds",
    ],
  },
]

export function ShopifyPricing() {
  return (
    <Pricing
      label="Shopify Fulfillment Pricing"
      heading="Transparent Shopify fulfillment pricing that scales with your store"
      description="No surprise fees. No minimums. Just clean, usage-based Shopify fulfillment pricing whether you ship 50 or 50,000 orders a month."
      plans={plans}
    />
  )
}
