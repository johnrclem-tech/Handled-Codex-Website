# Agent Instructions

Status: Active
Owner: John
Last updated: 2026-04-30
Version: 1.1

## Purpose

This is the first instruction file an AI coding agent should read before changing this project. It points the agent to the right detailed instruction set and defines the non-negotiable workflow rules for working in this repo.

## When To Use

Use this file before any project work, including:

- Website changes.
- Internal marketing tool changes.
- Google Ads instruction or asset work.
- GitHub, Vercel, build, or deployment workflow changes.
- Instruction file updates.

## Instruction Index

- Website design changes: `docs/instructions/website-build-rules.md`
- SEO work: `docs/instructions/seo.md`
- Landing page work: `docs/instructions/landing-pages.md`
- Google Ads work: `docs/instructions/google-ads.md`
- GitHub and Vercel workflow: `docs/instructions/github-vercel-workflow.md`

## Always

- Make changes locally first.
- Run a local build before considering work complete.
- Do not push to GitHub unless explicitly asked.
- Prefer existing components, patterns, and project structure.
- Keep instruction files clear enough that a future agent can follow them without conversation history.

## Acceptance Checklist

- The relevant detailed instruction file was read before changing code or content.
- Local changes were kept focused on the user's request.
- A build was run when code, route, component, or instruction-rendering behavior changed.
- GitHub was not pushed unless the user explicitly asked.
- The final response clearly stated what changed and whether anything was pushed.

## Examples

Good:

- Read `docs/instructions/website-build-rules.md` before changing visual design, components, sections, charts, or UI patterns.
- Read `docs/instructions/seo.md` before changing SEO strategy, metadata, schema, canonical behavior, or indexability.
- Read `docs/instructions/landing-pages.md` before planning paid-search landing pages, conversion flow, offers, or page-specific landing page structure.
- Read `docs/instructions/google-ads.md` before generating RSA assets.
- Read `docs/instructions/github-vercel-workflow.md` before pushing or explaining deployment steps.

Avoid:

- Making website UI changes without checking the shadcn and section rules.
- Pushing immediately after a local edit.
- Splitting project instructions across hidden or undocumented files.

## Changelog

- 2026-04-30: Added metadata, purpose, when-to-use guidance, acceptance checklist, examples, and changelog.
