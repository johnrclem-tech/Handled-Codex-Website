import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Platform } from "@/components/sections/platform"
import { IntegrationsFloating } from "@/components/sections/integrations-floating"
import { OnboardingTimeline } from "@/components/sections/onboarding-timeline"
import { shopifyOnboardingData } from "@/components/sections/onboarding-data"
import { Guarantees, defaultGuarantees } from "@/components/sections/guarantees"
import { Pricing3 } from "@/components/sections/pricing-3"
import type { Pricing3Plan } from "@/components/sections/pricing-3"
import { TestimonialsCustomers } from "@/components/sections/testimonials-customers"
import { Company } from "@/components/sections/company"
import { CTA, defaultCTABenefits } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { Warehouse, PackageCheck, Truck } from "lucide-react"

const homePricingPlans: Pricing3Plan[] = [
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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Platform />
        <IntegrationsFloating
          heading="Connect your store in under 24 hours"
          description="Handled integrates seamlessly with the platforms and tools you already use. One-click connections to Shopify, Amazon, ShipStation, and dozens more."
        />
        <OnboardingTimeline
          label="Onboarding"
          heading="Onboard your Shopify fulfillment in 2&nbsp;weeks"
          description="We make launching Shopify fulfillment predictable and fast."
          data={shopifyOnboardingData}
        />
        <Guarantees
          heading="We put our performance in writing"
          description="Handled is one of the only 3PLs that backs every SLA with financial accountability. If we miss a guarantee, we pay — not you."
          guarantees={defaultGuarantees}
        />
        <Pricing3
          label="Pricing"
          heading="Transparent pricing that scales with you"
          description="No surprise fees. No minimums. Just clean, usage-based pricing whether you ship 50 or 50,000 orders a month."
          buttonText="Get a Quote"
          buttonHref="#get-a-quote"
          plans={homePricingPlans}
        />
        <TestimonialsCustomers />
        <Company />
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
