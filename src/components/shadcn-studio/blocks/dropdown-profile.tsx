import type { ReactElement } from "react"
import { CreditCardIcon, LogOutIcon, SettingsIcon, UserIcon, UsersIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Props = {
  trigger: ReactElement
  defaultOpen?: boolean
  align?: "start" | "center" | "end"
}

const ProfileDropdown = ({ trigger, defaultOpen, align = "end" }: Props) => {
  return (
    <DropdownMenu defaultOpen={defaultOpen}>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align={align}>
        <DropdownMenuLabel className="flex items-center gap-4 px-4 py-3 font-normal">
          <Avatar className="size-10">
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <span className="text-lg font-semibold">John Clem</span>
            <span className="text-muted-foreground text-sm">Marketing Admin</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem><UserIcon className="size-4" /> My account</DropdownMenuItem>
          <DropdownMenuItem><SettingsIcon className="size-4" /> Settings</DropdownMenuItem>
          <DropdownMenuItem><CreditCardIcon className="size-4" /> Billing</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem><UsersIcon className="size-4" /> Manage team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive"><LogOutIcon className="size-4" /> Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileDropdown
