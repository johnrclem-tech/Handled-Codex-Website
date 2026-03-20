import {
  HiOutlineClock,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
} from "react-icons/hi2"

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
          : "border-border hover:border-border/80"
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

export function CheckoutUI() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-float">
      <div className="bg-primary px-6 py-4">
        <span className="text-primary-foreground text-sm font-medium">Checkout — Shipping Options</span>
      </div>
      <div className="p-6 space-y-4">
        <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2">
          <HiOutlineClock className="h-5 w-5 text-emerald-600 shrink-0" />
          <div>
            <p className="text-xs font-semibold text-emerald-800">Order by 2:00 PM ET — Ships Today!</p>
            <p className="text-[11px] text-emerald-600">Same-day fulfillment guaranteed</p>
          </div>
        </div>

        <div className="space-y-2">
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

        <div className="flex items-center gap-3 pt-2 border-t border-border">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <HiOutlineShieldCheck className="h-3.5 w-3.5 text-blue-500" />
            <span>Shop Promise</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <HiOutlineTruck className="h-3.5 w-3.5 text-emerald-500" />
            <span>Real-time tracking</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <HiOutlineCheckCircle className="h-3.5 w-3.5 text-emerald-500" />
            <span>Delivery date</span>
          </div>
        </div>
      </div>
    </div>
  )
}
