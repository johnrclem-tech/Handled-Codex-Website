import Link from "next/link"
import ApplicationShell from "@/components/shadcn-studio/blocks/application-shell-11"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { instructionSets } from "@/lib/instruction-registry"

const instructionIdeas = [
  "Add owner, last-reviewed date, and status to each instruction file.",
  "Create a checklist section in every instruction file so builds can be verified consistently.",
  "Add examples of good and bad outputs so future agents have sharper guidance.",
  "Split large workflows into reusable prompt recipes, templates, and acceptance tests.",
  "Add a changelog to each instruction file so you can see why rules changed.",
  "Create a production editing path later using GitHub commits instead of local file writes.",
]

export default function InternalInstructionsPage() {
  return (
    <ApplicationShell
      eyebrow="Internal Workspace"
      title="Instructions"
      description="View and edit the operating rules that guide website, marketing, Google Ads, GitHub, and Vercel work."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {instructionSets.map((instruction) => (
          <Card key={instruction.slug} className="shadow-none">
            <CardHeader>
              <div className="mb-2">
                <Badge variant="secondary">{instruction.category}</Badge>
              </div>
              <CardTitle className="text-base">{instruction.title}</CardTitle>
              <CardDescription>{instruction.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between gap-3">
              <code className="text-xs text-muted-foreground">{instruction.path}</code>
              <Button asChild>
                <Link href={`/internal/instructions/${instruction.slug}`}>
                  Open
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">Ideas To Make Instructions More Powerful</CardTitle>
          <CardDescription>
            These are the next upgrades I would make after the editor is working.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-2">
          {instructionIdeas.map((idea) => (
            <div key={idea} className="rounded-md border bg-background p-4 text-sm text-muted-foreground">
              {idea}
            </div>
          ))}
        </CardContent>
      </Card>
    </ApplicationShell>
  )
}
