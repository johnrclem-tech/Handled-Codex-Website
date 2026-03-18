"use client"

import {
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineEnvelope,
  HiOutlineSwatch,
} from "react-icons/hi2"
import { Onboarding } from "@/components/sections/onboarding"
import type { OnboardingStep } from "@/components/sections/onboarding"

const steps: OnboardingStep[] = [
  {
    number: "1",
    badge: "Week 1",
    title: "Integrate and automate",
    description:
      "We connect your ecommerce platform, sync your beauty inventory with lot tracking and expiration dates, and configure automations so cosmetics fulfillment runs on autopilot from day one.",
    bullets: [
      { icon: HiOutlineArrowPath, text: "Real-time order sync, inventory with lot tracking, and automatic tracking updates" },
      { icon: HiOutlineBolt, text: "Automated workflows for restock alerts, order routing, and quality holds" },
      { icon: HiOutlineArrowPath, text: "Self-service returns portal with quarantine protocols for opened beauty products" },
    ],
    color: "blue",
  },
  {
    number: "2",
    badge: "Week 1–2",
    title: "Make shipping part of the sale",
    description:
      "We configure real-time delivery dates and order cutoffs in your checkout so your beauty customers know exactly when their products will arrive. Same-day shipping goes live the moment you do.",
    bullets: [
      { icon: HiOutlineClock, text: "Order-by cutoffs give customers confidence their beauty order ships today" },
      { icon: HiOutlineTruck, text: "Real delivery dates reduce 'Where's my order?' support tickets" },
      { icon: HiOutlineShieldCheck, text: "Delivery guarantees boost trust and conversions for premium beauty purchases" },
    ],
    color: "emerald",
  },
  {
    number: "3",
    badge: "Week 2",
    title: "Brand literally everything",
    description:
      "During onboarding, we design branded packaging, inserts, and customer communications that match the premium feel of your beauty products. Every shipment becomes an Instagram-worthy unboxing moment.",
    bullets: [
      { icon: HiOutlineCube, text: "Custom branded boxes, tissue, inserts, and samples elevate every beauty delivery" },
      { icon: HiOutlineEnvelope, text: "Personalized tracking emails keep your beauty brand in every inbox" },
      { icon: HiOutlineSwatch, text: "A branded returns portal reflects your premium standards from purchase to return" },
    ],
    color: "purple",
  },
]

export function CosmeticsOnboarding() {
  return (
    <Onboarding
      label="Beauty Brand Onboarding"
      heading="Onboard your cosmetics fulfillment in 2&nbsp;weeks"
      description="We make launching beauty fulfillment predictable and fast — with climate-controlled storage, lot tracking, and fragile-safe handling configured from day one."
      steps={steps}
    />
  )
}
