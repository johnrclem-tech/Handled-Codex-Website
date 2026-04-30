"use client"

import * as React from "react"
import { Check, ChevronDown, Search, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface MultiSelectComboboxProps {
  label: string
  options: string[]
  selectedValues: string[]
  onChange: (values: string[]) => void
  placeholder?: string
  emptyText?: string
}

export function MultiSelectCombobox({
  label,
  options,
  selectedValues,
  onChange,
  placeholder = "Search options",
  emptyText = "No options found",
}: MultiSelectComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const rootRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [])

  const filteredOptions = React.useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) {
      return options
    }

    return options.filter((option) =>
      option.toLowerCase().includes(normalizedQuery)
    )
  }, [options, query])

  const summary =
    selectedValues.length === 0 ? "All" : `${selectedValues.length} selected`

  function toggleValue(value: string) {
    if (selectedValues.includes(value)) {
      onChange(selectedValues.filter((selected) => selected !== value))
      return
    }

    onChange([...selectedValues, value])
  }

  return (
    <div ref={rootRef} className="relative">
      <Button
        aria-expanded={open}
        className="h-auto min-h-14 w-full justify-between px-3 py-2 text-left"
        onClick={() => setOpen((current) => !current)}
        type="button"
        variant="outline"
      >
        <span>
          <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {label}
          </span>
          <span className="text-sm font-normal">{summary}</span>
        </span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </Button>

      {open ? (
        <Card className="absolute left-0 top-full z-30 mt-2 w-full p-2 shadow-xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              className="h-9 pl-8"
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
              value={query}
            />
          </div>

          <div className="mt-2 max-h-64 overflow-auto rounded-md border border-border">
            {filteredOptions.length === 0 ? (
              <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                {emptyText}
              </p>
            ) : (
              filteredOptions.map((option) => {
                const selected = selectedValues.includes(option)

                return (
                  <button
                    className={cn(
                      "flex w-full items-start gap-2 px-3 py-2 text-left text-sm hover:bg-muted",
                      selected && "bg-muted/70"
                    )}
                    key={`${label}-${option}`}
                    onClick={() => toggleValue(option)}
                    type="button"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-input",
                        selected && "border-primary bg-primary text-primary-foreground"
                      )}
                    >
                      {selected ? <Check className="h-3 w-3" /> : null}
                    </span>
                    <span>{option}</span>
                  </button>
                )
              })
            )}
          </div>

          <div className="mt-2 flex items-center justify-between gap-2">
            <Button
              disabled={selectedValues.length === 0}
              onClick={() => onChange([])}
              size="sm"
              type="button"
              variant="ghost"
            >
              Clear
            </Button>
            <Button onClick={() => setOpen(false)} size="sm" type="button">
              Done
            </Button>
          </div>
        </Card>
      ) : null}

      {selectedValues.length > 0 ? (
        <div className="mt-2 flex max-h-20 flex-wrap gap-1.5 overflow-auto">
          {selectedValues.map((value) => (
            <Badge
              className="gap-1 border-border bg-background text-foreground"
              key={`${label}-selected-${value}`}
              variant="outline"
            >
              {value}
              <button
                aria-label={`Remove ${value}`}
                className="rounded-full text-muted-foreground hover:text-foreground"
                onClick={() => toggleValue(value)}
                type="button"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      ) : null}
    </div>
  )
}
