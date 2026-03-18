import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Platform } from "@/components/sections/platform"
import { Integrations } from "@/components/sections/integrations"
import { Onboarding, defaultOnboardingSteps } from "@/components/sections/onboarding"
import { Guarantees } from "@/components/sections/guarantees"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { Company } from "@/components/sections/company"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Platform />
        <Integrations />
        <Onboarding
          heading="Onboard your Shopify fulfillment in 2&nbsp;weeks"
          description="We make launching Shopify fulfillment predictable and fast."
          steps={defaultOnboardingSteps}
        />
        <Guarantees />
        <Pricing />
        <Testimonials />
        <Company />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
