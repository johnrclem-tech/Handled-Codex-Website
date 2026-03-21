import {
  HiOutlineClock,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
} from "react-icons/hi2"
import { cn } from "@/lib/utils"

export function CheckoutUI({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-sm rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-float", className)}>
      {/* Header bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HiOutlineTruck className="h-5 w-5 text-white/80" />
            <span className="text-white text-sm font-medium">Checkout — Shipping Options</span>
          </div>
          <span className="text-white/60 text-xs">Powered by Handled</span>
        </div>
      </div>

      <div className="p-6">
        {/* Same-day cutoff banner */}
        <div className="mb-6 rounded-lg bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2">
          <HiOutlineClock className="h-5 w-5 text-emerald-600 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-emerald-800">Order by 2:00 PM ET — Ships Today!</p>
            <p className="text-xs text-emerald-600">Same-day fulfillment guaranteed</p>
          </div>
        </div>

        {/* Shipping options */}
        <div className="mb-6 space-y-2">
          <ShippingOption
            label="Standard Shipping"
            eta="Arrives Mar 21–22"
            price="Free"
            selected
            badge="Shop Promise"
          />
          <ShippingOption
            label="Express Shipping"
            eta="Arrives Mar 19"
            price="$8.99"
            selected={false}
          />
          <ShippingOption
            label="Overnight"
            eta="Arrives Mar 18"
            price="$14.99"
            selected={false}
          />
        </div>

        {/* Trust indicators */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <TrustBadge icon={HiOutlineShieldCheck} label="Shop Promise" color="text-blue-500" />
          <TrustBadge icon={HiOutlineTruck} label="Real-time tracking" color="text-emerald-500" />
          <TrustBadge icon={HiOutlineCheckCircle} label="Delivery date" color="text-emerald-500" />
        </div>
      </div>
    </div>
  )
}

function ShippingOption({
  label,
  eta,
  price,
  selected,
  badge,
}: {
  label: string
  eta: string
  price: string
  selected: boolean
  badge?: string
}) {
  return (
    <div
      className={`rounded-lg border p-3 flex items-center justify-between transition-all ${
        selected
          ? "border-blue-300 bg-blue-50/50 ring-1 ring-blue-100"
          : "border-border"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`h-4 w-4 rounded-full border-2 flex items-center justify-center ${
            selected ? "border-blue-500" : "border-muted-foreground/30"
          }`}
        >
          {selected && <div className="h-2 w-2 rounded-full bg-blue-500" />}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">{label}</p>
            {badge && (
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground">{eta}</p>
        </div>
      </div>
      <span className={`text-sm font-medium ${price === "Free" ? "text-emerald-600" : ""}`}>{price}</span>
    </div>
  )
}

function TrustBadge({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  color: string
}) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <Icon className={`h-3.5 w-3.5 ${color}`} />
      <span>{label}</span>
    </div>
  )
}
