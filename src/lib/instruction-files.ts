import "server-only"

import { readFile } from "node:fs/promises"
import path from "node:path"
import { getInstructionSet } from "@/lib/instruction-registry"

export async function readInstructionContent(slug: string) {
  const instruction = getInstructionSet(slug)

  if (!instruction) {
    return null
  }

  const absolutePath = path.join(process.cwd(), instruction.path)
  const content = await readFile(absolutePath, "utf8")

  return { instruction, content }
}
