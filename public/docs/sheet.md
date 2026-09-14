# Sheet

A hand-drawn Base UI sheet styled with shadcn conventions. Same API as Dialog, but it slides in from an edge.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/sheet.json
```

## Usage

```tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function FiltersSheet() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Filters</Button>} />
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>Narrow the sketch list.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
```

## Parts

`Sheet`, `SheetTrigger`, `SheetContent`, `SheetHeader`, `SheetTitle`, `SheetDescription`, `SheetFooter`, `SheetClose`, `SheetOverlay`, `SheetPortal`.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"right"` | Edge the sheet slides in from. |
| `showCloseButton` | `boolean` | `true` | Hides the corner close button when false. |

Both live on `SheetContent`. All other props are forwarded to the matching Base UI parts.

## Notes

- Left and right sheets take their width from the content; top and bottom take their height.
- Like Dialog, `SheetContent` renders its own overlay and portal.
