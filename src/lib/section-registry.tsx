import { createElement } from "react"
import type { ComponentType, ReactElement } from "react"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Platform } from "@/components/sections/platform"
import { IntegrationsCarousel } from "@/components/sections/integrations-carousel"
import { OnboardingTimeline } from "@/components/sections/onboarding-timeline"
import { Guarantees } from "@/components/sections/guarantees"
import { Pricing3 } from "@/components/sections/pricing-3"
import { TestimonialsCustomers } from "@/components/sections/testimonials-customers"
import { FAQCardGrid } from "@/components/sections/faq-card-grid"
import { CTA } from "@/components/sections/cta"
import type { SectionConfig, SectionKey } from "@/lib/page-model"

type DynamicSectionRenderer = (props?: Record<string, unknown>) => ReactElement

function renderDynamicSection(
  Component: ComponentType<Record<string, unknown>>
): DynamicSectionRenderer {
  return function DynamicSectionRenderer(props?: Record<string, unknown>) {
    return createElement(Component, props ?? {})
  }
}

function asDynamicComponent(
  Component: unknown
): ComponentType<Record<string, unknown>> {
  return Component as ComponentType<Record<string, unknown>>
}

const sectionRegistry: Record<SectionKey, DynamicSectionRenderer> = {
  hero: renderDynamicSection(asDynamicComponent(Hero)),
  services: renderDynamicSection(asDynamicComponent(Services)),
  platform: renderDynamicSection(asDynamicComponent(Platform)),
  integrationsFloating: renderDynamicSection(
    asDynamicComponent(IntegrationsCarousel)
  ),
  onboardingTimeline: renderDynamicSection(
    asDynamicComponent(OnboardingTimeline)
  ),
  guarantees: renderDynamicSection(asDynamicComponent(Guarantees)),
  pricing3: renderDynamicSection(asDynamicComponent(Pricing3)),
  testimonialsCustomers: renderDynamicSection(
    asDynamicComponent(TestimonialsCustomers)
  ),
  faqCardGrid: renderDynamicSection(asDynamicComponent(FAQCardGrid)),
  cta: renderDynamicSection(asDynamicComponent(CTA)),
}

export function renderPageSections(sections: SectionConfig[]) {
  return sections.map((section, index) => {
    const renderSection = sectionRegistry[section.key]
    if (!renderSection) {
      return null
    }

    return <div key={`${section.key}-${index}`}>{renderSection(section.props)}</div>
  })
}
