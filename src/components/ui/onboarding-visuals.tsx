import {
  HiOutlineArrowPath,
  HiOutlineBolt,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineCube,
  HiOutlineEnvelope,
  HiOutlineShoppingCart,
  HiOutlineSwatch,
  HiOutlineTruck,
} from "react-icons/hi2"

/* Step 1 — Integrate and automate */
export function OnboardingVisualIntegrate() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="text-xs font-medium text-muted-foreground">Live sync</span>
      </div>

      <div className="space-y-3">
        {[
          { icon: HiOutlineShoppingCart, label: "Shopify", status: "Connected" },
          { icon: HiOutlineArrowPath, label: "Inventory sync", status: "Real-time" },
          { icon: HiOutlineBolt, label: "Flow automations", status: "3 active" },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between rounded-lg bg-muted/50 px-3.5 py-2.5">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            <span className="text-xs text-muted-foreground">{item.status}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <HiOutlineCheckCircle className="h-3.5 w-3.5 text-green-500" />
        <span>All systems operational</span>
      </div>
    </div>
  )
}

/* Step 2 — Make shipping part of the sale */
export function OnboardingVisualShipping() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">Checkout preview</span>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">Shop Promise</span>
      </div>

      <div className="space-y-3">
        <div className="rounded-lg bg-muted/50 px-3.5 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HiOutlineTruck className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Standard shipping</p>
                <p className="text-xs text-muted-foreground">Arrives by Wed, Mar 25</p>
              </div>
            </div>
            <span className="text-sm font-medium">$4.99</span>
          </div>
        </div>

        <div className="rounded-lg border border-primary/30 bg-primary/5 px-3.5 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <HiOutlineBolt className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Express shipping</p>
                <p className="text-xs text-muted-foreground">Arrives by Mon, Mar 23</p>
              </div>
            </div>
            <span className="text-sm font-medium">$9.99</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted/50 px-3.5 py-2">
        <HiOutlineClock className="h-4 w-4 text-primary" />
        <span className="text-xs text-muted-foreground">Order by 12PM for same-day dispatch</span>
      </div>
    </div>
  )
}

/* Step 3 — Brand literally everything */
export function OnboardingVisualBrand() {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <HiOutlineSwatch className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium text-muted-foreground">Brand touchpoints</span>
      </div>

      <div className="space-y-3">
        {[
          { icon: HiOutlineCube, label: "Custom packaging", detail: "Branded box + tissue" },
          { icon: HiOutlineEnvelope, label: "Tracking emails", detail: "Your brand, your voice" },
          { icon: HiOutlineArrowPath, label: "Returns portal", detail: "Branded self-serve" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-lg bg-muted/50 px-3.5 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{item.label}</p>
              <p className="text-xs text-muted-foreground">{item.detail}</p>
            </div>
            <HiOutlineCheckCircle className="h-4 w-4 text-green-500" />
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-dashed border-primary/30 bg-primary/5 px-3.5 py-2.5 text-center">
        <span className="text-xs font-medium text-primary">Every shipment reinforces your brand</span>
      </div>
    </div>
  )
}
