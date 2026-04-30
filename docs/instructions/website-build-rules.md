# Website Design Rules

Status: Active
Owner: John
Last updated: 2026-04-30
Version: 2.0

## Purpose

Use this instruction set when changing the visual design system for the Handled website or internal marketing tools. The goal is to keep every page consistent, reusable, polished, and easy to maintain by relying on the existing component, section, and chart libraries.

This file is design-only. SEO strategy and landing page strategy live in their own instruction sets.

## When To Use

Use this instruction set when working on:

- Visual layout, spacing, rhythm, hierarchy, or page composition.
- Section design in `src/components/sections/`.
- Shared UI primitives in `src/components/ui/`.
- Internal tool surfaces that should follow the same design system.
- Cards, tables, filters, sidebars, charts, buttons, navigation, forms, and typography.
- Any change that affects how a website or internal page looks and feels.

Do not use this as the primary instruction set for:

- SEO recommendations, metadata, schema, search intent, or indexability. Use `docs/instructions/seo.md`.
- Landing page strategy, offer structure, page-specific conversion copy, or paid-search page planning. Use `docs/instructions/landing-pages.md`.
- Google Ads copy generation. Use `docs/instructions/google-ads.md`.

## Reuse First

Always look for an existing component, section, or chart before building anything new.

- Use existing sections from `src/components/sections/` whenever they can satisfy the design need through props or composition.
- Use existing UI primitives from `src/components/ui/` for buttons, cards, tables, inputs, dropdowns, comboboxes, sidebars, dialogs, accordions, tabs, and similar controls.
- Use existing chart/internal visualization components before creating a new chart pattern.
- Prefer adapting content, props, and layout composition over creating a new component.
- Do not create a new section, component, chart, or custom UI pattern unless John specifically approves it.

## New Build Approval

If a new design element appears necessary, stop and ask for approval before building it.

The approval request should explain:

- What existing components or sections were checked.
- Why the existing library does not solve the need.
- Whether the new item should become a component, section, or chart.
- Where the new reusable item will live.
- Which pages or tools are expected to reuse it.

Do not treat one-off convenience as enough reason to create new structure.

## Library Placement

Anything custom-built must be added to the appropriate reusable library.

- Reusable page sections belong in `src/components/sections/`.
- Reusable UI primitives belong in `src/components/ui/`.
- Reusable internal data visualizations or tool-specific displays belong in `src/components/internal/` unless a more specific chart library exists.
- Page-specific content belongs in the page or content model, not inside reusable components.
- Avoid page-specific wrapper components unless John explicitly approves them.

## ShadCN Rules

- Use ShadCN components and ShadCN-style primitives as the default building blocks.
- Do not introduce another UI component library unless John specifically approves it.
- When importing or adapting a ShadCN block, align it with this project's spacing, typography, and component patterns.
- Keep ShadCN primitives source-controlled in the codebase so they can be reviewed and customized.
- Prefer Radix-backed ShadCN behavior for menus, dialogs, collapsibles, tabs, commands, tooltips, and sidebars.

## Typography Rules

Use the global typography utility classes in `src/app/globals.css` for public website section-level text:

- `section-label` / `section-label-light`
- `section-heading`
- `section-description` / `section-description-light`
- `card-title`
- `card-description`
- `feature-text`

Use the `-light` variants on primary-background sections. Do not create one-off inline typography systems for standard website sections.

Internal tools may use tighter app-style typography when the surrounding application shell already defines that pattern.

## Section Design Rules

- One reusable section component per section type.
- Section components receive content through props or page content models.
- Every website section component should support background variation through a prop or established local pattern.
- Adjacent public website sections should be visually separated through background, spacing, or layout contrast.
- Do not put full page sections inside decorative cards.
- Do not nest cards inside cards unless the inner card is a repeated item or a true framed control.
- Keep text sized appropriately for its container; hero-scale type belongs only in true hero areas.

## Chart And Table Rules

- Use existing chart components before introducing a new visualization.
- Use the ShadCN table primitive for data tables.
- Filters should use established combobox, select, checkbox, or dropdown primitives.
- Controls should be complete enough for real use, not visual placeholders.
- Any new chart pattern must be added to the reusable internal/chart library and documented with its expected data shape.

## Acceptance Checklist

Before calling design work complete, verify:

- Existing components, sections, and charts were checked first.
- No new reusable item was created without John approving it.
- Any custom-built item was added to the component, section, or chart library.
- ShadCN primitives were used for common UI controls.
- No new UI library was introduced.
- Page-specific content stays in the page or content model.
- Typography follows the project conventions.
- Layout spacing, text sizing, and responsive behavior look intentional.
- Build passes.

## Examples

Good:

- Reuse the existing CTA section and pass new copy through props.
- Use the ShadCN table primitive for the keyword data table.
- Ask for approval before creating a new testimonial carousel section.
- Add a custom keyword visualization to `src/components/internal/` so it can be reused.

Avoid:

- Creating `CosmeticsCTA.tsx` when the existing CTA section can handle the content.
- Hand-building a dropdown when a ShadCN dropdown or combobox exists.
- Creating a custom chart inside a page file with no reusable component.
- Adding a new section because it is faster than checking the existing library.

## Changelog

- 2026-04-30: Refocused this file entirely on website design, reuse-first rules, approval before new components, and reusable library placement.
- 2026-04-30: Added metadata, purpose, when-to-use guidance, shadcn rules, acceptance checklist, examples, and changelog.
