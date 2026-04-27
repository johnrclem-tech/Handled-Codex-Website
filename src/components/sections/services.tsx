import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineBuildingStorefront,
  HiOutlineArrowPath,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
} from "react-icons/hi2"

export interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
  bg: string
}

interface ServicesProps {
  label?: string
  heading?: string
  description?: string
  items?: ServiceItem[]
}

const defaultServices: ServiceItem[] = [
  {
    icon: HiOutlineCube,
    title: "DTC Fulfillment",
    description:
      "Fast, accurate shipping tailored to your brand. Same-day fulfillment for orders by 12PM, with custom packaging and branded unboxing experiences.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: HiOutlineBuildingStorefront,
    title: "B2B & Retail",
    description:
      "Ship wholesale and retail orders with precision. EDI-compliant, Amazon-ready packaging, labeling, and routing for Target, Costco, Walmart, and more.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: HiOutlineGlobeAlt,
    title: "Omnichannel",
    description:
      "Unified fulfillment across every channel. Seamlessly manage DTC, marketplace, and wholesale orders from a single platform.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: HiOutlineSparkles,
    title: "Kitting & Assembly",
    description:
      "Custom bundles, multi-SKU kits, and subscription boxes built with care. Elevate your unboxing with inserts, wraps, and branded materials.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: HiOutlineTruck,
    title: "2-Day Ground",
    description:
      "Affordable 2-day delivery from our bi-coastal warehouse network. LA and NJ locations cover 95%+ of the US within 2 business days.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: HiOutlineArrowPath,
    title: "Returns Management",
    description:
      "Streamlined, branded returns portal for your customers. Automatic restocking, quality inspection, and real-time inventory updates.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
]

export function Services({
  label = "Services",
  heading = "Everything you need to ship at scale",
  description =
    "From pick and pack to branded experiences, we handle the entire post-purchase journey so you can focus on growing your brand.",
  items = defaultServices,
}: ServicesProps) {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="section-label mb-3">{label}</p>
          <h2 className="section-heading">{heading}</h2>
          <p className="section-description">{description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <Card
              key={service.title}
              className="group border-border/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div
                  className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${service.bg}`}
                >
                  <service.icon className={`h-5 w-5 ${service.color}`} />
                </div>
                <h3 className="card-title mb-2">{service.title}</h3>
                <p className="card-description">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
