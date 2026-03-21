"use client"

import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Platform } from "@/components/sections/platform"
import { IntegrationsFloating } from "@/components/sections/integrations-floating"
import { IntegrationsCarousel } from "@/components/sections/integrations-carousel"
import { IntegrationsDiamond } from "@/components/sections/integrations-diamond"
import { Onboarding, defaultOnboardingSteps } from "@/components/sections/onboarding"
import { OnboardingTimeline } from "@/components/sections/onboarding-timeline"
import type { OnboardingTimelineItem } from "@/components/sections/onboarding-timeline"
import { IntegrationsUI } from "@/components/ui/integrations-ui"
import { CheckoutUI } from "@/components/ui/checkout-ui"
import { BrandingUI } from "@/components/ui/branding-ui"
import {
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineClock,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineEnvelope,
  HiOutlineSwatch,
} from "react-icons/hi2"
import { Guarantees, defaultGuarantees } from "@/components/sections/guarantees"
import { Pricing, defaultPricingPlans } from "@/components/sections/pricing"
import { Pricing3 } from "@/components/sections/pricing-3"
import type { Pricing3Plan } from "@/components/sections/pricing-3"
import { TestimonialsCustomers } from "@/components/sections/testimonials-customers"
import { Company } from "@/components/sections/company"
import { CTA, defaultCTABenefits } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { Warehouse, PackageCheck, Truck } from "lucide-react"

const pricingPlans: Pricing3Plan[] = [
  {
    name: "Storage",
    icon: Warehouse,
    price: 25,
    description:
      "Your inventory is stored securely and efficiently, with monthly pallet-based pricing you only pay for the space you need.",
    features: [
      "Pallet-level storage",
      "Climate-controlled space",
      "Real-time inventory sync",
      "Smart bin organization",
    ],
  },
  {
    name: "Fulfillment",
    icon: PackageCheck,
    price: 5,
    description:
      "Every order is picked and packed with care, with per-order pricing your costs rise only when your volume does.",
    features: [
      "Precision pick & pack",
      "Eco-friendly packaging",
      "Same-day dispatch",
      "Dashboard transparency",
      "High-volume scalability",
      "Custom packaging options",
    ],
    isHighlighted: true,
  },
  {
    name: "Shipping",
    icon: Truck,
    price: 4,
    description:
      "We optimize every order for speed and savings, with per-shipment pricing based on the carrier and service level used.",
    features: [
      "Preferred carrier rates",
      "Regional & national reach",
      "Optimized routing",
      "Dynamic label generation",
    ],
  },
]

const onboardingTimelineData: OnboardingTimelineItem[] = [
  {
    title: "Integrate and automate",
    date: "Week 1",
    stepLabel: "Step 1",
    description:
      "We connect your Shopify store, sync your inventory, and build Shopify Flow automations so fulfillment runs on autopilot. From the moment you go live, your ops team can focus on growth, not logistics.",
    bullets: [
      {
        icon: HiOutlineArrowPath,
        text: "Real-time Shopify orders, inventory, and tracking eliminate busywork",
      },
      {
        icon: HiOutlineBolt,
        text: "Shopify Flow automations reduce manual processes",
      },
      {
        icon: HiOutlineArrowPath,
        text: "Self-service returns portal handles refunds and exchanges seamlessly",
      },
    ],
    visual: <IntegrationsUI />,
  },
  {
    title: "Make shipping part of the sale",
    date: "Week 1–2",
    stepLabel: "Step 2",
    description:
      "From day one, we configure real-time delivery info and order cutoffs in your Shopify checkout so your customers know exactly when to expect their order. Our same-day shipping promise goes live the moment you do.",
    bullets: [
      {
        icon: HiOutlineClock,
        text: "Order-by cutoffs give Shopify shoppers confidence their order ships today",
      },
      {
        icon: HiOutlineTruck,
        text: "Real delivery dates reduce 'Where's my order?' support tickets",
      },
      {
        icon: HiOutlineShieldCheck,
        text: "Shop Promise badges boost trust, urgency, and conversions",
      },
    ],
    visual: <CheckoutUI />,
  },
  {
    title: "Brand literally everything",
    date: "Week 2",
    stepLabel: "Step 3",
    description:
      "During onboarding, we work with you to design branded packaging, inserts, and customer communications for your Shopify fulfillment that elevate your unboxing experience. Every shipment becomes a chance to reinforce your brand.",
    bullets: [
      {
        icon: HiOutlineCube,
        text: "Branded boxes, tissue, inserts, and notes turn Shopify deliveries into lasting impressions",
      },
      {
        icon: HiOutlineEnvelope,
        text: "Personalized tracking emails keep your brand in every inbox",
      },
      {
        icon: HiOutlineSwatch,
        text: "A branded self-serve returns portal reflects your standards to the very end",
      },
    ],
    visual: <BrandingUI />,
  },
]

