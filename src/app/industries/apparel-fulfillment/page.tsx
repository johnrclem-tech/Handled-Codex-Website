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
  HiOutlineSwatch,
  HiOutlineClipboardDocumentCheck,
  HiOutlineSparkles,
  HiOutlineSquaresPlus,
  HiOutlineArrowsPointingOut,
  HiOutlineScissors,
  HiOutlineTag,
} from "react-icons/hi2"

export const metadata: Metadata = {
  title: "Apparel Fulfillment Services | 3PL for Clothing Brands — Handled",
  description:
    "Handled is an apparel fulfillment company and 3PL built for clothing, fashion, and footwear brands. High-SKU inventory management, garment-safe packaging, returns processing, and same-day shipping. Get a free fulfillment quote.",
  keywords: [
    "apparel fulfillment",
    "apparel fulfillment services",
    "apparel 3PL",
    "clothing fulfillment",
    "clothing fulfillment services",
    "clothing 3PL",
    "fashion fulfillment",
    "fashion 3PL",
    "3PL for clothing",
    "3PL for clothing brands",
    "apparel fulfillment company",
    "apparel fulfillment center",
    "clothing fulfillment center",
    "clothing order fulfillment",
    "fashion fulfillment services",
    "fashion logistics",
    "apparel logistics",
    "clothing warehouse",
    "ecommerce apparel fulfillment",
    "t-shirt fulfillment",
    "garment fulfillment",
    "footwear fulfillment",
    "apparel fulfillment warehouse",
    "clothing fulfillment company",
    "DTC apparel fulfillment",
    "omnichannel apparel fulfillment",
  ],
  openGraph: {
    title: "Apparel Fulfillment Services | 3PL for Clothing Brands — Handled",
    description:
      "High-SKU management, garment-safe packaging, and same-day shipping. Handled is the 3PL built for apparel and fashion brands.",
    siteName: "Handled",
    type: "website",
  },
  alternates: {
    canonical: "https://www.handledcommerce.com/industries/apparel-fulfillment",
  },
}

