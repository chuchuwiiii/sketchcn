# Skeleton

A hand-drawn loading placeholder that animates its hachure shading, styled with shadcn conventions.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/skeleton.json
```

## Usage

```tsx
import { Skeleton } from "@/components/ui/skeleton";

export function LoadingLines() {
  return (
    <div className="flex w-44 flex-col gap-2">
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  );
}
```

## Props

Takes every `div` prop. Size it with utility classes; there is no size variant.

## Notes

- It draws both a faint outline and a hachure fill, and wipes the shading in a loop.
- The reveal edge runs parallel to the hachure strokes, so overriding `--sketch-bg-hachure-angle` rotates both together.

```tsx
<div className="[--sketch-bg-hachure-angle:0]">
  <Skeleton className="h-24 w-full" />
</div>
```

- It renders `aria-hidden`, so pair it with your own live region when the wait is long.
