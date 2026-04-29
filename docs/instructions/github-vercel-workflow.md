# GitHub And Vercel Workflow

## Default Workflow

- Make changes locally first.
- Run a local build before considering work complete.
- Preview locally before pushing.
- Do not push to GitHub unless explicitly asked.

## Recommended Change Loop

1. Make one small website change.
2. Run a local build.
3. Review the local site.
4. Ask for approval before pushing.
5. Push to GitHub only after approval.
6. Let Vercel deploy from GitHub.
7. Compare Vercel against the approved local version.

## Local Preview

- Prefer one stable local port during a work session.
- If the page looks stale, stop and restart the local server before changing code.
- Treat the local preview as the review copy until the user asks to publish.
