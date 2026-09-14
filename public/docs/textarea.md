# Textarea

A hand-drawn textarea styled with shadcn conventions.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/textarea.json
```

## Usage

```tsx
import { Textarea } from "@/components/ui/textarea";

export function NoteField() {
  return <Textarea placeholder="Describe the sketch" rows={4} />;
}
```

## Props

Takes every native `textarea` prop: `rows`, `value`, `defaultValue`, `onChange`, `placeholder`, `disabled`, `required`, `aria-invalid`.

## Notes

- The outline is redrawn as the element resizes, so a user-resizable textarea keeps a correct border.
- Focus and `aria-invalid` recolour the outline the same way Input does.
