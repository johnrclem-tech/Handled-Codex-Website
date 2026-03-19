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
