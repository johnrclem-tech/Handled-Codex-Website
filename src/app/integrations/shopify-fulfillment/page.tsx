import type { Metadata } from "next"
import React from "react"
import Link from "next/link"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  HiOutlineArrowRight,
  HiOutlineBolt,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineArrowPath,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineGlobeAlt,
  HiOutlineCodeBracket,
  HiOutlineCog6Tooth,
  HiOutlineCheckCircle,
  HiOutlineBuildingStorefront,
  HiOutlineSparkles,
} from "react-icons/hi2"
import { SiShopify } from "react-icons/si"
import { OnboardingTimeline } from "@/components/sections/onboarding-timeline"
import { Pricing3 } from "@/components/sections/pricing-3"
import type { Pricing3Plan } from "@/components/sections/pricing-3"
import { Guarantees } from "@/components/sections/guarantees"
import type { GuaranteeItem } from "@/components/sections/guarantees"
import { FAQCardGrid } from "@/components/sections/faq-card-grid"
import { CTA } from "@/components/sections/cta"
import type { CTABenefit } from "@/components/sections/cta"
import { IntegrationsFloating } from "@/components/sections/integrations-floating"
import { TestimonialsCustomers } from "@/components/sections/testimonials-customers"
import { Warehouse, PackageCheck, Truck } from "lucide-react"
import { canonicalForPath } from "@/lib/site-routes"
import {
  HiOutlineCurrencyDollar,
  HiOutlineEnvelope,
  HiOutlineRocketLaunch,
  HiOutlineSwatch,
} from "react-icons/hi2"

export const metadata: Metadata = {
  title: "Shopify Fulfillment Services | 3PL for Shopify Brands — Handled",
  description:
    "Handled is a Shopify fulfillment partner and 3PL built for DTC brands. Same-day shipping, 99.9% accuracy, bi-coastal warehouses, and a native Shopify integration. Get a free fulfillment quote today.",
  keywords: [
    "Shopify fulfillment",
    "Shopify fulfillment services",
    "Shopify 3PL",
    "Shopify fulfillment partner",
    "Shopify order fulfillment",
    "Shopify warehouse",
    "Shopify fulfillment center",
    "Shopify fulfillment company",
    "Shopify shipping",
    "Shopify logistics",
    "Shopify inventory management",
    "3PL for Shopify",
    "third party logistics Shopify",
    "Shopify ecommerce fulfillment",
    "Shopify pick and pack",
    "Shopify fulfillment provider",
    "best 3PL for Shopify",
    "Shopify fulfillment warehouse",
    "DTC fulfillment Shopify",
    "Shopify order management",
  ],
  openGraph: {
    title: "Shopify Fulfillment Services | 3PL for Shopify Brands — Handled",
    description:
      "Same-day shipping, 99.9% accuracy, and a native Shopify integration. Handled is the 3PL built for Shopify brands.",
    siteName: "Handled",
    type: "website",
  },
  alternates: {
    canonical: canonicalForPath("/integrations/shopify-fulfillment"),
  },
}

