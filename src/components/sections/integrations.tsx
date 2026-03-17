import React from "react"
import {
  SiShopify,
  SiWoocommerce,
  SiBigcommerce,
} from "react-icons/si"
import { FaAmazon } from "react-icons/fa"
import { HiOutlineCube, HiOutlineLink, HiOutlineBolt } from "react-icons/hi2"

const integrations = [
  { name: "Shopify", icon: SiShopify, color: "text-[#96BF48]" },
  { name: "Amazon", icon: FaAmazon, color: "text-[#FF9900]" },
  { name: "WooCommerce", icon: SiWoocommerce, color: "text-[#96588A]" },
  { name: "BigCommerce", icon: SiBigcommerce, color: "text-[#121118]" },
  { name: "ShipStation", icon: HiOutlineCube, color: "text-[#68BC45]" },
  { name: "More", icon: HiOutlineLink, color: "text-blue-500" },
]

export function Integrations() {
  return (
    <section id="integrations" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Copy */}
          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3">Integrations</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Connect your store in under 24 hours
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Handled integrates seamlessly with the platforms and tools you already use.
              One-click connections to Shopify, Amazon, ShipStation, and dozens more.
            </p>

            <div className="mt-8 space-y-4">
              <IntegrationFeature
                icon={HiOutlineBolt}
                title="One-click setup"
                description="Most shopping carts can be connected in minutes, not days."
              />
              <IntegrationFeature
                icon={HiOutlineLink}
                title="Real-time sync"
                description="Orders, inventory, and tracking data sync bidirectionally in real-time."
              />
              <IntegrationFeature
                icon={HiOutlineCube}
                title="Multi-channel ready"
                description="Manage DTC, wholesale, and marketplace orders from one dashboard."
              />
            </div>
          </div>

          {/* Right - Integration grid */}
          <div className="grid grid-cols-3 gap-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="group flex flex-col items-center justify-center p-6 rounded-xl border border-border/60 bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <integration.icon className={`h-8 w-8 ${integration.color} mb-3 group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium">{integration.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegrationFeature({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}) {
  return (
    <div className="flex gap-3">
      <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
        <Icon className="h-4 w-4 text-blue-500" />
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
