"use client"

import { Card, CardContent } from "@/components/ui/card"
import { HiOutlineCheckCircle } from "react-icons/hi2"
import { Warehouse, PackageCheck, Truck } from "lucide-react"
import { NumberTicker } from "@/components/ui/number-ticker"

const plans = [
  {
    name: "Storage",
    icon: Warehouse,
    price: 25,
    unit: "/pallet/mo",
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
    unit: "/order",
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
    highlighted: true,
  },
  {
    name: "Shipping",
    icon: Truck,
    price: 4,
    unit: "/shipment",
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

export function Pricing3() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 mb-3">Simple Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Only pay for what you use
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three building blocks, zero hidden fees. Every service is priced per unit so costs scale with your business.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.highlighted
                  ? "border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  : "group hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border-border/60"
              }
            >
              <CardContent className="p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted mb-4">
                  <plan.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold">
                    $<NumberTicker startValue={0} value={plan.price} />
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {plan.description}
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <HiOutlineCheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
