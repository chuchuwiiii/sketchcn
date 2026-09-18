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

## Component Docs (`/components/<slug>`, `/md`, `llms.txt`)

`src/docs/<slug>.mdx` is the single source for a component's page, its markdown at `/components/<slug>/md`, and its `llms.txt` entry. Every component change must ship with its doc update in the same change set.

- The `<slug>` must match the component's entry in `src/components/component-showcases.ts`; a doc without a matching showcase entry is silently dropped everywhere.
- `<Preview />` renders the showcase card and `<Styles />` the component's `sketch.css` rules; both are supplied by the route, so they take no props.
- A ```` ```bash ```` fence holding a registry `shadcn add` command renders as the install tabs. Write the plain command; do not reach for the component.
- Live examples live in `src/components/demos/<slug>-demos.tsx` as small `Demo`-wrapped components, imported at the top of the `.mdx` and paired with the fence that shows their source.
- The markdown served to LLMs is the `.mdx` with its imports and whole-line JSX stripped, so keep prose and fences meaningful on their own.
- `llms.txt` lists the showcase `title` and `description`, so keep those accurate.
- Removing a component means removing its showcase entry, its `src/docs/<slug>.mdx`, and its demos file.

### Fences

Only `TSX`, `bash`, and `css` are available; `src/lib/highlighter.ts` bundles those grammars up front, and Shiki throws on any other language, which fails the whole page.

- Tag every React snippet ```` ```TSX ````, uppercase. The language is lowercased before it reaches Shiki, so casing is presentation only.
- Shell commands are ```` ```bash ````, stylesheet rules are ```` ```css ````, both lowercase.
- Fences are rendered by `CodeBlock`, so each one gets its own copy button and sketched outline. Keep a snippet to one fence rather than splitting it.

### Authoring an `.mdx`

- Imports go in a preamble above the `# Title`, with relative paths — the `@/` alias does not resolve from `.mdx`.
- Component tags used as blocks (`<Preview />`, a demo) sit alone on their own line, which is also how the markdown serializer finds and removes them.
- Order each doc as title, intro, `<Preview />`, `## Installation`, `## Styles` with `<Styles />`, then usage, props, `## Examples`, and `## Animation`.
- Document only what sketchcn adds; see **Props** below.
- Every `##` section renders as a card: `remarkDocSections` in `src/lib/mdx/remark-doc-sections.ts` wraps everything between a `##` heading and the next one in a `<DocSection>`, leaving the heading above the card. Let the plugin do it rather than writing a card in the `.mdx`.

### Props

A doc covers sketchcn's own surface only. A prop that exists in shadcn or in the underlying Base UI primitive is that project's to document, even when our source re-declares it or re-exports it.

- **Write about** the paper variants (`paper` on Alert, `variant` on Card and Tooltip), the size and variant scales whose values are ours (`size` on Button, Card, Avatar, Switch, Toggle, NativeSelect; `variant` on Button and Toggle), props with no upstream counterpart (Separator `variant` and its `children` label, TabsList `variant`, TooltipProvider `delay`, SketchProvider `seed`, the `data.variant` toast option) and the `--sketch-*` or component variables that drive the drawing.
- **Leave out** pass-through props (`render`, `disabled`, `open`, `checked`, `value`, native input and select attributes), upstream props we merely re-declare or give a new default (Sidebar `open`/`side`/`collapsible`, Separator `orientation`, Alert `variant`, Tabs `orientation`, Tooltip positioning) and whole upstream subsystems (the Base UI toast manager, `useSidebar`). The test is the value set, not the prop name: Button `variant` stays because the variants are ours, Alert `variant` goes because it is shadcn's `default`/`destructive` pair.
- Close a table with one line naming the primitive that owns the rest, rather than listing its props. If our only change is a default, say so in prose — `Positioning stays with Base UI. Only the defaults differ: side is "top", sideOffset is 8.`
- A component with nothing of its own says so in one line (`Input adds no props of its own.`) or documents its variables instead, the way Sidebar documents `--sidebar-width`.
- Parts tables stay: they describe what each part renders, which is our anatomy, not an upstream prop list.
- A `## Parts` section is always a table, never a prose list of names — one row per exported part, in composition order, with a one-line description of what it renders:

  ```
  | Part | Description |
  | --- | --- |
  | `Dialog` | Root that owns the open state. |
  | `DialogContent` | The centred, outlined popup. |
  ```

## Code Style

Write TypeScript and keep components small and typed. Use tabs and double quotes, matching Biome. Prefer clear names over comments; add comments only for non-obvious constraints. Do not commit or push without explicit instruction.

## Pull Requests

Use concise conventional commits such as `feat: add button registry item`. Describe user-facing changes, list verification performed, and include screenshots for visual UI work.
