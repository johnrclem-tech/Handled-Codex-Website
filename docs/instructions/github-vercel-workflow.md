# GitHub And Vercel Workflow

Status: Active
Owner: John
Last updated: 2026-04-30
Version: 1.1

## Purpose

Use this instruction set for the local development, GitHub, and Vercel publishing workflow. The goal is to keep local previews, GitHub commits, and Vercel deployments predictable and easy to verify.

## When To Use

Use this when:

- Starting or restarting the local dev server.
- Explaining why local and Vercel versions differ.
- Preparing to commit or push.
- Publishing approved work to GitHub.
- Verifying a Vercel deployment.
- Cleaning up confusion around ports, branches, or stale builds.

## Default Workflow

- Make changes locally first.
- Run a local build before considering work complete.
- Preview locally before pushing.
- Do not push to GitHub unless explicitly asked.
- Prefer one stable local port during a work session.

## Recommended Change Loop

1. Make one small website change.
2. Run a local build.
3. Review the local site.
4. Ask for approval before pushing.
5. Push to GitHub only after approval.
6. Let Vercel deploy from GitHub.
7. Compare Vercel against the approved local version.

## Local Preview Rules

- Use one stable local port when possible.
- If the page looks stale, stop and restart the local server before changing code.
- Treat the local preview as the review copy until the user asks to publish.
- If Codex cannot start the local server because of sandbox port permissions, give the user the exact Terminal command to run.

## GitHub Rules

- Check `git status` before staging or committing.
- Do not stage unrelated changes silently.
- Use clear commit messages.
- Push only when the user explicitly asks.
- If pushing from Codex fails because of network or auth, commit locally and ask the user to run the exact push command in Terminal.

## Vercel Rules

- Vercel should deploy from GitHub after the approved branch is pushed.
- If Vercel does not match local, first confirm the latest commit reached GitHub.
- Then confirm Vercel deployed that commit.
- Do not assume Vercel is wrong until branch, commit, and deployment status are checked.

## Acceptance Checklist

- Local repo status was checked.
- Build passed before publishing.
- Local preview was used when possible.
- User explicitly requested any push.
- The pushed branch and commit were identified.
- Vercel verification was framed as comparing deployment commit to the approved local version.
- Any local server or port limitation was explained clearly.

## Examples

Good:

- "Build passed. Nothing was pushed. Review locally at port 3007."
- "You asked to push, so I committed and pushed `main`."
- "Codex cannot open the port from the sandbox, so run this exact command in Terminal."

Avoid:

- Pushing after every tiny local change without approval.
- Switching ports repeatedly without explaining why.
- Debugging Vercel before confirming GitHub has the expected commit.

## Changelog

- 2026-04-30: Added metadata, purpose, when-to-use guidance, GitHub and Vercel rules, acceptance checklist, examples, and changelog.
