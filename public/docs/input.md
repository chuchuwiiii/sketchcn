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
