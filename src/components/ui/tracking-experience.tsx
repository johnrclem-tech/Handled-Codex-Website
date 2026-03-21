import React from "react"
import {
  HiOutlineCheckCircle,
  HiOutlineCube,
  HiOutlineTruck,
  HiOutlineHome,
} from "react-icons/hi2"
import { cn } from "@/lib/utils"

export function TrackingExperience({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-float", className)}>
      {/* Header bar */}
      <div className="bg-primary px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-primary-foreground/20 flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">H</span>
          </div>
          <span className="text-primary-foreground text-sm font-medium">Your Brand × Handled</span>
        </div>
      </div>

      <div className="p-6">
        {/* Order info */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground mb-1">Order #HND-4821</p>
          <h4 className="font-semibold text-lg">Your order is on its way!</h4>
          <p className="text-sm text-muted-foreground mt-1">Estimated delivery: March 19, 2026</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-border" />

          <TimelineStep
            icon={HiOutlineCheckCircle}
            label="Order confirmed"
            time="Mar 16, 10:23 AM"
            active
            completed
          />
          <TimelineStep
            icon={HiOutlineCube}
            label="Packed & labeled"
            time="Mar 16, 11:45 AM"
            active
            completed
          />
          <TimelineStep
            icon={HiOutlineTruck}
            label="Shipped — In transit"
            time="Mar 16, 2:30 PM"
            active
            completed={false}
          />
          <TimelineStep
            icon={HiOutlineHome}
            label="Out for delivery"
            time="Estimated Mar 19"
            active={false}
            completed={false}
          />
        </div>

        {/* Mini map representation */}
        <div className="mt-6 rounded-lg bg-muted/50 border border-border p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium">Ridgefield, NJ</span>
            <span className="text-xs font-medium">Los Angeles, CA</span>
          </div>
          <div className="relative h-2 bg-border rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" />
            <div className="absolute top-1/2 -translate-y-1/2 left-[58%] h-3 w-3 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">In transit — Columbus, OH</p>
        </div>
      </div>
    </div>
  )
}

function TimelineStep({
  icon: Icon,
  label,
  time,
  active,
  completed,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  time: string
  active: boolean
  completed: boolean
}) {
  return (
    <div className="relative flex items-start gap-4 pb-6 last:pb-0">
      <div
        className={`relative z-10 h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
          completed
            ? "bg-emerald-100 text-emerald-600"
            : active
              ? "bg-blue-100 text-blue-600"
              : "bg-muted text-muted-foreground"
        }`}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="pt-1">
        <p className={`text-sm font-medium ${!active ? "text-muted-foreground" : ""}`}>
          {label}
        </p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  )
}
