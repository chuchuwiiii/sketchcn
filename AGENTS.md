# Repository Guidelines

## Project Structure

- `src/routes/` contains TanStack Start file-based routes; `index.tsx` is the landing page.
- `src/styles.css` holds global Tailwind imports and shared styling.
- `registry/` contains installable shadcn registry source files, declared by `registry.json`.

## Development Commands

- Always use Bun for package management and project commands.
- `bun run dev` starts the local development server on port 3005.
- `bun run build` produces the production Nitro build.
- `bun run check` runs Biome formatting and lint checks.

## Local Ports

- shadcn uses port 4321.
- The app uses port 3005.

## Components and Naming

Use the regular shadcn component name and filename without project-specific prefixes or renames. For example, the button registry item and source must be named `button` and `button.tsx`, never `sketch-button.tsx`, `rough-button.tsx`, or another variant.

Registry components should use Base UI primitives, Tailwind utility classes, `class-variance-authority` for variants, and `cn` for class merging. Use `@boxicons/react` for icons and `@fontsource/patrick-hand` as the default font.

## Component Docs (`/md` and `llms.txt`)

Every component change must ship with its docs update in the same change set.

- Add or update `public/docs/<slug>.md` whenever a component is added, renamed, or has its props, variants, or usage changed. This file is the source served at `/components/<slug>/md`.
- The `<slug>` must match the component's entry in `src/components/component-showcases.ts`; a doc without a matching showcase entry is silently dropped from `/md` and `llms.txt`.
- `llms.txt` is generated from those docs, so keep the showcase `title` and `description` accurate — they are the text listed there.
- Removing a component means removing both its showcase entry and its `public/docs/<slug>.md`.

## Code Style

Write TypeScript and keep components small and typed. Use tabs and double quotes, matching Biome. Prefer clear names over comments; add comments only for non-obvious constraints. Do not commit or push without explicit instruction.

## Pull Requests

Use concise conventional commits such as `feat: add button registry item`. Describe user-facing changes, list verification performed, and include screenshots for visual UI work.
