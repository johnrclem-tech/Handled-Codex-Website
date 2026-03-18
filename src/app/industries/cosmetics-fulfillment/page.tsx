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
  HiOutlineSparkles,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineArrowPath,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineBuildingStorefront,
  HiOutlineBeaker,
  HiOutlineGlobeAlt,
  HiOutlineGiftTop,
  HiOutlineSwatch,
  HiOutlineClipboardDocumentCheck,
  HiOutlineExclamationTriangle,
} from "react-icons/hi2"
import { CosmeticsOnboarding } from "@/components/sections/onboarding-cosmetics"
import { CosmeticsPricing } from "@/components/sections/pricing-cosmetics"
import { CosmeticsGuarantees } from "@/components/sections/guarantees-cosmetics"
import { CosmeticsCTA } from "@/components/sections/cta-cosmetics"
import { CosmeticsIntegrations } from "@/components/sections/integrations-cosmetics"
import { Customers } from "@/components/sections/customers"

export const metadata: Metadata = {
  title: "Cosmetics Fulfillment Services | 3PL for Beauty Brands — Handled",
  description:
    "Handled is a cosmetics fulfillment company and 3PL built for beauty, skincare, and makeup brands. Climate-controlled storage, lot tracking, fragile-safe packaging, and same-day shipping. Get a free fulfillment quote.",
  keywords: [
    "cosmetics fulfillment",
    "cosmetics fulfillment services",
    "cosmetics 3PL",
    "beauty fulfillment",
    "beauty product fulfillment",
    "beauty fulfillment services",
    "beauty 3PL",
    "skincare fulfillment",
    "makeup fulfillment",
    "cosmetic order fulfillment",
    "beauty products fulfillment",
    "3PL for cosmetics",
    "3PL for beauty brands",
    "cosmetics fulfillment company",
    "cosmetics fulfillment center",
    "beauty fulfillment partner",
    "health and beauty fulfillment",
    "cosmetic fulfillment warehouse",
    "ecommerce beauty fulfillment",
    "skincare 3PL",
    "beauty brand logistics",
    "cosmetics warehousing",
    "fragrance fulfillment",
    "beauty subscription box fulfillment",
  ],
  openGraph: {
    title: "Cosmetics Fulfillment Services | 3PL for Beauty Brands — Handled",
    description:
      "Climate-controlled storage, lot tracking, and same-day shipping. Handled is the 3PL built for beauty and cosmetics brands.",
    siteName: "Handled",
    type: "website",
  },
  alternates: {
    canonical: "https://www.handledcommerce.com/industries/cosmetics-fulfillment",
  },
}

