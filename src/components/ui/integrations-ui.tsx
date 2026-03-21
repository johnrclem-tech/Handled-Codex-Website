import React from "react"
import {
  HiOutlineBolt,
  HiOutlineArrowPath,
  HiOutlineGift,
} from "react-icons/hi2"
import { SiShopify } from "react-icons/si"
import { cn } from "@/lib/utils"

export function IntegrationsUI({ className }: { className?: string }) {
  return (
    <div className={cn("w-full max-w-sm rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-float", className)}>
      {/* Header bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SiShopify className="h-5 w-5 text-white/80" />
            <span className="text-white text-sm font-medium">Shopify × Handled — Connected</span>
          </div>
          <span className="text-white/60 text-xs">Powered by Handled</span>
        </div>
      </div>

      <div className="p-6">
        {/* Sync status */}
        <div className="mb-6 space-y-3">
          <SyncRow label="Orders" status="Syncing in real-time" active />
          <SyncRow label="Inventory" status="2,847 SKUs synced" active />
          <SyncRow label="Tracking" status="Auto-push enabled" active />
        </div>

        {/* Active automations */}
        <div className="mb-6 rounded-lg border border-border bg-muted/50 p-4">
          <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
            Active Automations
          </p>
          <div className="space-y-2">
            <FlowRow icon={HiOutlineBolt} label="Auto-route orders by region" />
            <FlowRow icon={HiOutlineArrowPath} label="Restock alerts → Purchase order" />
            <FlowRow icon={HiOutlineGift} label="Free gift insert on orders $100+" />
          </div>
        </div>

        {/* Returns portal status */}
        <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
              <HiOutlineArrowPath className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Returns Portal</p>
              <p className="text-xs text-muted-foreground">Self-service enabled</p>
            </div>
          </div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
            Live
          </span>
        </div>
      </div>
    </div>
  )
}

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
