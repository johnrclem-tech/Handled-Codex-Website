import React from "react"
import {
  HiOutlineMapPin,
  HiOutlineUserGroup,
  HiOutlineRocketLaunch,
} from "react-icons/hi2"

interface Leader {
  name: string
  role: string
  bio: string
}

interface CompanyProps {
  label?: string
  heading?: string
  description?: string
  leaders?: Leader[]
}

const defaultLeaders: Leader[] = [
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

export function Company({
  label = "Company",
  heading = "Built by operators, for operators",
  description =
    "Founded by former leaders at Stamps.com, ShipStation, and Auctane — Handled was created to bring software-grade transparency and accountability to fulfillment.",
  leaders = defaultLeaders,
}: CompanyProps) {
  return (
    <section id="company" className="bg-muted/30 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="section-label mb-3">{label}</p>
          <h2 className="section-heading">{heading}</h2>
          <p className="section-description">{description}</p>
        </div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 to-slate-100">
                <span className="text-lg font-bold text-slate-600">
                  {leader.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold">{leader.name}</h3>
              <p className="mb-3 text-sm text-blue-600">{leader.role}</p>
              <p className="card-description">{leader.bio}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
              <HiOutlineMapPin className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="mb-1 font-semibold">Bi-Coastal Network</p>
              <p className="feature-text">
                Fulfillment centers in Los Angeles and New Jersey — covering 95%+ of the US
                within 2-day ground shipping.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
              <HiOutlineUserGroup className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="mb-1 font-semibold">Dedicated Partners</p>
              <p className="feature-text">
                Every client gets a dedicated fulfillment partner — a real person inside the
                warehouse who works on your account every day.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
              <HiOutlineRocketLaunch className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="mb-1 font-semibold">Fast Onboarding</p>
              <p className="feature-text">
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