const fulfillmentFeatures = [
  {
    icon: HiOutlineBeaker,
    title: "Climate-Controlled Storage",
    description:
      "Serums, creams, and temperature-sensitive formulas stay pristine in our climate-controlled fulfillment centers. We maintain optimal temperature and humidity levels to protect your beauty products from degradation, melting, or separation.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: HiOutlineClipboardDocumentCheck,
    title: "Lot Tracking & Expiration Management",
    description:
      "Full batch and lot traceability on every cosmetics SKU. Our FIFO (first-in, first-out) inventory system ensures older stock ships first, reducing waste and keeping your beauty products fresh for every customer.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Fragile-Safe Packaging",
    description:
      "Glass bottles, compacts, palettes, and serums require special care. Our cosmetics fulfillment team uses custom dunnage, bubble wrap, and reinforced packaging to ensure fragile beauty products arrive in perfect condition.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: HiOutlineClock,
    title: "Same-Day Fulfillment",
    description:
      "Every beauty order received before 12PM local time ships the same day. Our same-day fulfillment SLA is backed financially — if we miss the cutoff, we cover the cost. No exceptions.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: HiOutlineGiftTop,
    title: "Custom Packaging & Kitting",
    description:
      "Create unforgettable unboxing experiences for your beauty brand. We handle branded tissue, custom inserts, samples, gift wrapping, influencer kits, and subscription box assembly with the attention to detail your brand demands.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Beauty Returns Processing",
    description:
      "Branded returns portal with automatic quality inspection and quarantine protocols for opened beauty products. We sort, restock, or dispose of returns per your cosmetics brand's policies and safety standards.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
]

const beautyCategories = [
  {
    icon: HiOutlineSwatch,
    title: "Skincare Fulfillment",
    description:
      "Serums, moisturizers, cleansers, and SPF products require climate-controlled storage and careful handling. Handled specializes in skincare fulfillment with temperature monitoring, lot tracking, and expiration management to keep your formulations effective from warehouse to doorstep.",
    items: [
      "Climate-controlled serum storage",
      "Expiration date tracking",
      "Fragile glass bottle packaging",
      "Subscription box assembly",
    ],
  },
  {
    icon: HiOutlineSparkles,
    title: "Makeup Fulfillment",
    description:
      "Palettes, foundations, lipsticks, and compacts are fragile and high-value. Our makeup fulfillment services include custom dunnage for breakable items, shade-accurate picking with barcode verification, and branded packaging that reflects your makeup brand's aesthetic.",
    items: [
      "Fragile compact protection",
      "Shade-accurate barcode picking",
      "Influencer kit assembly",
      "Custom branded packaging",
    ],
  },
  {
    icon: HiOutlineCube,
    title: "Haircare & Body Care",
    description:
      "Shampoos, conditioners, body washes, and lotions come in all shapes and sizes — and many are hazmat-classified. Handled manages haircare fulfillment with leak-proof packaging, weight-based shipping optimization, and compliance for oversized or restricted beauty products.",
    items: [
      "Leak-proof packaging",
      "Heavy item shipping optimization",
      "Multi-pack bundling",
      "Salon-size B2B fulfillment",
    ],
  },
]

const whyHandled = [
  {
    icon: HiOutlineCube,
    title: "Beauty Industry Expertise",
    description:
      "We understand the unique challenges of cosmetics fulfillment — from handling fragile glass packaging to managing thousands of shade variants and complying with cosmetics regulations. Handled isn't a generic warehouse; we're a 3PL with deep beauty industry knowledge.",
  },
  {
    icon: HiOutlineBuildingStorefront,
    title: "Bi-Coastal Fulfillment Centers",
    description:
      "Our warehouses in Los Angeles and New Jersey give your beauty brand bi-coastal coverage. Ship cosmetics to 95%+ of US customers within 2 business days via ground — keeping your shipping costs low and delivery speeds competitive.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Omnichannel Beauty Fulfillment",
    description:
      "Fulfill DTC Shopify orders, Amazon beauty marketplace sales, retail wholesale for Sephora and Ulta, and subscription boxes — all from one inventory pool. Handled consolidates your cosmetics fulfillment across every sales channel.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Real-Time Inventory Visibility",
    description:
      "Track every SKU, lot number, and expiration date in real time. Our cosmetics inventory management system integrates with Shopify, Amazon, and your other sales channels to prevent overselling and keep stock levels accurate across all platforms.",
  },
]

const integrationSteps = [
  {
    step: "1",
    title: "Connect Your Store",
    description:
      "Integrate your Shopify, Amazon, or other ecommerce platform in minutes. Orders, inventory, and tracking sync automatically with our cosmetics fulfillment system.",
  },
  {
    step: "2",
    title: "Send Your Beauty Inventory",
    description:
      "Ship your cosmetics products to our fulfillment centers. We receive, inspect, catalog lot numbers, and store your beauty products in climate-controlled environments — ready to ship within 48 hours.",
  },
  {
    step: "3",
    title: "We Fulfill Every Order",
    description:
      "When a customer places an order, it flows to Handled instantly. We pick with barcode verification, pack with fragile-safe materials and your branded packaging, and ship same-day.",
  },
  {
    step: "4",
    title: "Track Everything in Real Time",
    description:
      "Tracking numbers push back to your store automatically. Monitor fulfillment performance, inventory levels, lot expirations, and shipping analytics from your Handled dashboard.",
  },
]

const faqs = [
  {
    question: "What is cosmetics fulfillment?",
    answer:
      "Cosmetics fulfillment is the process of storing, picking, packing, and shipping beauty products — including skincare, makeup, haircare, and fragrances — to end customers. A cosmetics fulfillment partner like Handled manages your entire supply chain from warehouse to doorstep, handling the unique challenges of beauty products like temperature sensitivity, fragile packaging, lot tracking, and expiration management.",
  },
  {
    question: "What is a 3PL for beauty brands?",
    answer:
      "A 3PL (third-party logistics provider) for beauty brands is an outsourced fulfillment company that specializes in storing and shipping cosmetics products. A beauty 3PL like Handled provides climate-controlled warehousing, fragile-item handling, lot and batch tracking, custom branded packaging, and same-day shipping — all the logistics infrastructure a beauty brand needs without running its own warehouse.",
  },
  {
    question: "Why do beauty brands need a specialized fulfillment partner?",
    answer:
      "Beauty products have unique fulfillment requirements that generic warehouses often can't handle. Cosmetics require climate-controlled storage to prevent heat damage, lot tracking for regulatory compliance, careful handling of fragile glass bottles and compacts, and branded packaging that matches the premium feel of your products. A specialized cosmetics 3PL like Handled understands these nuances and has the processes, training, and facilities to execute them flawlessly.",
  },
  {
    question: "Does Handled offer climate-controlled storage for beauty products?",
    answer:
      "Yes. Handled's fulfillment centers maintain climate-controlled environments specifically designed for cosmetics and skincare products. We monitor temperature and humidity levels to protect temperature-sensitive formulations like serums, creams, SPF products, and natural beauty items from degradation, separation, or melting.",
  },
  {
    question: "Can Handled track lot numbers and expiration dates for cosmetics?",
    answer:
      "Yes. Handled provides full lot and batch traceability on every cosmetics SKU. Our inventory management system tracks lot numbers, manufacture dates, and expiration dates, and uses FIFO (first-in, first-out) protocols to ensure older stock ships first. This keeps your beauty products fresh and helps maintain regulatory compliance.",
  },
  {
    question: "How does Handled handle fragile beauty products like glass bottles?",
    answer:
      "Handled uses custom packaging solutions for fragile cosmetics — including custom dunnage, bubble wrap, reinforced mailers, and box-in-box configurations for glass serums, perfumes, and compacts. Our cosmetics fulfillment team is trained in fragile-item handling to ensure products arrive in perfect condition with minimal damage rates.",
  },
  {
    question: "Does Handled support beauty subscription box fulfillment?",
    answer:
      "Yes. Handled provides full kitting and subscription box assembly services for beauty brands. We build your subscription boxes with multi-SKU kitting, custom inserts, samples, tissue paper, and branded materials. We can handle both recurring subscription fulfillment and one-time promotional box campaigns like influencer kits and gift sets.",
  },
  {
    question: "What beauty product categories does Handled fulfill?",
    answer:
      "Handled fulfills all categories of beauty and personal care products, including skincare (serums, moisturizers, cleansers, SPF), makeup (foundations, palettes, lipsticks, compacts), haircare (shampoos, conditioners, styling products), body care (lotions, body washes, scrubs), fragrances, nail products, and wellness supplements. We tailor our handling and packaging approach to each product category.",
  },
  {
    question: "How much does cosmetics fulfillment cost?",
    answer:
      "Cosmetics fulfillment pricing varies based on order volume, product dimensions, packaging requirements, special handling needs (climate control, fragile items), and shipping destinations. Handled offers transparent per-order pricing with no hidden fees. Contact our team for a custom quote based on your beauty brand's specific needs and order profile.",
  },
  {
    question: "Where are Handled's cosmetics fulfillment centers located?",
    answer:
      "Handled operates fulfillment centers in Los Angeles, CA and northern New Jersey. This bi-coastal warehouse network allows us to reach 95%+ of US customers within 2 business days via ground shipping, keeping your beauty brand's shipping costs low and delivery times fast. Both facilities feature climate-controlled storage for beauty products.",
  },
]

export default function CosmeticsFulfillmentPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-rose-50/80 to-transparent rounded-full blur-3xl -z-10" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1 text-xs font-medium">
                <HiOutlineSparkles className="h-3.5 w-3.5 text-rose-500" />
                Cosmetics & Beauty Fulfillment
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Cosmetics fulfillment for{" "}
                <span className="gradient-text">beauty brands</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Handled is the 3PL that beauty brands trust for flawless cosmetics fulfillment.
                Climate-controlled storage, fragile-safe packaging, lot tracking, and same-day
                shipping — so every order arrives as beautiful as your products.
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
                  <p className="text-2xl font-bold">&lt;0.1%</p>
                  <p className="text-sm text-muted-foreground">Damage rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Cosmetics Fulfillment */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-rose-500 mb-3">What is Cosmetics Fulfillment?</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Why beauty brands need a specialized fulfillment partner
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Cosmetics fulfillment</strong> is the end-to-end process
                  of receiving, storing, picking, packing, and shipping beauty products to your
                  customers. Unlike standard ecommerce fulfillment, <strong className="text-foreground">beauty
                  product fulfillment</strong> demands specialized handling — from climate-controlled
                  warehousing for temperature-sensitive serums to fragile-safe packaging for glass
                  bottles and compacts.
                </p>
                <p>
                  In the beauty industry, fulfillment isn&apos;t just logistics — it&apos;s an
                  extension of your brand experience. Your customer&apos;s first physical touchpoint
                  is the package that arrives at their door. A damaged compact, a melted lipstick, or
                  a generic brown box can undo months of marketing. That&apos;s why leading beauty
                  brands partner with a <strong className="text-foreground">cosmetics 3PL</strong> like Handled
                  — a fulfillment partner that understands the premium standards your brand requires.
                </p>
                <p>
                  Whether you&apos;re a skincare startup shipping 200 orders a month or an
                  established makeup brand processing thousands of daily orders across Shopify,
                  Amazon, and retail wholesale, outsourcing to a <strong className="text-foreground">beauty
                  fulfillment company</strong> gives you enterprise-grade logistics infrastructure
                  with the specialized care your products demand — without the overhead of running
                  your own warehouse.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge of Beauty Fulfillment */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-rose-500 mb-3">The Beauty Fulfillment Challenge</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Cosmetics are harder to fulfill than most products
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Beauty products come with challenges that most 3PLs aren&apos;t equipped to handle.
                Here&apos;s what makes cosmetics fulfillment different — and why you need a partner
                who gets it right.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: HiOutlineExclamationTriangle,
                  title: "Temperature Sensitivity",
                  description: "Serums, creams, and natural formulations degrade in heat. Without climate-controlled storage, your products can melt, separate, or lose efficacy before they reach the customer.",
                  color: "text-amber-500",
                  bg: "bg-amber-50",
                },
                {
                  icon: HiOutlineShieldCheck,
                  title: "Fragile Packaging",
                  description: "Glass bottles, compacts, and palettes break easily in transit. Standard packaging won't protect them — you need custom dunnage and fragile-item handling protocols.",
                  color: "text-rose-500",
                  bg: "bg-rose-50",
                },
                {
                  icon: HiOutlineClipboardDocumentCheck,
                  title: "Lot & Expiration Tracking",
                  description: "Beauty products have shelf lives. Without lot tracking and FIFO inventory rotation, you risk shipping expired products — damaging trust and inviting regulatory issues.",
                  color: "text-purple-500",
                  bg: "bg-purple-50",
                },
                {
                  icon: HiOutlineSwatch,
                  title: "Thousands of Variants",
                  description: "Shade ranges, sizes, and formulation variants mean thousands of SKUs. One wrong shade shipped erodes customer confidence in your brand — accuracy is non-negotiable.",
                  color: "text-blue-500",
                  bg: "bg-blue-50",
                },
              ].map((item) => (
                <Card key={item.title} className="border-border/60">
                  <CardContent className="p-6">
                    <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${item.bg} mb-4`}>
                      <item.icon className={`h-5 w-5 ${item.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fulfillment Features */}
        <section id="features" className="py-24 lg:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-rose-500 mb-3">Cosmetics Fulfillment Services</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Beauty fulfillment built for precision and care
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From climate-controlled storage to branded unboxing experiences, Handled provides
                the specialized cosmetics fulfillment services your beauty brand needs to deliver
                flawless customer experiences.
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

        {/* Beauty Product Categories */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-rose-500 mb-3">Product Categories</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Fulfillment tailored to every beauty category
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every beauty product category has unique handling requirements. Handled tailors our
                cosmetics fulfillment approach to match the specific needs of your product line.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {beautyCategories.map((category) => (
                <div key={category.title} className="rounded-xl border border-border/60 p-6">
                  <category.icon className="h-8 w-8 text-rose-500 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <HiOutlineCheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Handled for Cosmetics */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-blue-400 mb-3">Why Beauty Brands Choose Handled</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The 3PL built for cosmetics fulfillment
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/70">
                Handled isn&apos;t a generic warehouse with a cosmetics add-on. We&apos;re a
                fulfillment partner purpose-built for beauty brands — with the facilities,
                expertise, and performance guarantees to prove it.
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
              <p className="text-sm font-semibold text-rose-500 mb-3">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Start shipping beauty orders in days, not months
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Getting started with cosmetics fulfillment through Handled is simple. Our
                onboarding team handles everything so you can start shipping fast.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrationSteps.map((item) => (
                <div key={item.step} className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white font-bold text-lg mb-4">
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

        <CosmeticsGuarantees />

        {/* The Brand Experience Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold text-rose-500 mb-3">The Unboxing Experience</p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Your fulfillment is your brand&apos;s first impression
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  In the beauty industry, the unboxing experience is everything. Your customers
                  expect the same level of care and premium feel from your packaging as they do from
                  your products. A bent box, a generic mailer, or a missing sample can undo months of
                  brand building.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Handled treats every cosmetics order as a brand touchpoint. We offer custom branded
                  packaging, tissue paper, stickers, inserts, samples, and gift notes — creating an
                  Instagram-worthy unboxing moment that drives repeat purchases and organic social sharing.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Custom branded boxes, mailers, and tissue",
                    "Product samples and promotional inserts",
                    "Gift wrapping and handwritten notes",
                    "Influencer and PR kit assembly",
                    "Subscription box curation and assembly",
                    "Seasonal and holiday packaging options",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <HiOutlineCheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-purple-50 p-12 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <HiOutlineGiftTop className="h-16 w-16 text-rose-400 mx-auto" />
                  <p className="text-2xl font-bold text-foreground">Premium Unboxing</p>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Custom branded packaging that reflects the quality of your beauty products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CosmeticsIntegrations />

        <CosmeticsOnboarding />

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-rose-500 mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Cosmetics fulfillment questions, answered
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about outsourcing fulfillment for your beauty brand.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-border/60 bg-background p-6">
                  <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Customers
          label="Beauty Brands We Fulfill"
          heading="Trusted by cosmetics and skincare brands"
          description="From indie skincare startups to established beauty brands, cosmetics companies trust Handled with their beauty fulfillment and logistics."
        />

        <CosmeticsPricing />

        <CosmeticsCTA />
      </main>
      <Footer />

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Cosmetics Fulfillment Services",
            provider: {
              "@type": "Organization",
              name: "Handled",
              url: "https://www.handledcommerce.com",
            },
            description:
              "Cosmetics fulfillment and 3PL services for beauty, skincare, and makeup brands. Climate-controlled storage, lot tracking, fragile-safe packaging, and same-day shipping.",
            areaServed: "US",
            serviceType: "Cosmetics Order Fulfillment",
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
