import React from "react"
import { Badge } from "@/components/ui/badge"
import {
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineGift,
} from "react-icons/hi2"
import { SiShopify } from "react-icons/si"

function SyncRow({ label, status, active }: { label: string; status: string; active: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`h-2 w-2 rounded-full ${active ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground/30"}`} />
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="text-xs text-muted-foreground">{status}</span>
    </div>
  )
}

function FlowRow({ icon: Icon, label }: { icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Icon className="h-3.5 w-3.5 text-blue-500 shrink-0" />
      <span className="text-muted-foreground">{label}</span>
    </div>
  )
}

export function IntegrationsUI() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-float">
      <div className="bg-[#96bf48] px-6 py-4 flex items-center gap-2">
        <SiShopify className="h-5 w-5 text-white" />
        <span className="text-white text-sm font-medium">Shopify × Handled — Connected</span>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <SyncRow label="Orders" status="Syncing in real-time" active />
          <SyncRow label="Inventory" status="2,847 SKUs synced" active />
          <SyncRow label="Tracking" status="Auto-push enabled" active />
        </div>

        <div className="mt-4 rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
            Active Automations
          </p>
          <div className="space-y-2">
            <FlowRow icon={HiOutlineBolt} label="Auto-route orders by region" />
            <FlowRow icon={HiOutlineArrowPath} label="Restock alerts → Purchase order" />
            <FlowRow icon={HiOutlineGift} label="Free gift insert on orders $100+" />
          </div>
        </div>

        <div className="rounded-lg border border-border bg-background p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <HiOutlineArrowPath className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-xs font-medium">Returns Portal</p>
              <p className="text-[11px] text-muted-foreground">Self-service enabled</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-[10px] bg-emerald-100 text-emerald-700 border-0">Live</Badge>
        </div>
      </div>
    </div>
  )
}
