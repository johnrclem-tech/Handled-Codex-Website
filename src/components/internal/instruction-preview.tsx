"use client"

import { useMemo } from "react"
import type { InstructionSet } from "@/lib/instruction-registry"

interface InstructionPreviewProps {
  instruction: InstructionSet
  content: string
}

function MarkdownPreview({ content }: { content: string }) {
  const lines = useMemo(() => content.split("\n"), [content])

  return (
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
          return (
            <h2 key={key} className="pt-3 text-lg font-semibold tracking-tight">
              {line.replace(/^## /, "")}
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
