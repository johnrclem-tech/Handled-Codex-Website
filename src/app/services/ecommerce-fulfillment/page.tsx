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
  HiOutlineCheckCircle,
  HiOutlineBuildingStorefront,
  HiOutlineGlobeAlt,
  HiOutlineGiftTop,
  HiOutlineCodeBracket,
  HiOutlineSquaresPlus,
  HiOutlineCog6Tooth,
  HiOutlineUserGroup,
  HiOutlineRocketLaunch,
  HiOutlineCircleStack,
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
import {
  HiOutlineCurrencyDollar,
} from "react-icons/hi2"

export const metadata: Metadata = {
  title: "Ecommerce Fulfillment Services | 3PL for Online Brands — Handled",
  description:
    "Handled provides ecommerce fulfillment services for DTC and online brands. Same-day order fulfillment, 99.9% accuracy, bi-coastal warehouses, real-time inventory management, and seamless platform integrations. Get a free quote.",
  keywords: [
    "ecommerce fulfillment",
    "ecommerce fulfillment services",
    "ecommerce order fulfillment",
    "ecommerce 3PL",
    "ecommerce fulfillment company",
    "ecommerce fulfillment center",
    "ecommerce fulfillment warehouse",
    "order fulfillment services",
    "order fulfillment company",
    "online order fulfillment",
    "DTC fulfillment",
    "direct to consumer fulfillment",
    "3PL fulfillment services",
    "3PL ecommerce",
    "third party logistics ecommerce",
    "ecommerce shipping",
    "ecommerce logistics",
    "ecommerce warehouse",
    "pick and pack fulfillment",
    "ecommerce fulfillment solutions",
    "outsourced fulfillment",
    "fulfillment services for small business",
    "ecommerce inventory management",
    "ecommerce returns management",
    "best ecommerce fulfillment",
    "fulfillment partner",
  ],
  openGraph: {
    title: "Ecommerce Fulfillment Services | 3PL for Online Brands — Handled",
    description:
      "Same-day shipping, 99.9% accuracy, and bi-coastal warehouses. Handled is the ecommerce fulfillment partner built for online brands.",
    siteName: "Handled",
    type: "website",
  },
  alternates: {
    canonical: "https://www.handledcommerce.com/services/ecommerce-fulfillment",
  },
}

