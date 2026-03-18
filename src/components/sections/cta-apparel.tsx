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
      "No more juggling size-color matrices and return labels. We handle the busywork — so you can get back to designing your next collection.",
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: "Save Money",
    description:
      "Smarter shipping with poly mailers over boxes, fewer return-related support calls, and pricing that flexes with your apparel brand. No minimums. No fixed costs.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Sell More",
    description:
      "With 2-day delivery and a branded unboxing experience, we'll turn browsers into loyal clothing customers — and customers into brand ambassadors.",
  },
]

export function ApparelCTA() {
  return (
    <CTA
      label="Get A Quote"
      heading="Get an Apparel Fulfillment Quote. Get Growing."
      description="Get a custom quote today and see how Handled turns shipping into growth for your clothing brand."
      benefits={benefits}
    />
  )
}
