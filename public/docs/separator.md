# Separator

A hand-drawn Base UI separator styled with shadcn conventions. It can run horizontally or vertically, and can carry a label in the middle.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/separator.json
```

## Usage

```tsx
import { Separator } from "@/components/ui/separator";

<Separator />
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direction of the drawn line. |
| `variant` | `"solid" \| "dashed" \| "double"` | `"solid"` | Stroke style. Double draws two parallel lines. |
| `children` | `ReactNode` | — | Label rendered in the middle, with a line drawn on each side. |

The component also exports `SEPARATOR_VARIANTS` for building your own variant lists.

## Examples

```tsx
<Separator variant="dashed" />

<Separator>or</Separator>

<div className="flex h-8 items-center gap-3">
  <span>Draft</span>
  <Separator orientation="vertical" />
  <span>Published</span>
</div>
```

## Notes

- A vertical separator needs a height from its parent, such as a flex row with a fixed height.
