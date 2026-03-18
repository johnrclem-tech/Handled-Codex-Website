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
      "No more tracking down tracking. We handle the busywork — picking, packing, shipping, and returns — so you can get back to building your brand.",
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: "Save Money",
    description:
      "Smarter shipping, fewer support calls, and pricing that flexes with you. No minimums. No fixed costs. No-brainer.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Sell More",
    description:
      "With faster shipping and a branded delivery experience, we'll turn browsers into buyers — and buyers into brand fans.",
  },
]

export function EcommerceCTA() {
  return (
    <CTA
      label="Get A Quote"
      heading="Get an Ecommerce Fulfillment Quote. Get Growing."
      description="Get a custom quote today and see how Handled turns shipping into growth for your online store."
      benefits={benefits}
    />
  )
}
