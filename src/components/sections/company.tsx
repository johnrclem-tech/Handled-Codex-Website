import React from "react"
import {
  HiOutlineMapPin,
  HiOutlineUserGroup,
  HiOutlineRocketLaunch,
} from "react-icons/hi2"

const leaders = [
  {
    name: "Chuck",
    role: "Co-Founder",
    bio: "Former Auctane and Stamps.com leader. Built Handled to deliver tech-enabled, service-driven ecommerce fulfillment.",
  },
  {
    name: "Nathan",
    role: "Co-Founder",
    bio: "Former CEO of Stamps.com and ShipStation. 20+ years building global ecommerce shipping technology.",
  },
  {
    name: "Maya",
    role: "Co-Founder",
    bio: "Experience at Neutrogena, Mattel, and Disney with a Kellogg MBA. Brings brand-level operational excellence.",
  },
]

export function Company() {
  return (
    <section id="company" className="py-24 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 mb-3">Company</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Built by operators, for operators
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Founded by former leaders at Stamps.com, ShipStation, and Auctane — Handled was
            created to bring software-grade transparency and accountability to fulfillment.
          </p>
        </div>

        {/* Leadership */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center mb-4">
                <span className="text-lg font-bold text-slate-600">
                  {leader.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold">{leader.name}</h3>
              <p className="text-sm text-blue-600 mb-3">{leader.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>

        {/* Locations */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <HiOutlineMapPin className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="font-semibold mb-1">Bi-Coastal Network</p>
              <p className="text-sm text-muted-foreground">
                Fulfillment centers in Los Angeles and New Jersey — covering 95%+ of the US
                within 2-day ground shipping.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <HiOutlineUserGroup className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="font-semibold mb-1">Dedicated Partners</p>
              <p className="text-sm text-muted-foreground">
                Every client gets a dedicated fulfillment partner — a real person inside the
                warehouse who works on your account every day.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <HiOutlineRocketLaunch className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="font-semibold mb-1">Fast Onboarding</p>
              <p className="text-sm text-muted-foreground">
                Most brands are fully onboarded in 7–10 business days. Connect your store,
                send inventory, and start shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
