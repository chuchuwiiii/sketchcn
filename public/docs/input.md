# Input

A hand-drawn Base UI input styled with shadcn conventions.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/input.json
```

## Usage

```tsx
import { Input } from "@/components/ui/input";

export function SearchField() {
  return <Input placeholder="Sketch something" />;
}
```

## Props

Takes every Base UI `Input` prop, which covers the native input attributes: `type`, `value`, `defaultValue`, `onValueChange`, `placeholder`, `disabled`, `required`, `aria-invalid`.

## States

- Focus draws the outline in the ring colour.
- `aria-invalid` draws it in the destructive colour.
- `disabled` drops the opacity and blocks pointer events.

## Examples

```tsx
<Input type="email" placeholder="you@example.com" aria-invalid />

<Input type="file" />
```

## Notes

- `type="file"` gets its own sketch outline drawn over the file-selector button, measured from the real button box, and the outline boils on hover.

## Animation

The file-selector outline boils while the field is hovered, using the `sketch-dash-boil` keyframe from `sketch.css`.

```tsx
// on the svg drawn over the file-selector button
"group-hover/input:[--sketch-dash:6_4] group-hover/input:[--sketch-dash-animation:sketch-dash-boil_1s_steps(2)_infinite]"
```

```tsx
<Input type="file" className="[--sketch-dash-animation:none]" />
```
