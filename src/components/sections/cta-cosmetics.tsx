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
      "No more tracking down tracking. We handle the busywork — climate-controlled storage, lot tracking, fragile packing — so you can get back to building your beauty brand.",
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: "Save Money",
    description:
      "Smarter shipping, fewer damaged-product claims, and pricing that flexes with your beauty brand. No minimums. No fixed costs. No-brainer.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Sell More",
    description:
      "With faster shipping and a premium unboxing experience, we'll turn browsers into beauty buyers — and buyers into brand fans.",
  },
]

export function CosmeticsCTA() {
  return (
    <CTA
      label="Get A Quote"
      heading="Get a Cosmetics Fulfillment Quote. Get Growing."
      description="Get a custom quote today and see how Handled turns shipping into growth for your beauty brand."
      benefits={benefits}
    />
  )
}
