# Website Build Rules

## Typography Convention

Always use the global typography utility classes defined in `src/app/globals.css` for section-level elements:

- `section-label` / `section-label-light` - small label text above section headings
- `section-heading` - main section h2 heading
- `section-description` / `section-description-light` - paragraph below section heading
- `card-title` - card heading (h3)
- `card-description` - card body text
- `feature-text` - feature list item text

Use the `-light` variants on primary-background sections (dark backgrounds).
Do not use inline Tailwind classes for these elements in new sections.

## Content Rules

- The CTA section is always the last section before the Footer.
- The FAQ section, when present, is always immediately above the CTA section.
- Typical bottom-of-page order: Pricing -> Customers -> FAQ -> CTA -> Footer.

## Section Component Rules

- One section component per section type, such as one `cta.tsx` or one `pricing.tsx`.
- All content, including headings, descriptions, and data arrays, is passed as props from `page.tsx`.
- Do not create page-specific wrapper components.
- Only use ShadCN components for UI primitives, such as Button, Card, Input, Badge, Accordion, and Separator.
- Do not use non-ShadCN component libraries for new UI elements.
- Abstract reusable sub-components from sections into `src/components/ui/` so they can be reused independently.
- Every section component must accept an optional `bgColor` prop that applies a Tailwind background class to the `<section>` element.
- Never use the same background color for sections that are adjacent on a page.
- Alternate between white, `bg-muted/30`, `bg-primary`, or other distinct backgrounds so consecutive sections are visually separated.
- When importing a shadcn block, replace its inline heading and description font classes with the project's typography utility classes from `globals.css`.
- If a section component uses client-side features with `"use client"`, it must hard-code non-serializable dependencies internally and only accept serializable props from pages.
- For server-rendered sections, icon component references can be passed directly from the page file.

## Section Prop Templates

- Every section component in `src/components/sections/` must include a commented-out usage example after its props interface.
- The comment should show the component name, all required and optional props, and the shape of any data arrays.
- This serves as a copy-paste template when building new pages.

## SEO Page Data Rules

- When building a new SEO page, define all section props directly in the page file.
- Do not create centralized data files for page-specific content.
- Each page owns its own content.
- Reuse section components, not page data.
