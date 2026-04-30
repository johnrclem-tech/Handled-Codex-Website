import { notFound } from "next/navigation"
import ApplicationShell from "@/components/shadcn-studio/blocks/application-shell-11"
import { InstructionPreview } from "@/components/internal/instruction-preview"
import { readInstructionContent } from "@/lib/instruction-files"

export const dynamic = "force-dynamic"

export default async function InternalInstructionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const result = await readInstructionContent(slug)

  if (!result) {
    notFound()
  }

  return (
    <ApplicationShell
      eyebrow="Instruction Preview"
      title={result.instruction.title}
      description={result.instruction.description}
    >
      <InstructionPreview
        instruction={result.instruction}
        content={result.content}
      />
    </ApplicationShell>
  )
}
