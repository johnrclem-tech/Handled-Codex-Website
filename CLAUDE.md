# Claude Code Guidelines

## Typography Convention

Always use the global typography utility classes defined in `src/app/globals.css` for section-level elements:

- `section-label` / `section-label-light` — small label text above section headings
- `section-heading` — main section h2 heading
- `section-description` / `section-description-light` — paragraph below section heading
- `card-title` — card heading (h3)
- `card-description` — card body text
- `feature-text` — feature list item text

Use the `-light` variants on primary-background sections (dark backgrounds).
Do not use inline Tailwind classes for these elements in new sections.

## Content Rules

- The CTA section is always the last section before the Footer.
- The FAQ section (when present) is always immediately above the CTA section.
- Typical bottom-of-page order: ... → Pricing → Customers → FAQ → CTA → Footer.

## Section Component Rules

- One section component per section type (e.g., one `cta.tsx`, one `pricing.tsx`). All content (heading, description, data arrays) is passed as props from `page.tsx`. Do not create page-specific wrapper components.
- Only use ShadCN components for UI primitives (Button, Card, Input, Badge, etc.). Do not use non-ShadCN component libraries for new UI elements.
- Abstract reusable sub-components from sections into `src/components/ui/` (e.g., `QuoteForm` extracted from CTA) so they can be reused independently.
- Every section component must accept an optional `bgColor` prop (e.g., `bgColor?: string`) that applies a Tailwind background class to the `<section>` element. This lets each page set a different background color for the same section.
- Never use the same background color for sections that are adjacent on a page. Alternate between white (no `bgColor`), `bg-muted/30`, `bg-primary` (dark), or other distinct backgrounds so consecutive sections are always visually separated.
- When importing a shadcn block, replace its inline heading/description font classes (e.g., `text-2xl font-semibold`, `text-muted-foreground text-xl`) with the project's typography utility classes (`section-label`, `section-heading`, `section-description`, etc.) defined in `globals.css`.
