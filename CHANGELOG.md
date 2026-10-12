# Changelog

Every notable change to sketchcn, newest first.

## 0.2.0 — 2026-10-12

### Added

- Icons page recommending Matita and Boxicons, with install commands and links to other icon libraries.
- Every docs section has an anchor link with a copy button.

### Changed

- `@matita/icons` replaces `@boxicons/react` as the icon library in Button, Checkbox, Dialog, Native Select, Sheet, Sidebar and Toast. Re-add these components to pick up the new dependency.
- Tabs draw the active trigger with `--sketch-fill` instead of a background colour.
- Pressed outline Toggle reuses `sketch-dash-boil`; the `sketch-dash-alternate` keyframes are removed from `sketch.css`.

### Fixed

- Tabs no longer show a ring on the active trigger.
- Docs pages are easier to read, with the busy page background removed.

## 0.1.0 — 2026-10-10

### Added

- `SketchProvider` with `useSketchOutline` and `useSketchBg` hooks, driven by `--sketch-*` CSS variables.
- Components: Alert, Avatar, Button, Card, Checkbox, Dialog, Input, Native Select, Separator, Sheet, Sidebar, Skeleton, Switch, Tabs, Textarea, Toast, Toggle and Tooltip.
- `sketch.css` with paper textures and outline animations.
