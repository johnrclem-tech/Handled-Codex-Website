"use client"

import {
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineCodeBracket,
} from "react-icons/hi2"
import { Onboarding } from "@/components/sections/onboarding"
import type { OnboardingStep } from "@/components/sections/onboarding"

const steps: OnboardingStep[] = [
  {
    number: "1",
    badge: "Week 1",
    title: "Integrate and automate",
    description:
      "We connect your ecommerce platform — Shopify, Amazon, WooCommerce, or any other — sync your inventory, and configure automations so order fulfillment runs on autopilot from the moment you go live.",
    bullets: [
      { icon: HiOutlineArrowPath, text: "Real-time order sync, inventory tracking, and automatic tracking updates across all channels" },
      { icon: HiOutlineBolt, text: "Automated workflows for order routing, low-stock alerts, and fulfillment rules" },
      { icon: HiOutlineArrowPath, text: "Self-service returns portal handles refunds and exchanges seamlessly" },
    ],
    color: "blue",
  },
  {
    number: "2",
    badge: "Week 1–2",
    title: "Make shipping part of the sale",
    description:
      "We configure real-time delivery dates and order cutoffs in your checkout so customers know exactly when to expect their order. Same-day shipping goes live the moment you do.",
    bullets: [
      { icon: HiOutlineClock, text: "Order-by cutoffs give online shoppers confidence their order ships today" },
      { icon: HiOutlineTruck, text: "Real delivery dates reduce 'Where's my order?' support tickets" },
      { icon: HiOutlineShieldCheck, text: "Delivery guarantees boost trust, urgency, and conversions at checkout" },
    ],
    color: "emerald",
  },
  {
    number: "3",
    badge: "Week 2",
    title: "Brand literally everything",
    description:
      "During onboarding, we design branded packaging, inserts, and customer communications that elevate your ecommerce unboxing experience. Every shipment becomes a chance to reinforce your brand.",
    bullets: [
      { icon: HiOutlineCube, text: "Custom boxes, tissue, inserts, and notes turn every delivery into a brand moment" },
      { icon: HiOutlineCodeBracket, text: "Personalized tracking emails keep your brand in every customer inbox" },
      { icon: HiOutlineShieldCheck, text: "A branded self-serve returns portal reflects your standards from purchase to return" },
    ],
    color: "purple",
  },
]

export function EcommerceOnboarding() {
  return (
    <Onboarding
      label="Ecommerce Onboarding"
      heading="Onboard your ecommerce fulfillment in 2&nbsp;weeks"
      description="We make launching ecommerce fulfillment predictable and fast. Our dedicated onboarding team handles every integration, automation, and branding detail so your store ships on schedule."
      steps={steps}
    />
  )
}
