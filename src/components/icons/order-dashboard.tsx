import React from "react"
import {
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineArrowTrendingUp,
} from "react-icons/hi2"

export function OrderDashboard() {
  return (
    <div className="relative animate-float">
      {/* Main dashboard card */}
      <div className="rounded-2xl border border-border bg-card shadow-xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Order Dashboard</p>
            <p className="text-2xl font-bold">1,847 orders</p>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full text-xs font-medium">
            <HiOutlineArrowTrendingUp className="h-3.5 w-3.5" />
            +12.5%
          </div>
        </div>

        {/* Mini chart - bar graph using divs */}
        <div className="flex items-end gap-1.5 h-20 mb-6">
          {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-500 to-blue-400 opacity-80 hover:opacity-100 transition-opacity"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>

        {/* Order status rows */}
        <div className="space-y-3">
          <OrderRow
            icon={<HiOutlineClock className="h-4 w-4 text-amber-500" />}
            label="Processing"
            count={124}
            color="bg-amber-50 text-amber-700"
          />
          <OrderRow
            icon={<HiOutlineCube className="h-4 w-4 text-blue-500" />}
            label="Packed"
            count={89}
            color="bg-blue-50 text-blue-700"
          />
          <OrderRow
            icon={<HiOutlineTruck className="h-4 w-4 text-purple-500" />}
            label="In Transit"
            count={342}
            color="bg-purple-50 text-purple-700"
          />
          <OrderRow
            icon={<HiOutlineCheckCircle className="h-4 w-4 text-emerald-500" />}
            label="Delivered"
            count={1292}
            color="bg-emerald-50 text-emerald-700"
          />
        </div>
      </div>

      {/* Floating notification card */}
      <div className="absolute -top-4 -right-4 animate-float-delayed rounded-xl border border-border bg-card shadow-lg p-3 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
          <HiOutlineCheckCircle className="h-4 w-4 text-emerald-600" />
        </div>
        <div>
          <p className="text-xs font-medium">Order #4821 shipped</p>
          <p className="text-xs text-muted-foreground">2-day ground • NY→LA</p>
        </div>
      </div>

      {/* Floating SLA card */}
      <div className="absolute -bottom-4 -left-4 animate-float rounded-xl border border-border bg-card shadow-lg p-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-xs font-medium">SLA Status</p>
        </div>
        <p className="text-lg font-bold text-emerald-600">100% on-time</p>
        <p className="text-xs text-muted-foreground">Last 30 days</p>
      </div>
    </div>
  )
}

function OrderRow({
  icon,
  label,
  count,
  color,
}: {
  icon: React.ReactNode
  label: string
  count: number
  color: string
}) {
  return (
    <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/50">
      <div className="flex items-center gap-2.5">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${color}`}>
        {count}
      </span>
    </div>
  )
}
