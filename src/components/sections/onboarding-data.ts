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
  HiOutlineSparkles,
  HiOutlineCodeBracket,
} from "react-icons/hi2"
import type { OnboardingStep } from "./onboarding"

export const cosmeticsOnboardingSteps: OnboardingStep[] = [
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

export const apparelOnboardingSteps: OnboardingStep[] = [
  {
    number: "1",
    badge: "Week 1",
    title: "Integrate and automate",
    description:
      "We connect your ecommerce platform, sync your entire apparel catalog — every size, color, and style variant — and configure automations so clothing fulfillment runs on autopilot from day one.",
    bullets: [
      { icon: HiOutlineArrowPath, text: "Real-time order sync, size/color variant tracking, and automatic tracking updates" },
      { icon: HiOutlineBolt, text: "Automated workflows for restock alerts, seasonal inventory, and order routing" },
      { icon: HiOutlineArrowPath, text: "Self-service returns portal handles the high return rates of fashion ecommerce" },
    ],
    color: "blue",
  },
  {
    number: "2",
    badge: "Week 1–2",
    title: "Make shipping part of the sale",
    description:
      "We configure real-time delivery dates and order cutoffs in your checkout so fashion shoppers know exactly when their clothing will arrive. Same-day shipping goes live the moment you do.",
    bullets: [
      { icon: HiOutlineClock, text: "Order-by cutoffs give shoppers confidence their apparel order ships today" },
      { icon: HiOutlineTruck, text: "Real delivery dates reduce 'Where's my order?' support tickets" },
      { icon: HiOutlineShieldCheck, text: "Delivery guarantees boost conversion and reduce cart abandonment for fashion purchases" },
    ],
    color: "emerald",
  },
  {
    number: "3",
    badge: "Week 2",
    title: "Brand literally everything",
    description:
      "During onboarding, we design branded poly mailers, tissue paper, inserts, and customer communications that match the quality of your clothing brand. Every shipment becomes a brand touchpoint.",
    bullets: [
      { icon: HiOutlineCube, text: "Custom poly mailers, branded tissue, garment bags, and inserts for every apparel order" },
      { icon: HiOutlineEnvelope, text: "Personalized tracking emails keep your fashion brand in every inbox" },
      { icon: HiOutlineSwatch, text: "A branded returns portal turns reverse logistics into a seamless brand experience" },
    ],
    color: "purple",
  },
]

export const shopifyOnboardingSteps: OnboardingStep[] = [
  {
    number: "1",
    badge: "Week 1",
    title: "Integrate and automate",
    description:
      "We connect your Shopify store, sync your inventory, and build Shopify Flow automations so fulfillment runs on autopilot. From the moment you go live, your ops team can focus on growth, not logistics.",
    bullets: [
      { icon: HiOutlineArrowPath, text: "Real-time Shopify orders, inventory, and tracking eliminate busywork" },
      { icon: HiOutlineBolt, text: "Shopify Flow automations reduce manual processes" },
      { icon: HiOutlineArrowPath, text: "Self-service returns portal handles refunds and exchanges seamlessly" },
    ],
    color: "blue",
  },
  {
    number: "2",
    badge: "Week 1–2",
    title: "Make shipping part of the sale",
    description:
      "From day one, we configure real-time delivery info and order cutoffs in your Shopify checkout so your customers know exactly when to expect their order. Our same-day shipping promise goes live the moment you do.",
    bullets: [
      { icon: HiOutlineClock, text: "Order-by cutoffs give Shopify shoppers confidence their order ships today" },
      { icon: HiOutlineTruck, text: "Real delivery dates reduce 'Where's my order?' support tickets" },
      { icon: HiOutlineShieldCheck, text: "Shop Promise badges boost trust, urgency, and conversions" },
    ],
    color: "emerald",
  },
  {
    number: "3",
    badge: "Week 2",
    title: "Brand literally everything",
    description:
      "During onboarding, we work with you to design branded packaging, inserts, and customer communications for your Shopify fulfillment that elevate your unboxing experience. Every shipment becomes a chance to reinforce your brand.",
    bullets: [
      { icon: HiOutlineCube, text: "Branded boxes, tissue, inserts, and notes turn Shopify deliveries into lasting impressions" },
      { icon: HiOutlineSparkles, text: "Personalized tracking emails keep your brand in every inbox" },
      { icon: HiOutlineShieldCheck, text: "A branded self-serve returns portal reflects your standards to the very end" },
    ],
    color: "purple",
  },
]

export const ecommerceOnboardingSteps: OnboardingStep[] = [
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