const fulfillmentFeatures = [
  {
    icon: HiOutlineSquaresPlus,
    title: "High-SKU Inventory Management",
    description:
      "Apparel brands manage thousands of SKUs across sizes, colors, and styles. Handled's inventory system tracks every variant in real time, syncs with your ecommerce platform, and prevents overselling — even during flash sales and seasonal peaks.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: HiOutlineClock,
    title: "Same-Day Fulfillment",
    description:
      "Every clothing order received before 12PM local time ships the same day. Our apparel fulfillment SLA is backed financially — if we miss the cutoff, we cover the cost. Fast shipping means fewer cart abandonments and more repeat customers.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "99.9% Pick Accuracy",
    description:
      "Wrong size, wrong color, wrong style — in apparel, any picking error results in a return. Handled uses barcode-verified picking to ensure the correct variant ships on every order, keeping your return rate low and customer satisfaction high.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: HiOutlineTruck,
    title: "2-Day Ground Nationwide",
    description:
      "With fulfillment centers in Los Angeles and New Jersey, Handled reaches 95%+ of US customers within 2 business days via affordable ground shipping — giving your clothing brand fast delivery without the cost of expedited rates.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: HiOutlineGiftTop,
    title: "Branded Packaging & Inserts",
    description:
      "Your packaging is your brand's first physical impression. Handled offers custom poly mailers, branded tissue paper, stickers, thank-you cards, promotional inserts, and garment bags — creating a premium unboxing experience for every apparel order.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Apparel Returns Processing",
    description:
      "Clothing has some of the highest return rates in ecommerce. Handled provides a branded returns portal, automated return labels, quality inspection, size-based restocking, and real-time inventory updates — turning returns from a cost center into a brand advantage.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
]

const apparelCategories = [
  {
    icon: HiOutlineSwatch,
    title: "T-Shirts & Casual Wear",
    description:
      "From basic tees and custom-printed designs to hoodies and loungewear, Handled's t-shirt fulfillment service manages high-volume casual apparel with speed and accuracy. We fold, poly-bag, and ship with care to ensure garments arrive wrinkle-free and ready to wear.",
    items: [
      "Custom print & blank fulfillment",
      "Poly-bag packaging",
      "High-volume batch processing",
      "Merch and promotional drops",
    ],
  },
  {
    icon: HiOutlineSparkles,
    title: "Fashion & Designer Apparel",
    description:
      "Premium fashion demands premium fulfillment. Handled provides garment-on-hanger storage, tissue-wrapped folding, branded garment bags, and white-glove handling for designer clothing. Your customers' unboxing experience matches the quality of your fashion brand.",
    items: [
      "Garment-on-hanger storage",
      "Tissue-wrapped folding",
      "Branded garment bags",
      "Lookbook and insert packing",
    ],
  },
  {
    icon: HiOutlineCube,
    title: "Footwear & Accessories",
    description:
      "Shoes, bags, belts, hats, and jewelry each have unique packaging requirements. Handled tailors our picking, packing, and shipping approach to each accessory category — from shoe box stacking to jewelry cushioning — ensuring every item arrives in perfect condition.",
    items: [
      "Shoe box and dust bag packing",
      "Accessory-specific dunnage",
      "Multi-item order bundling",
      "Size and color verification",
    ],
  },
]

const challenges = [
  {
    icon: HiOutlineSquaresPlus,
    title: "Massive SKU Counts",
    description: "A single apparel style can generate dozens of SKUs across sizes, colors, and fits. Without a robust inventory management system, picking errors skyrocket and stockouts become a daily problem.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: HiOutlineArrowsPointingOut,
    title: "Seasonal Demand Swings",
    description: "Apparel sales spike dramatically for holidays, new collections, and promotional drops. Your fulfillment partner needs the warehouse capacity and labor flexibility to scale from 500 to 50,000 orders overnight.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: HiOutlineArrowPath,
    title: "High Return Rates",
    description: "Clothing returns average 20-30% in ecommerce — driven by sizing issues, color discrepancies, and fit preferences. Without efficient returns processing, your inventory and cash flow suffer.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: HiOutlineScissors,
    title: "Garment Care Requirements",
    description: "Delicate fabrics, structured garments, and premium materials require proper storage and handling. Generic warehouses wrinkle, crease, and damage clothing that should arrive looking store-ready.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
]

const whyHandled = [
  {
    icon: HiOutlineCube,
    title: "Apparel Industry Expertise",
    description:
      "We understand the unique challenges of clothing fulfillment — from managing thousands of size/color variants to handling seasonal demand spikes and processing the high return rates that come with fashion ecommerce. Handled isn't a generic 3PL; we're a fulfillment partner with deep apparel industry knowledge.",
  },
  {
    icon: HiOutlineBuildingStorefront,
    title: "Bi-Coastal Fulfillment Centers",
    description:
      "Our warehouses in Los Angeles and New Jersey give your apparel brand bi-coastal coverage. Ship clothing to 95%+ of US customers within 2 business days via ground — reducing transit times, lowering shipping costs, and minimizing the risk of garment damage from extended time in transit.",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Omnichannel Apparel Fulfillment",
    description:
      "Fulfill Shopify DTC orders, Amazon marketplace sales, retail wholesale for Nordstrom, Target, and department stores, and subscription boxes — all from one inventory pool. Handled consolidates your apparel fulfillment across every channel you sell on.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Real-Time Inventory Visibility",
    description:
      "Track every SKU, size, color, and style variant in real time across all warehouses and sales channels. Our apparel inventory management system prevents overselling, automates reorder alerts, and gives you the data to plan seasonal buys and promotional drops with confidence.",
  },
]

const integrationSteps = [
  {
    step: "1",
    title: "Connect Your Store",
    description:
      "Integrate your Shopify, Amazon, WooCommerce, or other ecommerce platform in minutes. Orders, inventory, and tracking sync automatically with our apparel fulfillment system.",
  },
  {
    step: "2",
    title: "Send Your Inventory",
    description:
      "Ship your clothing and accessories to our fulfillment centers. We receive, inspect, barcode, and store your apparel — organized by size, color, and style for maximum picking efficiency.",
  },
  {
    step: "3",
    title: "We Fulfill Every Order",
    description:
      "When a customer places an order, it flows to Handled instantly. We pick with barcode verification, pack with your branded materials, and ship same-day — ensuring the right size and color every time.",
  },
  {
    step: "4",
    title: "Track Everything in Real Time",
    description:
      "Tracking numbers push back to your store automatically. Monitor fulfillment performance, inventory by variant, return rates, and shipping analytics from your Handled dashboard.",
  },
]

const faqs = [
  {
    question: "What is apparel fulfillment?",
    answer:
      "Apparel fulfillment is the end-to-end logistics process of receiving, storing, picking, packing, and shipping clothing, footwear, and accessories to customers. An apparel fulfillment service like Handled manages your entire supply chain — from warehouse storage to last-mile delivery — handling the unique challenges of fashion logistics like high SKU counts, size and color variants, seasonal demand, and elevated return rates.",
  },
  {
    question: "What is a 3PL for clothing brands?",
    answer:
      "A 3PL (third-party logistics provider) for clothing brands is an outsourced fulfillment company that specializes in storing and shipping apparel products. A clothing 3PL like Handled provides high-SKU inventory management, garment-safe storage, branded packaging, fast shipping, and returns processing — all the logistics infrastructure an apparel brand needs without running its own warehouse.",
  },
  {
    question: "Why do apparel brands need a specialized fulfillment partner?",
    answer:
      "Apparel has unique fulfillment challenges that generic warehouses struggle with. Clothing brands manage thousands of SKUs across sizes, colors, and styles — making picking accuracy critical. Seasonal demand spikes require scalable warehouse capacity. Return rates of 20-30% demand efficient reverse logistics. And premium garments need proper storage and handling to arrive wrinkle-free. A specialized apparel 3PL like Handled has the systems, processes, and expertise to handle all of these challenges.",
  },
  {
    question: "How does Handled manage high SKU counts for apparel?",
    answer:
      "Handled's inventory management system is built for high-SKU apparel brands. We organize your warehouse by style, size, and color with barcode-verified locations, making it easy to pick the exact variant for every order. Real-time inventory sync across all your sales channels prevents overselling, and our system supports unlimited SKUs with size-color matrix tracking.",
  },
  {
    question: "What apparel products does Handled fulfill?",
    answer:
      "Handled fulfills all categories of apparel and fashion products, including t-shirts, dresses, jeans, jackets, sportswear, activewear, loungewear, outerwear, uniforms, infant and baby clothing, footwear, hats, bags, belts, jewelry, and accessories. We also handle custom-printed merchandise, subscription boxes, and promotional apparel drops.",
  },
  {
    question: "How does Handled handle apparel returns?",
    answer:
      "Handled provides a fully branded returns portal for your apparel brand. Customers initiate returns online and receive a prepaid shipping label. When we receive the return, we inspect the garment for condition and wear, then restock, quarantine, or process per your brand's policies. Inventory updates in real time so returned items are immediately available for resale, minimizing lost revenue from out-of-stock sizes.",
  },
  {
    question: "Does Handled support seasonal demand for fashion brands?",
    answer:
      "Yes. Handled's fulfillment infrastructure is built to scale with your apparel brand's seasonal peaks. Whether you're launching a new collection, running a holiday promotion, or managing a flash sale, our warehouse capacity and labor model flex to handle dramatic volume increases. We work with you to plan seasonal inventory positioning across our bi-coastal network for optimal delivery speed.",
  },
  {
    question: "Can Handled fulfill wholesale and retail apparel orders?",
    answer:
      "Yes. Handled supports both DTC ecommerce and B2B wholesale fulfillment for apparel brands. We handle EDI-compliant shipping, retailer-specific routing guides, pallet building, carton labeling, and ASN generation for major retailers like Nordstrom, Target, TJ Maxx, and department stores — alongside your direct-to-consumer Shopify and Amazon orders.",
  },
  {
    question: "What branded packaging options does Handled offer for clothing?",
    answer:
      "Handled offers a full range of branded packaging for apparel fulfillment, including custom poly mailers, branded tissue paper, stickers, thank-you cards, promotional inserts, garment bags, branded boxes, and hang tags. We create an unboxing experience that reflects your fashion brand's identity and drives customer loyalty and social sharing.",
  },
  {
    question: "How much does apparel fulfillment cost?",
    answer:
      "Apparel fulfillment pricing depends on your order volume, number of SKUs, packaging requirements, shipping destinations, and any special handling needs like garment-on-hanger storage or kitting. Handled offers transparent per-order pricing with no hidden fees. Contact our team for a custom quote based on your clothing brand's specific requirements and order profile.",
  },
  {
    question: "Where are Handled's apparel fulfillment centers located?",
    answer:
      "Handled operates fulfillment centers in Los Angeles, CA and northern New Jersey. This bi-coastal warehouse network allows us to reach 95%+ of US customers within 2 business days via ground shipping. Both facilities are equipped for apparel-specific storage, including garment racks, climate-appropriate environments, and organized size-color shelving systems.",
  },
]

export default function ApparelFulfillmentPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-indigo-50/80 to-transparent rounded-full blur-3xl -z-10" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1 text-xs font-medium">
                <HiOutlineSwatch className="h-3.5 w-3.5 text-indigo-500" />
                Apparel & Fashion Fulfillment
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Apparel fulfillment for{" "}
                <span className="gradient-text">clothing brands</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Handled is the 3PL that apparel brands trust for fast, accurate clothing
                fulfillment. High-SKU inventory management, garment-safe packaging, and same-day
                shipping — so you can scale your fashion brand without the logistics headaches.
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

        {/* What is Apparel Fulfillment */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm font-semibold text-indigo-500 mb-3">What is Apparel Fulfillment?</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The complete guide to apparel fulfillment services
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Apparel fulfillment</strong> is the end-to-end process of
                  receiving, warehousing, picking, packing, and shipping clothing, footwear, and
                  accessories to your customers. For growing fashion brands, managing fulfillment
                  in-house quickly becomes a bottleneck — which is where a <strong className="text-foreground">clothing
                  3PL</strong> (third-party logistics provider) like Handled comes in.
                </p>
                <p>
                  Unlike standard ecommerce products, <strong className="text-foreground">fashion fulfillment</strong> comes
                  with unique complexities. Apparel brands manage thousands of SKUs across sizes,
                  colors, and styles. Seasonal collections create dramatic demand swings. Return rates
                  in fashion ecommerce average 20-30% — far higher than any other product category.
                  And premium garments demand careful handling, proper storage, and branded packaging
                  that matches the quality of your clothing.
                </p>
                <p>
                  A specialized <strong className="text-foreground">apparel fulfillment company</strong> like Handled
                  takes these challenges off your plate. We provide the warehouse infrastructure,
                  inventory technology, and fulfillment expertise to ship your clothing orders with
                  speed, accuracy, and the branded presentation your fashion customers expect — whether
                  you&apos;re a t-shirt startup shipping 200 orders a month or an established fashion
                  brand processing thousands of daily orders across DTC, Amazon, and wholesale channels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Apparel Fulfillment Challenge */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-indigo-500 mb-3">The Apparel Fulfillment Challenge</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Clothing is one of the hardest product categories to fulfill
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fashion brands face fulfillment challenges that most 3PLs aren&apos;t built to
                handle. Here&apos;s what makes apparel logistics different — and why you need a
                partner who specializes in it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {challenges.map((item) => (
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
              <p className="text-sm font-semibold text-indigo-500 mb-3">Apparel Fulfillment Services</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Everything your clothing brand needs to ship at scale
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From high-SKU inventory management to branded packaging and returns processing,
                Handled provides the specialized apparel fulfillment services your fashion brand
                needs to deliver flawless customer experiences.
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

        {/* Apparel Product Categories */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-indigo-500 mb-3">Products We Fulfill</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Fulfillment tailored to every apparel category
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From t-shirts and casual wear to designer fashion and footwear, Handled tailors our
                apparel fulfillment approach to the specific needs of your product line.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {apparelCategories.map((category) => (
                <div key={category.title} className="rounded-xl border border-border/60 p-6">
                  <category.icon className="h-8 w-8 text-indigo-500 mb-4" />
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

            {/* Additional product types */}
            <div className="mt-12 max-w-3xl mx-auto">
              <p className="text-center text-sm font-semibold text-muted-foreground mb-6">
                We also fulfill these apparel and fashion products:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Jeans & Denim",
                  "Dresses",
                  "Sportswear & Activewear",
                  "Outerwear & Jackets",
                  "Loungewear",
                  "Infant & Baby Clothing",
                  "Uniforms & Workwear",
                  "Swimwear",
                  "Tracksuits",
                  "Thermal Wear",
                  "Hats & Headwear",
                  "Belts & Accessories",
                  "Jewelry",
                  "Bags & Backpacks",
                  "Socks & Hosiery",
                ].map((product) => (
                  <span
                    key={product}
                    className="inline-flex items-center rounded-full border border-border/60 bg-background px-3 py-1 text-xs text-muted-foreground"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Handled for Apparel */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-blue-400 mb-3">Why Clothing Brands Choose Handled</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The 3PL built for apparel fulfillment
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/70">
                Handled isn&apos;t a generic warehouse that happens to store clothing. We&apos;re
                a fulfillment partner purpose-built for apparel brands — with the technology,
                warehouse infrastructure, and performance guarantees to prove it.
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
              <p className="text-sm font-semibold text-indigo-500 mb-3">How It Works</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Start shipping clothing orders in days, not months
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Getting started with apparel fulfillment through Handled is simple. Our
                onboarding team handles everything so your fashion brand can start shipping fast.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrationSteps.map((item) => (
                <div key={item.step} className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 text-white font-bold text-lg mb-4">
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

        {/* Performance Guarantees */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-indigo-500 mb-3">Apparel Fulfillment SLAs</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Performance guarantees built for fashion brands
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                In apparel, a wrong size or late delivery means a guaranteed return. Handled is one
                of the only clothing 3PLs that backs every SLA with financial accountability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-border/60 text-center">
                <CardContent className="p-8">
                  <HiOutlineClock className="h-8 w-8 text-indigo-500 mx-auto mb-4" />
                  <p className="text-4xl font-bold mb-1">100%</p>
                  <p className="text-sm text-muted-foreground mb-4">Same-day shipping</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    All apparel orders received by 12PM ship the same business day. Guaranteed.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/60 text-center">
                <CardContent className="p-8">
                  <HiOutlineShieldCheck className="h-8 w-8 text-purple-500 mx-auto mb-4" />
                  <p className="text-4xl font-bold mb-1">99.9%</p>
                  <p className="text-sm text-muted-foreground mb-4">Pick accuracy</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Barcode-verified fulfillment ensures the right size, color, and style in every order.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/60 text-center">
                <CardContent className="p-8">
                  <HiOutlineTruck className="h-8 w-8 text-emerald-500 mx-auto mb-4" />
                  <p className="text-4xl font-bold mb-1">2-Day</p>
                  <p className="text-sm text-muted-foreground mb-4">Ground delivery</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Bi-coastal fulfillment centers reach 95%+ of US addresses within 2 business days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* DTC vs B2B Fulfillment */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-indigo-500 mb-3">Apparel Fulfillment Solutions</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Fulfillment for every apparel sales channel
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Whether you sell DTC, wholesale, or across multiple channels — Handled has the
                clothing fulfillment solution for your brand.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-border/60 p-8">
                <HiOutlineCube className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="font-semibold text-xl mb-3">DTC Apparel Fulfillment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Fast, branded fulfillment for direct-to-consumer fashion brands. Same-day shipping,
                  custom poly mailers, branded tissue and inserts, and a seamless returns experience
                  that keeps your customers coming back.
                </p>
                <ul className="space-y-2">
                  {[
                    "Same-day pick, pack, and ship",
                    "Custom branded poly mailers and boxes",
                    "Promotional inserts and samples",
                    "Branded returns portal",
                    "Shopify, Amazon, and marketplace integration",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <HiOutlineCheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border/60 p-8">
                <HiOutlineBuildingStorefront className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="font-semibold text-xl mb-3">B2B & Wholesale Apparel Fulfillment</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Retail-compliant wholesale fulfillment for apparel brands selling to Nordstrom,
                  Target, TJ Maxx, boutiques, and department stores. EDI compliance, routing guides,
                  and retail-ready packaging.
                </p>
                <ul className="space-y-2">
                  {[
                    "EDI-compliant order processing",
                    "Retailer routing guide compliance",
                    "Pallet building and floor loads",
                    "Carton labeling and ASN generation",
                    "Wholesale and boutique bulk orders",
                  ].map((item) => (
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

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <p className="text-sm font-semibold text-indigo-500 mb-3">FAQ</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Apparel fulfillment questions, answered
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Everything you need to know about outsourcing fulfillment for your clothing brand.
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

        {/* CTA Section */}
        <section className="py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative rounded-2xl bg-primary overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground tracking-tight">
                  Ready to scale your apparel fulfillment?
                </h2>
                <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl mx-auto">
                  Get a custom fulfillment quote for your clothing brand. Our team will design a
                  warehousing and shipping strategy tailored to your products, SKU count, and growth goals.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90"
                    asChild
                  >
                    <Link href="/contact-sales">
                      Get a free quote
                      <HiOutlineArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                    asChild
                  >
                    <Link href="/">Explore all services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Apparel Fulfillment Services",
            provider: {
              "@type": "Organization",
              name: "Handled",
              url: "https://www.handledcommerce.com",
            },
            description:
              "Apparel fulfillment and 3PL services for clothing, fashion, and footwear brands. High-SKU inventory management, garment-safe packaging, returns processing, and same-day shipping.",
            areaServed: "US",
            serviceType: "Apparel Order Fulfillment",
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
