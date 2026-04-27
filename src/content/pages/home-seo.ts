import { Warehouse, PackageCheck, Truck } from "lucide-react"
import type { Pricing3Plan } from "@/components/sections/pricing-3"
import { defaultGuarantees } from "@/components/sections/guarantees"
import { defaultCTABenefits } from "@/components/sections/cta"
import type { PageContentModel } from "@/lib/page-model"
import { canonicalForPath } from "@/lib/site-routes"

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

export const homeSEOPage: PageContentModel = {
  slug: "home",
  path: "/",
  pageType: "seo",
  primaryKeyword: "ecommerce fulfillment",
  secondaryKeywords: [
    "3PL",
    "order fulfillment",
    "same-day shipping",
    "fulfillment infrastructure",
  ],
  searchIntent: "commercial investigation",
  title: "Handled — Fulfillment Infrastructure for Modern Brands",
  description:
    "Ship faster, scale smarter. Handled gives ecommerce brands the warehouse network, technology, and performance guarantees to deliver exceptional customer experiences.",
  canonical: canonicalForPath("/"),
  og: {
    title: "Handled — Fulfillment Infrastructure for Modern Brands",
    description:
      "Ship faster, scale smarter. Bi-coastal fulfillment with same-day shipping and 99.9% accuracy.",
    type: "website",
  },
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Handled — Fulfillment Infrastructure for Modern Brands",
      url: canonicalForPath("/"),
      description:
        "Fulfillment infrastructure for modern ecommerce brands with same-day shipping and bi-coastal coverage.",
    },
  ],
  sections: [
    { key: "hero" },
    { key: "services" },
    { key: "platform" },
    {
      key: "integrationsFloating",
      props: {
        heading: "Connect your store in under 24 hours",
        description:
          "Handled integrates seamlessly with the platforms and tools you already use. One-click connections to Shopify, Amazon, ShipStation, and dozens more.",
      },
    },
    {
      key: "onboardingTimeline",
      props: {
        label: "Onboarding",
        heading: "Onboard your Shopify fulfillment in 2&nbsp;weeks",
        description:
          "We make launching Shopify fulfillment predictable and fast.",
        steps: [
          {
            description:
              "We connect your Shopify store, sync your inventory, and build Shopify Flow automations so fulfillment runs on autopilot. From the moment you go live, your ops team can focus on growth, not logistics.",
            bullets: [
              "Real-time Shopify orders, inventory, and tracking eliminate busywork",
              "Shopify Flow automations reduce manual processes",
              "Self-service returns portal handles refunds and exchanges seamlessly",
            ],
          },
          {
            description:
              "From day one, we configure real-time delivery info and order cutoffs in your Shopify checkout so your customers know exactly when to expect their order. Our same-day shipping promise goes live the moment you do.",
            bullets: [
              "Order-by cutoffs give Shopify shoppers confidence their order ships today",
              "Real delivery dates reduce 'Where's my order?' support tickets",
              "Shop Promise badges boost trust, urgency, and conversions",
            ],
          },
          {
            description:
              "During onboarding, we work with you to design branded packaging, inserts, and customer communications for your Shopify fulfillment that elevate your unboxing experience. Every shipment becomes a chance to reinforce your brand.",
            bullets: [
              "Branded boxes, tissue, inserts, and notes turn Shopify deliveries into lasting impressions",
              "Personalized tracking emails keep your brand in every inbox",
              "A branded self-serve returns portal reflects your standards to the very end",
            ],
          },
        ],
      },
    },
    {
      key: "guarantees",
      props: {
        heading: "We put our performance in writing",
        description:
          "Handled is one of the only 3PLs that backs every SLA with financial accountability. If we miss a guarantee, we pay — not you.",
        guarantees: defaultGuarantees,
      },
    },
    {
      key: "pricing3",
      props: {
        label: "Pricing",
        heading: "Transparent pricing that scales with you",
        description:
          "No surprise fees. No minimums. Just clean, usage-based pricing whether you ship 50 or 50,000 orders a month.",
        buttonText: "Get a Quote",
        buttonHref: "#get-a-quote",
        plans: homePricingPlans,
      },
    },
    { key: "testimonialsCustomers" },
    { key: "company" },
    {
      key: "faqCardGrid",
      props: {
        label: "FAQ",
        heading: "Fulfillment questions, answered",
        description:
          "Everything you need to know about outsourcing fulfillment with Handled.",
        faqItems: [
          {
            question: "What is a 3PL?",
            answer:
              "A 3PL (third-party logistics provider) is a company that handles warehousing, order fulfillment, and shipping on behalf of ecommerce brands. Handled is a 3PL that stores your inventory, picks and packs orders, and ships them to your customers — so you can focus on growing your business.",
          },
          {
            question: "How does Handled integrate with my store?",
            answer:
              "Handled connects to your ecommerce platform (Shopify, Amazon, WooCommerce, and more) with a one-click integration. Orders flow automatically to our fulfillment centers, and tracking information syncs back to your store in real time.",
          },
          {
            question: "What are your shipping speeds?",
            answer:
              "Every order received before 12PM local time ships the same day. With fulfillment centers in Los Angeles and New Jersey, we reach 95%+ of US customers within 2 business days via affordable ground shipping.",
          },
          {
            question: "Is there a minimum order volume?",
            answer:
              "No. Handled has no minimum order requirements. Our usage-based pricing scales with you — whether you ship 50 or 50,000 orders a month.",
          },
          {
            question: "How accurate is your fulfillment?",
            answer:
              "Handled maintains a 99.9% pick accuracy rate using barcode-verified picking and packing. Our error rate is 10x lower than the industry average, reducing returns and customer complaints.",
          },
          {
            question: "Do you offer custom packaging?",
            answer:
              "Yes. Handled supports branded boxes, tissue paper, inserts, gift notes, and custom unboxing experiences. Every shipment can be tailored to reinforce your brand identity.",
          },
        ],
      },
    },
    {
      key: "cta",
      props: {
        heading: "Get a Fulfillment Quote. Get&nbsp;Growing.",
        description:
          "Get a custom quote today and see how Handled turns shipping into growth.",
        benefits: defaultCTABenefits,
      },
    },
  ],
}
