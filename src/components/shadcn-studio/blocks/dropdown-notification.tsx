import type { ReactElement } from "react"
import { BarChart3Icon, FileTextIcon, SettingsIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Props = {
  trigger: ReactElement
  defaultOpen?: boolean
  align?: "start" | "center" | "end"
}

const NotificationDropdown = ({ trigger, defaultOpen, align = "end" }: Props) => {
  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 max-w-[calc(100vw-2rem)]" align={align}>
        <Tabs defaultValue="inbox" className="gap-0">
          <DropdownMenuLabel className="flex flex-col pb-0">
            <div className="flex items-center justify-between gap-6 pb-2.5">
              <span className="text-muted-foreground text-sm font-normal uppercase">
                Notifications
              </span>
              <Badge variant="secondary" className="bg-primary/10 text-primary font-normal">
                3 New
              </Badge>
            </div>
            <div className="-mb-0.5 flex items-center justify-between gap-4">
              <TabsList className="relative h-fit rounded-none bg-transparent p-0">
                <TabsTrigger value="inbox">Inbox</TabsTrigger>
                <TabsTrigger value="general">General</TabsTrigger>
              </TabsList>
              <SettingsIcon className="size-5" />
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <TabsContent value="inbox">
            <DropdownMenuItem className="gap-3 px-3 py-3">
              <BarChart3Icon className="size-4" />
              <div className="flex flex-col">
                <span className="font-medium">Keyword dashboard updated</span>
                <span className="text-muted-foreground text-xs">Ready for review locally.</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-3 px-3 py-3">
              <FileTextIcon className="size-4" />
              <div className="flex flex-col">
                <span className="font-medium">Instruction folder created</span>
                <span className="text-muted-foreground text-xs">Website and Google Ads rules are indexed.</span>
              </div>
            </DropdownMenuItem>
          </TabsContent>
          <TabsContent value="general">
            <DropdownMenuItem className="gap-3 px-3 py-3">
              <SettingsIcon className="size-4" />
              Internal workspace is running in local-first mode.
            </DropdownMenuItem>
          </TabsContent>
        </Tabs>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default NotificationDropdown
