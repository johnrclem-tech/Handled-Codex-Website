import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Platform } from "@/components/sections/platform"
import { IntegrationsFloating } from "@/components/sections/integrations-floating"
import { IntegrationsCarousel } from "@/components/sections/integrations-carousel"
import { IntegrationsDiamond } from "@/components/sections/integrations-diamond"
import { Onboarding, defaultOnboardingSteps } from "@/components/sections/onboarding"
import { Guarantees, defaultGuarantees } from "@/components/sections/guarantees"
import { Pricing, defaultPricingPlans } from "@/components/sections/pricing"
import { Pricing3 } from "@/components/sections/pricing-3"
import type { Pricing3Plan } from "@/components/sections/pricing-3"
import { TestimonialsCustomers } from "@/components/sections/testimonials-customers"
import { Company } from "@/components/sections/company"
import { CTA, defaultCTABenefits } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"
import { Warehouse, PackageCheck, Truck } from "lucide-react"

const testPricingPlans: Pricing3Plan[] = [
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

export default function SectionTestPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Services — bg: white */}
        <Services />

        {/* 3. Platform — bg: bg-muted/30 (built-in) */}
        <Platform />

        {/* 4. Integrations Floating — bg: white */}
        <IntegrationsFloating
          heading="Integrations Floating"
          description="Floating integration icons with magnetic hover effect and entrance animations."
        />

        {/* 5. Integrations Carousel — bg: bg-muted/30 */}
        <IntegrationsCarousel
          heading="Integrations Carousel"
          description="Dual-row marquee carousel of integration icons with hover-to-pause."
          bgColor="bg-muted/30"
        />

        {/* 6. Integrations Diamond — bg: white */}
        <IntegrationsDiamond
          heading="Integrations Diamond"
          description="Diamond-shaped grid layout of integration icons in a 1-2-3-2-1 column pattern."
        />

        {/* 7. Onboarding — bg: white */}
        <Onboarding
          heading="Onboard your fulfillment in 2&nbsp;weeks"
          description="We make launching fulfillment predictable and fast."
          steps={defaultOnboardingSteps}
        />

        {/* 8. Guarantees — bg: bg-primary (built-in dark) */}
        <Guarantees
          heading="We put our performance in writing"
          description="Handled is one of the only 3PLs that backs every SLA with financial accountability."
          guarantees={defaultGuarantees}
        />

        {/* 9. Pricing (card layout) — bg: white */}
        <Pricing
          heading="Simple, transparent pricing"
          description="No surprise fees. Just clean, usage-based pricing."
          plans={defaultPricingPlans}
        />

        {/* 10. Pricing 3 (column layout) — bg: bg-muted (built-in) */}
        <Pricing3
          label="Pricing"
          heading="Transparent pricing that scales with you"
          description="No surprise fees. No minimums. Just clean, usage-based pricing whether you ship 50 or 50,000 orders a month."
          buttonText="Get a Quote"
          buttonHref="#get-a-quote"
          plans={testPricingPlans}
        />

        {/* 11. Testimonials & Customers — bg: white */}
        <TestimonialsCustomers />

        {/* 12. Company — bg: bg-muted/30 (built-in) */}
        <Company />

        {/* 13. CTA — bg: bg-primary (built-in dark) */}
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