const fulfillmentFeatures = [
  {
    icon: HiOutlineCodeBracket,
    title: "Native Shopify Integration",
    description:
      "One-click Shopify app connects your store in minutes. Orders, inventory, and tracking sync automatically — no manual work, no CSV uploads, no middleware needed.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: HiOutlineClock,
    title: "Same-Day Fulfillment",
    description:
      "Every Shopify order received before 12PM local time ships the same day. Our fulfillment SLA is backed financially — if we miss it, we cover it.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "99.9% Pick Accuracy",
    description:
      "Barcode-verified picking and packing ensures the right products reach the right customers. Our error rate is 10x lower than the industry average.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: HiOutlineTruck,
    title: "2-Day Ground Nationwide",
    description:
      "With fulfillment centers in Los Angeles and New Jersey, Handled reaches 95%+ of US customers within 2 business days via affordable ground shipping.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: HiOutlineChartBar,
    title: "Real-Time Inventory Sync",
    description:
      "Inventory levels update in real time between your Shopify store and our warehouses. Prevent overselling, automate low-stock alerts, and maintain accuracy across all sales channels.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Branded Returns Portal",
    description:
      "Give your Shopify customers a seamless returns experience with a branded self-service portal. Automatic restocking, quality inspection, and instant inventory updates.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
]

const whyHandled = [
  {
    icon: HiOutlineCube,
    title: "Shopify Fulfillment Experts",
    description:
      "We specialize in Shopify fulfillment and understand the nuances of the Shopify ecosystem — from Shopify Plus to Shopify Markets, checkout extensibility, and multi-location inventory.",
  },
  {
    icon: HiOutlineBuildingStorefront,
    title: "Bi-Coastal Warehouse Network",
    description:
      "Our fulfillment centers in LA and NJ give your Shopify store bi-coastal coverage. Split inventory intelligently to minimize shipping zones and reduce transit times for every order.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Omnichannel Fulfillment",
    description:
      "Fulfill Shopify DTC, wholesale, Amazon, and marketplace orders from one inventory pool. Handled consolidates your fulfillment operations across every channel you sell on.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Custom Packaging & Kitting",
    description:
      "Elevate your Shopify brand with custom unboxing experiences. We handle branded packaging, inserts, gift wrapping, subscription box assembly, and multi-SKU kitting.",
  },
]

const integrationSteps = [
  {
    step: "1",
    title: "Connect Your Shopify Store",
    description:
      "Install the Handled app from the Shopify App Store and authorize the connection. Your products, variants, and order history sync automatically.",
  },
  {
    step: "2",
    title: "Send Us Your Inventory",
    description:
      "Ship your products to our fulfillment centers. We receive, inspect, barcode, and shelve your inventory — ready to ship within 48 hours of arrival.",
  },
  {
    step: "3",
    title: "We Fulfill Your Orders",
    description:
      "When a customer places an order on your Shopify store, it flows to Handled instantly. We pick, pack, and ship with same-day speed and 99.9% accuracy.",
  },
  {
    step: "4",
    title: "Track Everything in Real Time",
    description:
      "Tracking numbers push back to Shopify automatically. Monitor fulfillment performance, inventory levels, and shipping analytics from your Handled dashboard.",
  },
]

const faqs = [
  {
    question: "What is Shopify fulfillment?",
    answer:
      "Shopify fulfillment is the process of storing inventory, picking and packing orders, and shipping products to customers who purchase from your Shopify store. A Shopify fulfillment partner like Handled manages this entire process — from warehousing to last-mile delivery — so you can focus on marketing, product development, and growing your brand.",
  },
  {
    question: "What is a 3PL for Shopify?",
    answer:
      "A 3PL (third-party logistics provider) for Shopify is an outsourced fulfillment company that integrates directly with your Shopify store to handle warehousing, order fulfillment, shipping, and returns. Handled is a 3PL purpose-built for Shopify brands, with a native integration that syncs orders and inventory in real time.",
  },
  {
    question: "How does Handled integrate with Shopify?",
    answer:
      "Handled connects to your Shopify store via a native app integration. Once installed, orders flow automatically to our fulfillment centers. We pick, pack, and ship each order, then push tracking information back to Shopify so your customers receive shipping updates. Inventory levels sync in real time to prevent overselling.",
  },
  {
    question: "How much does Shopify fulfillment cost?",
    answer:
      "Shopify fulfillment pricing depends on your order volume, product dimensions, shipping destinations, and any special handling like kitting or custom packaging. Handled offers transparent, per-order pricing with no hidden fees. Contact our team for a custom fulfillment quote based on your Shopify store's needs.",
  },
  {
    question: "What is the difference between Shopify Fulfillment Network and a 3PL like Handled?",
    answer:
      "Shopify Fulfillment Network (SFN) is Shopify's own logistics service, while a 3PL like Handled is an independent fulfillment partner. Handled offers dedicated account management, custom packaging, bi-coastal warehouses, and financially-backed SLAs that go beyond what SFN provides. We give Shopify brands more control, transparency, and performance guarantees.",
  },
  {
    question: "Can Handled fulfill Shopify Plus orders?",
    answer:
      "Yes. Handled fully supports Shopify Plus stores, including advanced features like Shopify Flow automations, multi-location inventory, B2B wholesale channels, and high-volume flash sale fulfillment. Our infrastructure scales with your Shopify Plus store.",
  },
  {
    question: "Does Handled support Shopify returns?",
    answer:
      "Yes. Handled provides a fully branded returns portal for your Shopify store. Customers can initiate returns, print shipping labels, and track return status. Once we receive the return, we inspect the item and restock it automatically, updating your Shopify inventory in real time.",
  },
  {
    question: "Where are Handled's fulfillment centers located?",
    answer:
      "Handled operates fulfillment centers in Los Angeles, CA and northern New Jersey. This bi-coastal warehouse network allows us to reach 95%+ of US customers within 2 business days via ground shipping, keeping your Shopify shipping costs low and delivery speeds fast.",
  },
]

const shopifyGuarantees: GuaranteeItem[] = [
  {
    icon: HiOutlineClock,
    title: "Same-Day Shopify Shipping",
    description:
      "Every Shopify order received by 12PM local time ships the same day — backed by a financial SLA. If we miss it, we cover it. Your Shopify customers get the fast delivery they expect.",
    metric: "100%",
    metricLabel: "same-day shipping guarantee",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Shopify Order Accuracy",
    description:
      "Barcode-verified picking ensures the right product ships on every Shopify order. Wrong items mean returns, refunds, and lost trust — our 99.9% accuracy rate eliminates that risk.",
    metric: "99.9%",
    metricLabel: "Shopify pick accuracy",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Instant Shopify Inventory Sync",
    description:
      "Inventory updates push to your Shopify store in real time. Restocked items are available for sale the same day they arrive — no overselling, no manual updates, no delays.",
    metric: "Same-day",
    metricLabel: "restock & sync guarantee",
  },
]

const shopifyPricing3Plans: Pricing3Plan[] = [
  {
    name: "Storage",
    icon: Warehouse,
    description:
      "Your Shopify inventory is stored securely with real-time sync to your store. Monthly pallet-based pricing means you only pay for the space you use.",
    features: [
      "Pallet-level storage",
      "Real-time Shopify inventory sync",
      "Climate-controlled space",
      "Smart bin organization",
      "Scale up/down monthly",
    ],
  },
  {
    name: "Fulfillment",
    icon: PackageCheck,
    description:
      "Every Shopify order is picked and packed with care. Per-order pricing means your costs only rise when your Shopify sales do.",
    features: [
      "Barcode-verified pick & pack",
      "Shopify order auto-sync",
      "Same-day dispatch",
      "Dashboard transparency",
      "Flash sale scalability",
    ],
    isHighlighted: true,
  },
  {
    name: "Shipping",
    icon: Truck,
    description:
      "We optimize every Shopify order for speed and savings. Per-shipment pricing based on the carrier and service level selected at checkout.",
    features: [
      "Discounted carrier rates",
      "Shop Promise eligible",
      "2-day ground nationwide",
      "Auto tracking push to Shopify",
      "Real-time delivery dates",
    ],
  },
]

const shopifyCtaBenefits: CTABenefit[] = [
  {
    icon: HiOutlineClock,
    title: "Save Time",
    description:
      "No more toggling between Shopify and your 3PL. Orders, inventory, and tracking sync automatically — so you can focus on growing your store.",
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: "Save Money",
    description:
      "Discounted carrier rates, bi-coastal warehouses for zone skipping, and usage-based pricing that scales with your Shopify sales. No minimums. No fixed costs.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Sell More",
    description:
      "Faster delivery speeds and branded tracking turn one-time Shopify buyers into loyal repeat customers — and your best marketing channel.",
  },
]

export default function ShopifyFulfillmentPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-50/80 to-transparent rounded-full blur-3xl -z-10" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1 text-xs font-medium">
                <SiShopify className="h-3.5 w-3.5 text-[#96bf48]" />
                Official Shopify Fulfillment Partner
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Shopify fulfillment built for{" "}
                <span className="gradient-text">scaling brands</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Handled is the 3PL that Shopify brands trust for fast, accurate order fulfillment.
                Same-day shipping, bi-coastal warehouses, and a native Shopify integration — so you
                can focus on growing, not shipping.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact-sales">
                    Get a fulfillment quote
                    <HiOutlineArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#how-it-works">See how it works</Link>
                </Button>
              </div>

              <div className="mt-12 flex gap-8 justify-center border-t border-border pt-8">
                <div>
                  <p className="text-2xl font-bold">99.9%</p>
                  <p className="text-sm text-muted-foreground">Pick accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-sm text-muted-foreground">Same-day shipping</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">2-day</p>
                  <p className="text-sm text-muted-foreground">Ground nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Shopify Fulfillment */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-blue-600 mb-3">What is Shopify Fulfillment?</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The complete guide to Shopify order fulfillment
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Shopify fulfillment</strong> is the end-to-end process of
                  receiving, storing, picking, packing, and shipping orders placed through your Shopify
                  store. For growing ecommerce brands, managing fulfillment in-house quickly becomes
                  a bottleneck — which is where a <strong className="text-foreground">Shopify 3PL</strong> (third-party
                  logistics provider) like Handled comes in.
                </p>
                <p>
                  A <strong className="text-foreground">Shopify fulfillment partner</strong> takes over your
                  warehousing and shipping operations, connecting directly to your Shopify store to
                  automatically process orders as they come in. This means faster shipping, fewer
                  errors, lower costs, and more time for you to focus on what matters: building your brand.
                </p>
                <p>
                  Whether you&apos;re a startup shipping 100 orders a month or an established brand
                  processing thousands of orders daily, outsourcing to a <strong className="text-foreground">Shopify
                  fulfillment company</strong> like Handled gives you enterprise-grade logistics
                  infrastructure without the overhead of running your own warehouse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fulfillment Features */}
        <section id="features" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-blue-600 mb-3">Shopify Fulfillment Services</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Everything your Shopify store needs to ship at scale
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From native Shopify integration to bi-coastal warehousing, Handled gives your
                ecommerce brand the fulfillment infrastructure to deliver fast, accurate orders every time.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fulfillmentFeatures.map((feature) => (
                <Card
                  key={feature.title}
                  className="group hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border-border/60"
                >
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${feature.bg} mb-4`}
                    >
                      <feature.icon className={`h-5 w-5 ${feature.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Handled for Shopify */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-blue-400 mb-3">Why Shopify Brands Choose Handled</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The 3PL built for Shopify fulfillment
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/70">
                Handled isn&apos;t a generic warehouse with a Shopify plugin. We&apos;re a fulfillment
                partner purpose-built for Shopify brands — with the technology, network, and SLAs to prove it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyHandled.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 hover:bg-primary-foreground/[0.08] transition-colors"
                >
                  <item.icon className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-blue-600 mb-3">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Connect your Shopify store in minutes
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Getting started with Shopify fulfillment through Handled is simple.
                Our onboarding team handles everything so you can start shipping fast.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrationSteps.map((item) => (
                <div key={item.step} className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Guarantees
          label="Shopify Fulfillment SLAs"
          heading="Shopify fulfillment guarantees backed by real accountability"
          description="Most Shopify 3PLs promise fast shipping. Handled puts it in writing — with financial penalties if we don't deliver. That's the difference between a fulfillment vendor and a fulfillment partner."
          guarantees={shopifyGuarantees}
        />

        {/* Shopify Fulfillment Use Cases */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-blue-600 mb-3">Shopify Fulfillment Solutions</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Fulfillment for every type of Shopify business
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Whether you sell DTC, wholesale, or across multiple channels — Handled has the
                fulfillment solution for your Shopify store.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl border border-border/60 p-6">
                <HiOutlineCube className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">DTC Shopify Fulfillment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Fast, branded fulfillment for direct-to-consumer Shopify stores. Same-day shipping,
                  custom packaging, and branded tracking pages that match your Shopify storefront.
                </p>
                <ul className="space-y-2">
                  {["Same-day pick and pack", "Custom branded packaging", "Branded tracking pages", "Gift notes and inserts"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <HiOutlineCheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border/60 p-6">
                <HiOutlineBuildingStorefront className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Shopify B2B Fulfillment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Wholesale and retail fulfillment for Shopify Plus B2B channels. EDI-compliant shipping,
                  retailer-specific labeling, and pallet building for major retailers.
                </p>
                <ul className="space-y-2">
                  {["EDI compliance", "Retailer routing guides", "Pallet building & floor loads", "ASN and invoice generation"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <HiOutlineCheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border/60 p-6">
                <HiOutlineSparkles className="h-8 w-8 text-amber-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Subscription Box Fulfillment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Kitting and assembly for Shopify subscription brands. We build your subscription
                  boxes, manage variant combinations, and ship on your schedule.
                </p>
                <ul className="space-y-2">
                  {["Multi-SKU kitting", "Subscription box assembly", "Scheduled batch shipping", "Custom inserts and wrapping"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <HiOutlineCheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <IntegrationsFloating
          label="Shopify Integrations"
          heading="Your Shopify store, connected in minutes"
          description="Handled integrates natively with Shopify and Shopify Plus. Orders, inventory, and tracking sync automatically — so you can focus on selling, not spreadsheets."
        />

        <OnboardingTimeline
          label="Shopify Onboarding"
          heading="Onboard your Shopify fulfillment in 2&nbsp;weeks"
          description="We make launching Shopify fulfillment predictable and fast. Our dedicated onboarding team handles every detail so your store ships on schedule."
          steps={[
            {
              description: "We connect your Shopify store, sync your inventory, and build Shopify Flow automations so fulfillment runs on autopilot. From the moment you go live, your ops team can focus on growth, not logistics.",
              bullets: [
                "Real-time Shopify orders, inventory, and tracking eliminate busywork",
                "Shopify Flow automations reduce manual processes",
                "Self-service returns portal handles refunds and exchanges seamlessly",
              ],
            },
            {
              description: "From day one, we configure real-time delivery info and order cutoffs in your Shopify checkout so your customers know exactly when to expect their order. Our same-day shipping promise goes live the moment you do.",
              bullets: [
                "Order-by cutoffs give Shopify shoppers confidence their order ships today",
                "Real delivery dates reduce 'Where's my order?' support tickets",
                "Shop Promise badges boost trust, urgency, and conversions",
              ],
            },
            {
              description: "During onboarding, we work with you to design branded packaging, inserts, and customer communications for your Shopify fulfillment that elevate your unboxing experience. Every shipment becomes a chance to reinforce your brand.",
              bullets: [
                "Branded boxes, tissue, inserts, and notes turn Shopify deliveries into lasting impressions",
                "Personalized tracking emails keep your brand in every inbox",
                "A branded self-serve returns portal reflects your standards to the very end",
              ],
            },
          ]}
        />

        <Pricing3
          label="Shopify Fulfillment Pricing"
          heading="Transparent Shopify fulfillment pricing that scales with your store"
          description="No surprise fees. No minimums. Just clean, usage-based Shopify fulfillment pricing whether you ship 50 or 50,000 orders a month."
          buttonText="Get a Shopify Quote"
          buttonHref="#get-a-quote"
          plans={shopifyPricing3Plans}
        />

        <TestimonialsCustomers
          testimonialsLabel="Shopify Brand Reviews"
          customersLabel="Trusted by Shopify stores of every size"
        />

        <FAQCardGrid
          label="FAQ"
          heading="Shopify fulfillment questions, answered"
          description="Everything you need to know about outsourcing fulfillment for your Shopify store."
          bgColor="bg-muted/30"
          faqItems={faqs}
        />

        <CTA
          label="Get A Quote"
          heading="Get a Shopify Fulfillment Quote. Get Growing."
          description="Get a custom quote today and see how Handled turns your Shopify shipping into a growth engine."
          benefits={shopifyCtaBenefits}
        />
      </main>
      <Footer />

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Shopify Fulfillment Services",
            provider: {
              "@type": "Organization",
              name: "Handled",
              url: "https://www.handledcommerce.com",
            },
            description:
              "Shopify fulfillment and 3PL services for ecommerce brands. Same-day shipping, 99.9% pick accuracy, bi-coastal warehouses, and native Shopify integration.",
            areaServed: "US",
            serviceType: "Order Fulfillment",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  )
}
