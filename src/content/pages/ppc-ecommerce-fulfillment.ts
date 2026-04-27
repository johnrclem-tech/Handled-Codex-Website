import type { PageContentModel } from "@/lib/page-model"
import { defaultGuarantees } from "@/components/sections/guarantees"
import { defaultCTABenefits } from "@/components/sections/cta"
import { canonicalForPath } from "@/lib/site-routes"

export const ppcEcommerceFulfillmentPage: PageContentModel = {
  slug: "ecommerce-fulfillment",
  path: "/ppc/ecommerce-fulfillment",
  pageType: "ppc",
  primaryKeyword: "ecommerce fulfillment services",
  secondaryKeywords: [
    "3PL for ecommerce",
    "same day order fulfillment",
    "shopify fulfillment partner",
  ],
  searchIntent: "high commercial intent",
  title: "Ecommerce Fulfillment Services | Handled",
  description:
    "Get same-day ecommerce fulfillment, 99.9% pick accuracy, and bi-coastal 2-day delivery coverage. Talk to Handled today.",
  canonical: canonicalForPath("/ppc/ecommerce-fulfillment"),
  og: {
    title: "Ecommerce Fulfillment Services | Handled",
    description:
      "Same-day fulfillment, 99.9% accuracy, and bi-coastal coverage for growing ecommerce brands.",
    type: "website",
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Ecommerce Fulfillment Services | Handled",
      url: canonicalForPath("/ppc/ecommerce-fulfillment"),
      description:
        "PPC landing page for ecommerce fulfillment services with conversion-focused messaging and quote CTA.",
    },
  ],
  sections: [
    {
      key: "hero",
      props: {
        badgeText: "Built for high-growth ecommerce brands",
        headingPrefix: "Ecommerce fulfillment that",
        headingHighlight: "scales with your ad spend",
        description:
          "Drive paid traffic with confidence. Handled delivers same-day fulfillment, 99.9% accuracy, and bi-coastal delivery speeds that protect conversion and LTV.",
      },
    },
    {
      key: "guarantees",
      props: {
        label: "PPC Performance Backstops",
        heading: "Operational SLAs that support paid acquisition",
        description:
          "When ads work, operations must keep up. Handled guarantees speed and accuracy so your paid traffic converts profitably.",
        guarantees: defaultGuarantees,
      },
    },
    {
      key: "faqCardGrid",
      props: {
        label: "FAQ",
        heading: "Questions before you switch 3PLs",
        description:
          "Everything your team needs to evaluate Handled as your ecommerce fulfillment partner.",
        faqItems: [
          {
            question: "How quickly can we launch?",
            answer:
              "Most brands go live in 7–10 business days, depending on integration complexity and inbound inventory timing.",
          },
          {
            question: "Do you support paid traffic spikes?",
            answer:
              "Yes. Handled is built to absorb campaign-driven demand spikes while maintaining SLA commitments.",
          },
          {
            question: "Can you integrate with Shopify and marketplaces?",
            answer:
              "Yes. Handled supports Shopify and key marketplaces with real-time order, inventory, and tracking sync.",
          },
        ],
      },
    },
    {
      key: "cta",
      props: {
        label: "Get A Quote",
        heading: "Get a quote for your paid growth forecast",
        description:
          "Share your monthly order volume, AOV, and campaign goals. We&apos;ll model a fulfillment setup aligned to your growth plan.",
        benefits: defaultCTABenefits,
      },
    },
  ],
}
