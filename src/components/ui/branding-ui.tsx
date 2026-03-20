import { Badge } from "@/components/ui/badge"
import {
  HiOutlineCube,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
  HiOutlineEnvelope,
  HiOutlineSwatch,
} from "react-icons/hi2"

function BrandItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <HiOutlineCheckCircle className="h-3 w-3 text-purple-500 shrink-0" />
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

export function BrandingUI() {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-xl overflow-hidden animate-float">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
        <span className="text-white text-sm font-medium">Your Brand — Unboxing Experience</span>
      </div>
      <div className="p-6 space-y-4">
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

        <div className="rounded-lg border border-border bg-background p-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
              <HiOutlineEnvelope className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-xs font-medium">Branded Tracking Email</p>
              <p className="text-[11px] text-muted-foreground">Sent automatically at each milestone</p>
            </div>
          </div>
          <div className="rounded border border-border bg-muted/20 p-3 space-y-2">
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

        <div className="rounded-lg border border-border bg-background p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
              <HiOutlineSwatch className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-xs font-medium">Branded Returns Portal</p>
              <p className="text-[11px] text-muted-foreground">Custom colors, logo, and messaging</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-[10px] bg-purple-100 text-purple-700 border-0">
            <HiOutlineSparkles className="h-3 w-3 mr-0.5" />
            Branded
          </Badge>
        </div>
      </div>
    </div>
  )
}
