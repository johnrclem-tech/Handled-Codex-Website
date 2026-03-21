import React from "react"
import {
  HiOutlineArrowPath,
  HiOutlineCheckCircle,
  HiOutlinePrinter,
  HiOutlineInboxArrowDown,
} from "react-icons/hi2"
import { cn } from "@/lib/utils"

export function ReturnsExperience({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-float-delayed", className)}>
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HiOutlineArrowPath className="h-5 w-5 text-white/80" />
            <span className="text-white text-sm font-medium">Easy Returns</span>
          </div>
          <span className="text-white/60 text-xs">Powered by Handled</span>
        </div>
      </div>

      <div className="p-6">
        {/* Return reason selector */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-3">Select items to return</p>
          <div className="space-y-2">
            <ReturnItem
              name="Classic Crew Tee — Black / M"
              sku="SKU-0412"
              selected
            />
            <ReturnItem
              name="Slim Joggers — Navy / L"
              sku="SKU-0891"
              selected={false}
            />
          </div>
        </div>

        {/* Reason */}
        <div className="mb-6">
          <p className="text-sm font-medium mb-2">Return reason</p>
          <div className="rounded-lg border border-blue-200 bg-blue-50/50 px-3 py-2 text-sm text-blue-700">
            Size too small — exchange for Large
          </div>
        </div>

        {/* Status indicators */}
        <div className="space-y-3">
          <StatusRow
            icon={HiOutlineCheckCircle}
            label="Return approved"
            status="Complete"
            statusColor="text-emerald-600 bg-emerald-50"
          />
          <StatusRow
            icon={HiOutlinePrinter}
            label="Shipping label"
            status="Ready to print"
            statusColor="text-blue-600 bg-blue-50"
          />
          <StatusRow
            icon={HiOutlineInboxArrowDown}
            label="Item received"
            status="Pending"
            statusColor="text-muted-foreground bg-muted"
          />
        </div>

        {/* Action button mock */}
        <div className="mt-6 w-full rounded-lg bg-primary text-primary-foreground text-center py-2.5 text-sm font-medium">
          Print Return Label
        </div>
      </div>
    </div>
  )
}

function ReturnItem({
  name,
  sku,
  selected,
}: {
  name: string
  sku: string
  selected: boolean
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors ${
        selected ? "border-blue-200 bg-blue-50/30" : "border-border"
      }`}
    >
      <div
        className={`h-4 w-4 rounded border-2 flex items-center justify-center ${
          selected ? "border-blue-500 bg-blue-500" : "border-border"
        }`}
      >
        {selected && (
          <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground">{sku}</p>
      </div>
    </div>
  )
}

function StatusRow({
  icon: Icon,
  label,
  status,
  statusColor,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  status: string
  statusColor: string
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm">{label}</span>
      </div>
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColor}`}>
        {status}
      </span>
    </div>
  )
}