const coreServices = [
  {
    icon: HiOutlineCube,
    title: "Pick, Pack & Ship",
    description:
      "The core of ecommerce fulfillment. When an order comes in, Handled picks the right products from inventory, packs them securely with your branded materials, and ships them same-day. Barcode-verified picking ensures 99.9% accuracy on every ecommerce order.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: HiOutlineCircleStack,
    title: "Inventory Management",
    description:
      "Real-time inventory tracking across all warehouses and sales channels. Our ecommerce fulfillment system prevents overselling, automates low-stock alerts, and gives you complete visibility into your stock levels — from receiving to shipping.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: HiOutlineTruck,
    title: "Shipping & Delivery",
    description:
      "Optimized carrier selection, discounted shipping rates, and bi-coastal warehouses that reach 95%+ of US customers within 2 business days via ground. We select the fastest, most cost-effective shipping method for every ecommerce order.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Returns Management",
    description:
      "Seamless returns processing with a branded customer portal, automated return labels, quality inspection, and instant restocking. Our ecommerce returns management turns reverse logistics from a cost center into a competitive advantage.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: HiOutlineGiftTop,
    title: "Kitting & Value-Added Services",
    description:
      "Custom kitting, subscription box assembly, branded packaging, promotional inserts, gift wrapping, and product bundling. Handled's value-added services create memorable unboxing experiences that drive repeat purchases and brand loyalty.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: HiOutlineCodeBracket,
    title: "Platform Integrations",
    description:
      "Native integrations with Shopify, Amazon, WooCommerce, BigCommerce, ShipStation, and more. Connect your ecommerce store in minutes — orders, inventory, and tracking sync automatically with no manual data entry or middleware required.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
]

const fulfillmentJourney = [
  {
    step: "1",
    title: "Receiving & Inbound",
    description:
      "Your inventory arrives at our fulfillment center and is received, inspected, barcoded, and shelved — ready to ship within 48 hours. We catalog every SKU, track lot numbers where needed, and organize your warehouse for maximum picking efficiency.",
  },
  {
    step: "2",
    title: "Order Processing",
    description:
      "When a customer places an order on your ecommerce store, it flows to Handled instantly via our platform integration. The order enters our fulfillment queue and is assigned to a picker within minutes.",
  },
  {
    step: "3",
    title: "Pick & Pack",
    description:
      "Our team picks the correct items using barcode-verified scanning, then packs them with your branded materials — custom boxes, tissue paper, inserts, and any special handling instructions. Every order is quality-checked before sealing.",
  },
  {
    step: "4",
    title: "Shipping",
    description:
      "We select the optimal carrier and service level for each order based on destination, weight, and your shipping preferences. Orders received by 12PM ship the same day. Tracking numbers push back to your store automatically.",
  },
  {
    step: "5",
    title: "Delivery & Tracking",
    description:
      "Your customers receive real-time tracking updates from purchase to delivery. Monitor shipping performance, delivery times, and carrier metrics from your Handled dashboard to continuously optimize your ecommerce logistics.",
  },
  {
    step: "6",
    title: "Returns Processing",
    description:
      "When a customer initiates a return, our branded portal handles the process end-to-end. We receive the return, inspect the item, restock or quarantine per your policies, and update your inventory in real time.",
  },
]

const whyHandled = [
  {
    icon: HiOutlineClock,
    title: "Same-Day Fulfillment, Guaranteed",
    description:
      "Every ecommerce order received by 12PM local time ships the same day — backed by a financial SLA. If we miss the cutoff, we cover it. This isn't a goal; it's a guarantee that sets Handled apart from other ecommerce fulfillment companies.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "99.9% Order Accuracy",
    description:
      "Wrong items, wrong quantities, and mislabeled packages cost your brand money and customer trust. Handled's barcode-verified picking process delivers 99.9% accuracy — 10x better than the industry average — reducing returns and support tickets.",
  },
  {
    icon: HiOutlineBuildingStorefront,
    title: "Bi-Coastal Fulfillment Network",
    description:
      "With fulfillment centers in Los Angeles and New Jersey, Handled reaches 95%+ of US customers within 2 business days via affordable ground shipping. Split your inventory across both coasts to minimize shipping zones and transit times.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Real-Time Visibility & Control",
    description:
      "Track every order, monitor inventory levels, view shipping analytics, and manage exceptions — all from your Handled dashboard. Real-time data gives you the control to make informed decisions about your ecommerce fulfillment operations.",
  },
  {
    icon: HiOutlineSquaresPlus,
    title: "Scalable Infrastructure",
    description:
      "Whether you ship 100 or 100,000 orders a month, Handled's ecommerce fulfillment infrastructure scales with your brand. Handle seasonal peaks, flash sales, and viral moments without worrying about warehouse capacity or staffing.",
  },
  {
    icon: HiOutlineUserGroup,
    title: "Dedicated Account Management",
    description:
      "Every Handled client gets a dedicated account manager who understands your brand, products, and fulfillment requirements. Proactive communication, strategic planning, and hands-on support — not a ticket queue.",
  },
]

const platforms = [
  "Shopify",
  "Shopify Plus",
  "Amazon",
  "WooCommerce",
  "BigCommerce",
  "ShipStation",
  "Magento",
  "Squarespace",
  "Etsy",
  "Walmart Marketplace",
  "TikTok Shop",
  "eBay",
]

const faqs = [
  {
    question: "What is ecommerce fulfillment?",
    answer:
      "Ecommerce fulfillment is the complete process of receiving inventory, storing products in a warehouse, picking and packing customer orders, shipping packages, and managing returns for online stores. An ecommerce fulfillment service like Handled manages this entire operation — from the moment your inventory arrives at our warehouse to the moment your customer receives their order at their door.",
  },
  {
    question: "What is a 3PL for ecommerce?",
    answer:
      "A 3PL (third-party logistics provider) for ecommerce is an outsourced fulfillment company that handles warehousing, order fulfillment, shipping, and returns for online brands. Instead of managing your own warehouse and fulfillment staff, you partner with a 3PL like Handled to handle the logistics so you can focus on marketing, product development, and growing your brand.",
  },
  {
    question: "How does ecommerce fulfillment work with Handled?",
    answer:
      "Handled connects directly to your ecommerce platform (Shopify, Amazon, WooCommerce, etc.) via a native integration. When a customer places an order, it flows automatically to our fulfillment center. We pick the correct items using barcode verification, pack them with your branded materials, and ship same-day. Tracking information pushes back to your store so customers can follow their package. Inventory syncs in real time across all channels.",
  },
  {
    question: "How much do ecommerce fulfillment services cost?",
    answer:
      "Ecommerce fulfillment pricing typically includes storage fees (per pallet or bin per month), pick and pack fees (per order), and shipping costs (based on weight, dimensions, and destination). Handled offers transparent, per-order pricing with no hidden fees, setup costs, or long-term contracts. Contact our team for a custom quote based on your order volume, product mix, and shipping requirements.",
  },
  {
    question: "When should an ecommerce brand outsource fulfillment?",
    answer:
      "Most ecommerce brands should consider outsourcing fulfillment when they reach 100-200 orders per month and fulfillment is consuming time better spent on growth. Other signs include: you're running out of storage space, shipping errors are increasing, you can't offer competitive delivery speeds, or you need to scale for seasonal peaks. A 3PL like Handled provides the warehouse infrastructure, technology, and expertise to handle your logistics more efficiently than in-house operations.",
  },
  {
    question: "What ecommerce platforms does Handled integrate with?",
    answer:
      "Handled integrates natively with all major ecommerce platforms including Shopify, Shopify Plus, Amazon, WooCommerce, BigCommerce, Magento, Squarespace, ShipStation, Etsy, Walmart Marketplace, TikTok Shop, and eBay. Our integrations sync orders, inventory, and tracking in real time with no manual data entry required.",
  },
  {
    question: "What is the difference between ecommerce fulfillment and dropshipping?",
    answer:
      "With ecommerce fulfillment, you own and pre-stock your inventory at a fulfillment center like Handled, giving you full control over product quality, packaging, and shipping speed. With dropshipping, a manufacturer ships directly to your customer — you never touch the product. Fulfillment offers faster shipping, better quality control, branded packaging, and higher profit margins, which is why most serious ecommerce brands choose fulfillment over dropshipping as they scale.",
  },
  {
    question: "How fast does Handled ship ecommerce orders?",
    answer:
      "Handled ships every ecommerce order received before 12PM local time the same business day — guaranteed. With fulfillment centers on both coasts (Los Angeles and New Jersey), we reach 95%+ of US customers within 2 business days via affordable ground shipping. We also offer expedited shipping options for next-day and overnight delivery.",
  },
  {
    question: "Does Handled handle returns for ecommerce orders?",
    answer:
      "Yes. Handled provides end-to-end ecommerce returns management including a branded customer returns portal, automated return label generation, package receiving, quality inspection, and restocking or disposition per your brand's policies. Returned inventory updates in your system in real time so it's immediately available for resale.",
  },
  {
    question: "Can Handled fulfill both DTC and B2B ecommerce orders?",
    answer:
      "Yes. Handled supports both direct-to-consumer and B2B ecommerce fulfillment from the same inventory pool. We handle DTC orders with branded packaging and fast shipping, while B2B and wholesale orders get EDI-compliant processing, retailer routing guide compliance, pallet building, and retail-ready labeling for major retailers.",
  },
  {
    question: "What value-added services does Handled offer for ecommerce?",
    answer:
      "Handled offers a full suite of value-added services including custom kitting and bundling, subscription box assembly, branded packaging (custom boxes, tissue, inserts, stickers), gift wrapping, promotional insert packing, product labeling and relabeling, and FBA prep services. These services help ecommerce brands create premium customer experiences and operate across multiple sales channels.",
  },
  {
    question: "Where are Handled's ecommerce fulfillment centers?",
    answer:
      "Handled operates ecommerce fulfillment centers in Los Angeles, California and northern New Jersey. This bi-coastal warehouse network is strategically positioned to provide fast, affordable ground shipping to virtually every US address within 2 business days. Brands can split inventory across both locations to optimize delivery speed and reduce shipping costs.",
  },
]

const ecommerceGuarantees: GuaranteeItem[] = [
  {
    icon: HiOutlineClock,
    title: "Same-Day Order Shipping",
    description:
      "Every ecommerce order received by 12PM local time ships the same day — backed by a financial SLA. If we miss the cutoff, we cover it. Your online customers get the delivery speed they expect.",
    metric: "100%",
    metricLabel: "same-day shipping guarantee",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Ecommerce Order Accuracy",
    description:
      "Barcode-verified picking ensures the right products in the right quantities ship on every ecommerce order. Wrong items cost you returns, refunds, and customer trust — our accuracy prevents it.",
    metric: "99.9%",
    metricLabel: "ecommerce order accuracy",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Same-Day Inventory Restock",
    description:
      "Returned and replenished inventory is received, inspected, and restocked the same day it arrives — updating your ecommerce channels in real time so products are back on sale immediately.",
    metric: "Same-day",
    metricLabel: "restock guarantee",
  },
]

const ecommercePricing3Plans: Pricing3Plan[] = [
  {
    name: "Storage",
    icon: Warehouse,
    description:
      "Your ecommerce inventory is stored securely across our bi-coastal warehouse network. Monthly pallet-based pricing means you only pay for the space you use.",
    features: [
      "Bi-coastal warehouse network",
      "Real-time inventory sync",
      "Multi-channel stock management",
      "Smart bin organization",
      "Scale up/down monthly",
    ],
  },
  {
    name: "Fulfillment",
    icon: PackageCheck,
    description:
      "Every ecommerce order is picked and packed with 99.9% accuracy. Per-order pricing means your fulfillment costs scale directly with your sales.",
    features: [
      "Barcode-verified pick & pack",
      "Multi-platform order sync",
      "Same-day dispatch",
      "Dashboard transparency",
      "Peak season scalability",
    ],
    isHighlighted: true,
  },
  {
    name: "Shipping",
    icon: Truck,
    description:
      "We optimize every ecommerce order for speed and savings with carrier rate shopping and bi-coastal distribution for 2-day ground nationwide.",
    features: [
      "Discounted carrier rates",
      "2-day ground nationwide",
      "Carrier rate shopping",
      "Auto tracking to all channels",
      "International shipping options",
    ],
  },
]

const ecommerceCtaBenefits: CTABenefit[] = [
  {
    icon: HiOutlineClock,
    title: "Save Time",
    description:
      "No more tracking down tracking. We handle the busywork — picking, packing, shipping, and returns — so you can get back to building your brand.",
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: "Save Money",
    description:
      "Smarter shipping, fewer support calls, and pricing that flexes with you. No minimums. No fixed costs. No-brainer.",
  },
  {
    icon: HiOutlineRocketLaunch,
    title: "Sell More",
    description:
      "With faster shipping and a branded delivery experience, we'll turn browsers into buyers — and buyers into brand fans.",
  },
]

export default function EcommerceFulfillmentPage() {
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
                <HiOutlineBolt className="h-3.5 w-3.5 text-blue-500" />
                Ecommerce Fulfillment Services
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Ecommerce fulfillment that{" "}
                <span className="gradient-text">scales with you</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Handled provides ecommerce fulfillment services for online brands that demand speed,
                accuracy, and reliability. Same-day shipping, bi-coastal warehouses, real-time
                inventory management, and seamless integrations — everything your ecommerce business
                needs to deliver exceptional customer experiences with every order.
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
                  <p className="text-sm text-muted-foreground">Order accuracy</p>
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

        {/* What is Ecommerce Fulfillment */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-blue-600 mb-3">What is Ecommerce Fulfillment?</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The backbone of every successful online brand
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Ecommerce fulfillment</strong> is the complete process of
                  storing inventory, processing orders, picking and packing products, shipping
                  packages, and managing returns for online stores. It&apos;s the operational engine
                  that turns a customer&apos;s click into a delivered package — and the quality of
                  your <strong className="text-foreground">ecommerce order fulfillment</strong> directly impacts
                  customer satisfaction, repeat purchase rates, and your brand&apos;s reputation.
                </p>
                <p>
                  For growing ecommerce brands, fulfilling orders in-house quickly becomes a
                  bottleneck. Packing orders in a garage or spare room doesn&apos;t scale. Shipping
                  from one location means slow delivery for half the country. And every minute spent
                  on logistics is a minute not spent on product development, marketing, or customer
                  acquisition. That&apos;s where an <strong className="text-foreground">ecommerce fulfillment
                  company</strong> like Handled comes in.
                </p>
                <p>
                  A <strong className="text-foreground">3PL for ecommerce</strong> (third-party logistics provider)
                  takes your warehousing and shipping operations off your plate. Handled connects
                  directly to your online store, automatically processes orders as they come in,
                  picks and packs with 99.9% accuracy, and ships same-day from bi-coastal fulfillment
                  centers — giving your customers the fast, reliable delivery they expect from
                  brands like Amazon, without the infrastructure overhead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Fulfillment Services */}
        <section id="services" className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-blue-600 mb-3">Ecommerce Fulfillment Services</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                End-to-end fulfillment for your online store
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From receiving inventory to shipping orders and processing returns, Handled provides
                the complete suite of ecommerce fulfillment services your online brand needs to
                deliver fast, accurate orders at scale.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service) => (
                <Card
                  key={service.title}
                  className="group hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border-border/60"
                >
                  <CardContent className="p-6">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${service.bg} mb-4`}
                    >
                      <service.icon className={`h-5 w-5 ${service.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* The Journey of an Ecommerce Order */}
        <section id="how-it-works" className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-blue-400 mb-3">How Ecommerce Fulfillment Works</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The journey of an ecommerce order with Handled
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/70">
                From the moment your inventory arrives at our warehouse to the moment your customer
                receives their package, here&apos;s how Handled&apos;s ecommerce fulfillment process works.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fulfillmentJourney.map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 hover:bg-primary-foreground/[0.08] transition-colors"
                >
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white font-bold text-sm mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Handled */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-blue-600 mb-3">Why Brands Choose Handled</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The ecommerce fulfillment partner that puts performance in writing
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Most ecommerce 3PLs promise fast shipping and accurate orders. Handled backs every
                SLA with financial accountability — because your customers deserve fulfillment
                guarantees, not just fulfillment goals.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyHandled.map((item) => (
                <Card
                  key={item.title}
                  className="group hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border-border/60"
                >
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 text-blue-500 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <IntegrationsFloating
          label="Ecommerce Integrations"
          heading="Connect your online store in under 24 hours"
          description="Handled integrates seamlessly with every major ecommerce platform, marketplace, and shipping carrier. Orders, inventory, and tracking sync automatically."
          bgColor="bg-muted/30"
        />

        <Guarantees
          label="Ecommerce Fulfillment SLAs"
          heading="Ecommerce fulfillment guarantees backed by real accountability"
          description="Handled is one of the only ecommerce 3PLs that backs every fulfillment SLA with financial penalties. If we miss a guarantee, we pay — not you."
          guarantees={ecommerceGuarantees}
        />

        {/* DTC + B2B + Omnichannel */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-blue-600 mb-3">Ecommerce Fulfillment Solutions</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Fulfillment for every ecommerce channel
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Whether you sell direct-to-consumer, on marketplaces, or wholesale to retailers —
                Handled fulfills every channel from one inventory pool.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-xl border border-border/60 bg-background p-6">
                <HiOutlineCube className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">DTC Ecommerce Fulfillment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Fast, branded fulfillment for direct-to-consumer online stores. Same-day shipping,
                  custom packaging, and a seamless post-purchase experience that drives repeat
                  customers and 5-star reviews.
                </p>
                <ul className="space-y-2">
                  {["Same-day pick, pack & ship", "Custom branded packaging", "Promotional inserts & samples", "Branded tracking & returns portal"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <HiOutlineCheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border/60 bg-background p-6">
                <HiOutlineGlobeAlt className="h-8 w-8 text-cyan-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Marketplace Fulfillment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Fulfill Amazon, Walmart, TikTok Shop, Etsy, and eBay orders alongside your DTC
                  orders. One inventory pool, unified fulfillment, and channel-specific packaging
                  and compliance requirements handled automatically.
                </p>
                <ul className="space-y-2">
                  {["Amazon FBA prep services", "Marketplace-specific labeling", "Multi-channel inventory sync", "Channel-specific SLA compliance"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <HiOutlineCheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border/60 bg-background p-6">
                <HiOutlineBuildingStorefront className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="font-semibold text-lg mb-2">B2B & Wholesale Fulfillment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Retail-compliant wholesale fulfillment for ecommerce brands expanding into brick
                  and mortar. EDI compliance, routing guides, pallet building, and retail-ready
                  packaging for major retailers.
                </p>
                <ul className="space-y-2">
                  {["EDI-compliant processing", "Retailer routing compliance", "Pallet building & floor loads", "ASN and invoice generation"].map((item) => (
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

        <OnboardingTimeline
          label="Ecommerce Onboarding"
          heading="Onboard your ecommerce fulfillment in 2&nbsp;weeks"
          description="We make launching ecommerce fulfillment predictable and fast. Our dedicated onboarding team handles every integration, automation, and branding detail so your store ships on schedule."
          steps={[
            {
              description: "We connect your ecommerce platform — Shopify, Amazon, WooCommerce, or any other — sync your inventory, and configure automations so order fulfillment runs on autopilot from the moment you go live.",
              bullets: [
                "Real-time order sync, inventory tracking, and automatic tracking updates across all channels",
                "Automated workflows for order routing, low-stock alerts, and fulfillment rules",
                "Self-service returns portal handles refunds and exchanges seamlessly",
              ],
            },
            {
              description: "We configure real-time delivery dates and order cutoffs in your checkout so customers know exactly when to expect their order. Same-day shipping goes live the moment you do.",
              bullets: [
                "Order-by cutoffs give online shoppers confidence their order ships today",
                "Real delivery dates reduce 'Where's my order?' support tickets",
                "Delivery guarantees boost trust, urgency, and conversions at checkout",
              ],
            },
            {
              description: "During onboarding, we design branded packaging, inserts, and customer communications that elevate your ecommerce unboxing experience. Every shipment becomes a chance to reinforce your brand.",
              bullets: [
                "Custom boxes, tissue, inserts, and notes turn every delivery into a brand moment",
                "Personalized tracking emails keep your brand in every customer inbox",
                "A branded self-serve returns portal reflects your standards from purchase to return",
              ],
            },
          ]}
        />

        <Pricing3
          label="Ecommerce Fulfillment Pricing"
          heading="Transparent ecommerce fulfillment pricing that scales with your brand"
          description="No surprise fees. No minimums. Usage-based pricing whether you ship 50 or 50,000 orders a month — across every ecommerce channel."
          buttonText="Get an Ecommerce Quote"
          buttonHref="#get-a-quote"
          plans={ecommercePricing3Plans}
        />

        <TestimonialsCustomers
          testimonialsLabel="Ecommerce Brand Reviews"
          customersLabel="Trusted by online brands across every category"
        />

        <FAQCardGrid
          label="FAQ"
          heading="Ecommerce fulfillment questions, answered"
          description="Everything you need to know about outsourcing fulfillment for your online store."
          bgColor="bg-muted/30"
          faqItems={faqs}
        />

        <CTA
          label="Get A Quote"
          heading="Get an Ecommerce Fulfillment Quote. Get Growing."
          description="Get a custom quote today and see how Handled turns shipping into growth for your online store."
          benefits={ecommerceCtaBenefits}
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
            name: "Ecommerce Fulfillment Services",
            provider: {
              "@type": "Organization",
              name: "Handled",
              url: "https://www.handledcommerce.com",
            },
            description:
              "Ecommerce fulfillment and 3PL services for online brands. Same-day shipping, 99.9% order accuracy, bi-coastal warehouses, real-time inventory management, and seamless ecommerce platform integrations.",
            areaServed: "US",
            serviceType: "Ecommerce Order Fulfillment",
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
