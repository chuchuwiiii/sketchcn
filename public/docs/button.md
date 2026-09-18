# Button

A hand-drawn Base UI button styled with shadcn conventions. Every button draws its outline (and, for `secondary`, its fill) through RoughJS, so it needs a `SketchProvider` above it in the tree.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/button.json
```

## Usage

```tsx
import { Button } from "@/components/ui/button";

export function SaveAction() {
  return <Button onClick={save}>Save sketch</Button>;
}
```

## Variants

| Variant | When to use |
| --- | --- |
| `default` | Primary action. Filled sketch background. |
| `outline` | Secondary action on a plain surface. |
| `secondary` | Muted action, sketch-filled with the secondary color. |
| `ghost` | Low-emphasis action. Outline boils on hover. |
| `destructive` | Irreversible actions such as delete. |
| `link` | Inline text action. Draws a sketch underline instead of a box. |

## Sizes

Text sizes: `xs`, `sm`, `default`, `lg`.

Icon-only sizes: `icon-xs`, `icon-sm`, `icon`, `icon-lg`. Pass an `aria-label` when the button has no text.

```tsx
<Button size="icon-sm" aria-label="Edit">
  <Pencil />
</Button>
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"default" \| "outline" \| "secondary" \| "ghost" \| "destructive" \| "link"` | `"default"` | Visual style. |
| `size` | `"xs" \| "sm" \| "default" \| "lg" \| "icon-xs" \| "icon-sm" \| "icon" \| "icon-lg"` | `"default"` | Height, padding and icon scale. |
| `render` | `React.ReactElement` | — | Base UI render prop. Use it to render the button as a link or another element. |
| `disabled` | `boolean` | `false` | Disables the button and drops it to 50% opacity. |

All other props are forwarded to the Base UI `Button` primitive.

The component also exports `buttonVariants`, `BUTTON_VARIANTS`, `BUTTON_SIZES` and `ICON_BUTTON_SIZES` for building your own variant lists.

## Examples

### Form actions

```tsx
<div className="flex justify-end gap-2">
  <Button variant="ghost">Cancel</Button>
  <Button type="submit">
    <Plus />
    Save sketch
  </Button>
</div>
```

### Rendered as a link

```tsx
<Button variant="outline" render={<Link to="/docs" />}>
  Read the docs
  <ArrowRight />
</Button>
```

### Destructive confirmation

```tsx
<Button variant="destructive" size="sm" onClick={onDelete}>
  <Trash />
  Delete
</Button>
```

## Notes

- Icons are `size-4` by default and scale down automatically on `xs` and `sm`.
- A leading or trailing `<svg>` gets extra inline padding, so icon buttons stay optically balanced.
- Pressing a button nudges it down one pixel and wiggles its icon.

## Animation

Two keyframes from `sketch.css`, both applied as Tailwind arbitrary animations.

```tsx
// Ghost variant: the dashed outline boils while hovered
"[--sketch-dash:6_4] hover:[--sketch-dash-animation:sketch-dash-boil_1s_steps(2)_infinite]"

// Every variant: the icon wiggles while the button is held
"active:[&>svg:not([data-sketch-outline]):not([data-sketch-bg])]:animate-[sketch-icon-wiggle_180ms_ease-in-out_infinite]"
```

Drop either by overriding the variable or the animation on the instance.

```tsx
<Button variant="ghost" className="hover:[--sketch-dash-animation:none]">
  Still outline
</Button>
```
