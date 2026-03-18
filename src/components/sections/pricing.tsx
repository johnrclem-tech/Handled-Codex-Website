import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { HiOutlineCheckCircle } from "react-icons/hi2"
import { Warehouse, PackageCheck, Truck, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Storage",
    icon: <Warehouse className="h-6 w-6" />,
    description:
      "Your inventory is stored securely and efficiently, with monthly pallet-based pricing you only pay for the space you need.",
    target: "Facility Ops:",
    features: [
      "Pallet-level storage",
      "Climate-controlled space",
      "Real-time inventory sync",
      "Smart bin organization",
      "Scale up/down monthly",
    ],
  },
  {
    name: "Fulfillment",
    icon: <PackageCheck className="h-6 w-6" />,
    description:
      "Every order is picked and packed with care, with per-order pricing your costs rise only when your volume does.",
    target: "Order Processing:",
    features: [
      "Precision pick & pack",
      "Eco-friendly packaging",
      "Same-day dispatch",
      "Dashboard transparency",
      "High-volume scalability",
    ],
  },
  {
    name: "Shipping",
    icon: <Truck className="h-6 w-6" />,
    description:
      "We optimize every order for speed and savings, with per-shipment pricing based on the carrier and service level used.",
    target: "Logistics & Freight:",
    features: [
      "Preferred carrier rates",
      "Regional & national reach",
      "Optimized routing",
      "Dynamic label generation",
      "Global shipping options",
    ],
  },
  {
    name: "Projects",
    icon: <Sparkles className="h-6 w-6" />,
    description:
      "From kitting to custom prep work, our per-project pricing is based on the complexity and scope of each project.",
    target: "Custom Workflows:",
    features: [
      "Custom kitting/assembly",
      "Branded unboxing",
      "FBA prep & labeling",
      "Returns processing",
      "Bulk project handling",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Transparent pricing that scales with you
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No surprise fees. No minimums. Just clean, usage-based pricing whether you
            ship 50 or 50,000 orders a month.
          </p>
        </div>

        {/* Plans */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className="group hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 border-border/60"
            >
              <CardContent className="p-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted mb-4">
                  {plan.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {plan.description}
                </p>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-3">
                  {plan.target}
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
