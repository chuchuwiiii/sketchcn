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

## Animation

Skeleton is a `data-sketch-reveal` wrapper around a `data-sketch-bg` svg. `sketch.css` masks the hachure and wipes it on a 2400ms `sketch-hatch-reveal` loop; there is no JavaScript timer.

```css
[data-sketch-reveal] [data-sketch-bg] {
  --sketch-bg-reveal-mask: linear-gradient(
    calc((180 + var(--sketch-bg-hachure-angle)) * 1deg),
    transparent var(--sketch-bg-reveal-trail),
    #000 var(--sketch-bg-reveal-trail),
    #000 var(--sketch-bg-reveal-lead),
    transparent var(--sketch-bg-reveal-lead)
  );
  mask-image: var(--sketch-bg-reveal-mask);
  -webkit-mask-image: var(--sketch-bg-reveal-mask);
  animation: sketch-hatch-reveal 2400ms linear infinite;
}
```

The mask angle is derived from `--sketch-bg-hachure-angle`, so rotating the hatch rotates the wipe with it. Under `prefers-reduced-motion` the mask and the animation are both dropped, leaving a static hatched block.
