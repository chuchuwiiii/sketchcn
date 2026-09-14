# Switch

A hand-drawn Base UI switch styled with shadcn conventions. Use it for a setting that applies immediately.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/switch.json
```

## Usage

```tsx
import { Switch } from "@/components/ui/switch";

export function SketchMode() {
  return <Switch aria-label="Sketch mode" defaultChecked />;
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "default"` | `"default"` | Track and thumb size. |
| `checked` | `boolean` | — | Controlled state. |
| `defaultChecked` | `boolean` | `false` | Uncontrolled initial state. |
| `onCheckedChange` | `(checked: boolean) => void` | — | Fires on every change. |
| `disabled` | `boolean` | `false` | Disables the switch. |

All other props are forwarded to the Base UI `Switch.Root` primitive. The component also exports `switchVariants` and `SWITCH_SIZES`.

## Examples

```tsx
<label className="flex items-center gap-2">
  <Switch size="sm" name="notifications" />
  Email me on new releases
</label>
```

## Notes

- Give every switch a label or an `aria-label`; the track alone has no accessible name.
