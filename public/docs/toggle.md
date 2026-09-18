# Toggle

A pressable Base UI toggle styled with shadcn conventions. Use it for a single on/off control that lives in a toolbar, not in a form.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/toggle.json
```

## Usage

```tsx
import { Bold } from "@boxicons/react";
import { Toggle } from "@/components/ui/toggle";

export function BoldToggle() {
  return (
    <Toggle aria-label="Bold" defaultPressed>
      <Bold />
      Bold
    </Toggle>
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"default" \| "outline"` | `"default"` | Outline draws a sketch border even when unpressed. |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Height, padding and icon scale. |
| `pressed` | `boolean` | — | Controlled pressed state. |
| `defaultPressed` | `boolean` | `false` | Uncontrolled initial state. |
| `onPressedChange` | `(pressed: boolean) => void` | — | Fires on every change. |

All other props are forwarded to the Base UI `Toggle` primitive. The component also exports `toggleVariants`, `TOGGLE_VARIANTS` and `TOGGLE_SIZES`.

## Notes

- Icon-only toggles need an `aria-label`.
- For a form field that submits a value, use Switch instead.

## Animation

A pressed toggle dashes its outline and alternates the dashes with the `sketch-dash-alternate` keyframe from `sketch.css`, so the border reads as redrawn by hand.

```tsx
"data-pressed:[--sketch-dash:5_5] data-pressed:[--sketch-dash-animation:sketch-dash-alternate_1s_steps(2)_infinite]"
```

Hovering raises the fill instead, through `--sketch-fill-opacity`.

```tsx
"hover:[--sketch-fill-opacity:0.08] data-pressed:[--sketch-fill-opacity:0.14]"
```

```tsx
<Toggle className="data-pressed:[--sketch-dash-animation:none]">Quiet</Toggle>
```
