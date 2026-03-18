"use client"

import React from "react"
import {
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineRocketLaunch,
} from "react-icons/hi2"
import { CTA, type CTABenefit } from "./cta"

const benefits: CTABenefit[] = [
  {
    icon: HiOutlineClock,
    title: "Save Time",
    description:
      "No more toggling between Shopify and your 3PL. Orders, inventory, and tracking sync automatically — so you can focus on growing your store.",
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: "Save Money",
    description:
      "Discounted carrier rates, bi-coastal warehouses for zone skipping, and usage-based pricing that scales with your Shopify sales. No minimums. No fixed costs.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Sell More",
    description:
      "Faster delivery speeds and branded tracking turn one-time Shopify buyers into loyal repeat customers — and your best marketing channel.",
  },
]

export function ShopifyCTA() {
  return (
    <CTA
      label="Get A Quote"
      heading="Get a Shopify Fulfillment Quote. Get Growing."
      description="Get a custom quote today and see how Handled turns your Shopify shipping into a growth engine."
      benefits={benefits}
    />
  )
}
