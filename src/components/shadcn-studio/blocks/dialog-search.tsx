"use client"

import { useState } from "react"
import type { ReactElement } from "react"
import {
  BarChart3Icon,
  FileTextIcon,
  HomeIcon,
  MegaphoneIcon,
  SearchIcon,
} from "lucide-react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

type Props = {
  trigger: ReactElement
  defaultOpen?: boolean
  className?: string
}

const SearchDialog = ({ defaultOpen = false, trigger, className }: Props) => {
  const [open, setOpen] = useState(defaultOpen)
  const [search, setSearch] = useState("")

  return (
    <div className={className}>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search internal tools..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Internal Tools">
            <CommandItem onSelect={() => setOpen(false)}>
              <HomeIcon className="size-4" />
              <a href="/internal">Internal Home</a>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <BarChart3Icon className="size-4" />
              <a href="/internal/keyword-analysis">Keyword Analysis</a>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <FileTextIcon className="size-4" />
              <a href="/internal/instructions">Instructions</a>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <MegaphoneIcon className="size-4" />
              <a href="/internal/instructions/google-ads">Google Ads Instructions</a>
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              <FileTextIcon className="size-4" />
              <span>Landing Page Planner</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <div className="text-muted-foreground flex items-center gap-2 p-4 text-sm">
            <SearchIcon className="size-4" />
            Search is scoped to Handled marketing tools.
          </div>
        </CommandList>
      </CommandDialog>
    </div>
  )
}

export default SearchDialog
