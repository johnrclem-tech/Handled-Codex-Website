"use client"

import { useMemo } from "react"
import type { InstructionSet } from "@/lib/instruction-registry"

interface InstructionPreviewProps {
  instruction: InstructionSet
  content: string
}

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

function getTopLevelSections(lines: string[]) {
  return lines
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const title = line.replace(/^## /, "")

      return {
        id: slugifyHeading(title),
        title,
      }
    })
}

function MarkdownPreview({ content }: { content: string }) {
  const lines = useMemo(() => content.split("\n"), [content])
  const sections = useMemo(() => getTopLevelSections(lines), [lines])

  return (
    <div>
      {sections.length > 0 && (
        <nav className="mb-5 rounded-md border bg-card p-3" aria-label="Instruction sections">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Sections
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-md border bg-background px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                {section.title}
              </a>
            ))}
          </div>
        </nav>
      )}

      <div className="space-y-1.5 text-sm leading-5">
        {lines.map((line, index) => {
          const key = `${index}-${line}`

          if (line.startsWith("# ")) {
            return (
              <h1 key={key} className="text-2xl font-bold tracking-tight">
                {line.replace(/^# /, "")}
              </h1>
            )
          }

          if (line.startsWith("## ")) {
            const title = line.replace(/^## /, "")

            return (
              <h2
                key={key}
                id={slugifyHeading(title)}
                className="scroll-mt-20 pt-3 text-lg font-semibold tracking-tight"
              >
                {title}
              </h2>
            )
          }

          if (line.startsWith("### ")) {
            return (
              <h3 key={key} className="pt-2 font-semibold">
                {line.replace(/^### /, "")}
              </h3>
            )
          }

          if (line.startsWith("- ")) {
            return (
              <p key={key} className="pl-4 text-muted-foreground">
                • {line.replace(/^- /, "")}
              </p>
            )
          }

          if (/^\d+\./.test(line)) {
            return (
              <p key={key} className="pl-4 text-muted-foreground">
                {line}
              </p>
            )
          }

          if (line.trim() === "") {
            return <div key={key} className="h-1" />
          }

          return (
            <p key={key} className="text-muted-foreground">
              {line}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export function InstructionPreview({
  instruction,
  content,
}: InstructionPreviewProps) {
  return (
    <article className="max-w-5xl">
      <div className="mb-4 border-b border-border pb-3">
        <h2 className="text-lg font-semibold tracking-tight">{instruction.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{instruction.path}</p>
      </div>
      <MarkdownPreview content={content} />
    </article>
  )
}
