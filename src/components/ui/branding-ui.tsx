import React from "react"
import {
  HiOutlineCube,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
  HiOutlineEnvelope,
  HiOutlineSwatch,
} from "react-icons/hi2"
import { cn } from "@/lib/utils"

export function BrandingUI({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-float", className)}>
      {/* Header bar */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
        <div className="flex items-center gap-2">
          <HiOutlineSparkles className="h-5 w-5 text-white/80" />
          <span className="text-white text-sm font-medium">Your Brand — Unboxing Experience</span>
        </div>
      </div>

      <div className="p-6">
        {/* What's inside */}
        <div className="mb-6">
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <div className="flex gap-3">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 border border-purple-200 flex items-center justify-center shrink-0">
                <HiOutlineCube className="h-7 w-7 text-purple-500" />
              </div>
              <div className="flex-1 space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What&apos;s inside</p>
                <BrandItem label="Custom branded box" />
                <BrandItem label="Branded tissue paper" />
                <BrandItem label="Thank-you insert card" />
                <BrandItem label="Promo sticker pack" />
              </div>
            </div>
          </div>
        </div>

        {/* Branded tracking email */}
        <div className="mb-6">
          <div className="rounded-lg border border-border bg-muted/50 p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <HiOutlineEnvelope className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Branded Tracking Email</p>
                <p className="text-xs text-muted-foreground">Sent automatically at each milestone</p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background p-3 space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded bg-purple-600 flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">YB</span>
                </div>
                <span className="text-xs font-medium">Your order has shipped!</span>
              </div>
              <div className="h-1.5 w-3/4 rounded bg-muted-foreground/10" />
              <div className="h-1.5 w-1/2 rounded bg-muted-foreground/10" />
              <div className="mt-2 h-7 w-24 rounded bg-purple-600 flex items-center justify-center">
                <span className="text-white text-[10px] font-medium">Track Order</span>
              </div>
            </div>
          </div>
        </div>

        {/* Branded returns portal */}
        <div className="flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
              <HiOutlineSwatch className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium">Branded Returns Portal</p>
              <p className="text-xs text-muted-foreground">Custom colors, logo, and messaging</p>
            </div>
          </div>
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
            Branded
          </span>
        </div>
      </div>
    </div>
  )
}

function BrandItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <HiOutlineCheckCircle className="h-3 w-3 text-purple-500 shrink-0" />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}