export default function SectionTestPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero — bg: white */}
        <Hero />

        {/* 2. Services — bg: white */}
        <Services />

        {/* 3. Platform — bg: bg-muted/30 (built-in) */}
        <Platform />

        {/* 4. Integrations Floating — bg: white */}
        <IntegrationsFloating
          heading="Connect your store in under 24 hours"
          description="Handled integrates seamlessly with the platforms and tools you already use. One-click connections to Shopify, Amazon, ShipStation, and dozens more."
        />

        {/* 5. Integrations Carousel — bg: bg-muted/30 */}
        <IntegrationsCarousel
          heading="Connect your store in under 24 hours"
          description="Handled integrates seamlessly with the platforms and tools you already use. One-click connections to Shopify, Amazon, ShipStation, and dozens more."
          bgColor="bg-muted/30"
        />

        {/* 6. Integrations Diamond — bg: white */}
        <IntegrationsDiamond
          heading="Connect your store in under 24 hours"
          description="Handled integrates seamlessly with the platforms and tools you already use. One-click connections to Shopify, Amazon, ShipStation, and dozens more."
        />

        {/* 7. Onboarding Timeline — bg: bg-muted/30 */}
        <OnboardingTimeline
          heading="Onboard your Shopify fulfillment in 2 weeks"
          description="We make launching Shopify fulfillment predictable and fast."
          bgColor="bg-muted/30"
          data={onboardingTimelineData}
        />

        {/* 8. Onboarding — bg: white */}
        <Onboarding
          heading="Onboard your Shopify fulfillment in 2&nbsp;weeks"
          description="We make launching Shopify fulfillment predictable and fast."
          steps={defaultOnboardingSteps}
        />

        {/* 9. Guarantees — bg: bg-primary (built-in dark) */}
        <Guarantees
          heading="We put our performance in writing"
          description="Handled is one of the only 3PLs that backs every SLA with financial accountability. If we miss a guarantee, we pay — not you."
          guarantees={defaultGuarantees}
        />

        {/* 10. Pricing (card layout) — bg: white */}
        <Pricing
          heading="Simple, transparent pricing"
          description="No surprise fees. No minimums. Just clean, usage-based pricing whether you ship 50 or 50,000 orders a month."
          plans={defaultPricingPlans}
        />

        {/* 11. Pricing 3 (column layout) — bg: bg-muted (built-in) */}
        <Pricing3
          label="Pricing"
          heading="Transparent pricing that scales with you"
          description="No surprise fees. No minimums. Just clean, usage-based pricing whether you ship 50 or 50,000 orders a month."
          buttonText="Get a Quote"
          buttonHref="#get-a-quote"
          plans={pricingPlans}
        />

        {/* 12. Testimonials & Customers — bg: white */}
        <TestimonialsCustomers />

        {/* 13. Company — bg: bg-muted/30 (built-in) */}
        <Company />

        {/* 14. CTA — bg: bg-primary (built-in dark) */}
        <CTA
          heading="Get a Fulfillment Quote. Get&nbsp;Growing."
          description="Get a custom quote today and see how Handled turns shipping into growth."
          benefits={defaultCTABenefits}
        />
      </main>
      <Footer />
    </>
  )
}
