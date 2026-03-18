import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Platform } from "@/components/sections/platform"
import { Integrations } from "@/components/sections/integrations"
import { Onboarding, defaultOnboardingSteps } from "@/components/sections/onboarding"
import { Guarantees, defaultGuarantees } from "@/components/sections/guarantees"
import { Pricing, defaultPricingPlans } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { Company } from "@/components/sections/company"
import { CTA, defaultCTABenefits } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Platform />
        <Integrations
          heading="Connect your store in under 24 hours"
          description="Handled integrates seamlessly with the platforms and tools you already use. One-click connections to Shopify, Amazon, ShipStation, and dozens more."
        />
        <Onboarding
          heading="Onboard your Shopify fulfillment in 2&nbsp;weeks"
          description="We make launching Shopify fulfillment predictable and fast."
          steps={defaultOnboardingSteps}
        />
        <Guarantees
          heading="We put our performance in writing"
          description="Handled is one of the only 3PLs that backs every SLA with financial accountability. If we miss a guarantee, we pay — not you."
          guarantees={defaultGuarantees}
        />
        <Pricing
          heading="Transparent pricing that scales with you"
          description="No surprise fees. No minimums. Just clean, usage-based pricing whether you ship 50 or 50,000 orders a month."
          plans={defaultPricingPlans}
        />
        <Testimonials />
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
