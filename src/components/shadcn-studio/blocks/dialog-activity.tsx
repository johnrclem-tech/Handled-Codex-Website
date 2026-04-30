import type { ReactElement } from "react"
import { BarChart3Icon, FileTextIcon, MegaphoneIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type Props = {
  trigger: ReactElement
  defaultOpen?: boolean
}

const activityItems = [
  {
    icon: BarChart3Icon,
    title: "Keyword analysis refreshed",
    detail: "Raw CSV table and filters were updated.",
    time: "Today",
  },
  {
    icon: MegaphoneIcon,
    title: "Google Ads instructions moved",
    detail: "Canonical ad rules now live in docs/instructions.",
    time: "Yesterday",
  },
  {
    icon: FileTextIcon,
    title: "Website build rules organized",
    detail: "Agent instructions now point to focused instruction files.",
    time: "Yesterday",
  },
]

const ActivityDialog = ({ defaultOpen = false, trigger }: Props) => {
  return (
    <Sheet defaultOpen={defaultOpen}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="gap-0 sm:max-w-112">
        <SheetHeader className="border-b py-3">
          <SheetTitle className="text-lg leading-6">Activity</SheetTitle>
          <SheetDescription>Recent marketing workspace updates.</SheetDescription>
        </SheetHeader>

        <div className="overflow-y-auto">
          {activityItems.map((item, index) => (
            <div key={item.title}>
              <div className="flex gap-4 px-4 py-4">
                <Avatar>
                  <AvatarFallback>
                    <item.icon className="size-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-1 text-sm">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-muted-foreground">{item.detail}</p>
                  <p className="text-muted-foreground">{item.time}</p>
                </div>
              </div>
              {index < activityItems.length - 1 ? <Separator /> : null}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ActivityDialog
