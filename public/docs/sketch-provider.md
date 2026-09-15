# Sketch Provider

Every Sketchcn component draws its outline with RoughJS. `SketchProvider` holds the shared seed, and the `useSketchOutline` and `useSketchBg` hooks turn any element into a hand-drawn one. Adding any component pulls this in as a dependency.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/sketch-provider.json
```

## Usage

Wrap your app once, at the root. The hooks throw when there is no provider above them, so a missing wrapper fails loudly instead of rendering unstyled boxes.

```tsx
import { SketchProvider } from "@/components/ui/sketch-provider";

export function App({ children }: { children: React.ReactNode }) {
  return <SketchProvider>{children}</SketchProvider>;
}
```

Everything below it draws through the same seed, so components pick up the hand-drawn outline without any extra wiring.

```tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SketchProvider } from "@/components/ui/sketch-provider";
import { Switch } from "@/components/ui/switch";

export function SignUpForm() {
  return (
    <SketchProvider seed={42}>
      <Input placeholder="you@example.com" />
      <Switch defaultChecked />
      <Button>Sign up</Button>
    </SketchProvider>
  );
}
```

## SketchProvider props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `children` | `ReactNode` | — | The tree that can read sketch settings. |
| `seed` | `number` | `20260828` | Base seed for the wobble. Every hook mixes it with its own id, so one seed change reshuffles the whole page deterministically. |

Every other drawing option comes from `--sketch-*` CSS variables.

## useSketchOutline

Returns a ref and a style for an absolutely positioned svg that traces the parent element. The parent needs `position: relative` and `isolate` so the svg can sit behind the content.

```tsx
import { useSketchOutline } from "@/components/ui/sketch-provider";

export function Panel({ children }: { children: React.ReactNode }) {
  const sketchOutline = useSketchOutline();

  return (
    <div className="relative isolate rounded-lg px-4 py-3">
      {children}
      <svg
        aria-hidden="true"
        data-sketch-outline
        className="-z-10"
        ref={sketchOutline.ref}
        style={sketchOutline.style}
      />
    </div>
  );
}
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `shape` | `"rectangle" \| "underline"` | `"rectangle"` | Rectangle follows the element border radius; underline draws a single stroke along the bottom edge. |
| `id` | `string` | `useId()` | Seeds the wobble. Pass a stable id when the geometry must not change. |
| `opacity` | `number` | — | Applied to the returned svg style. |
| `...roughOptions` | `Partial<Options>` | — | Any RoughJS option except `seed`: roughness, bowing, stroke, strokeWidth, strokeLineDash, fill, fillStyle. |

The outline is measured from the padding box and redrawn whenever the element resizes or its class or style attribute changes.

## useSketchBg

`useSketchOutline` drawn from the `--sketch-bg-*` variables, giving a hatched fill and no stroke. Anything it does not define falls back to the shared `--sketch-*` value.

```tsx
const sketchBg = useSketchBg({ hachureGap: 6 });
```

| Option | Default | CSS variable |
| --- | --- | --- |
| `fill` | `currentColor` | `--sketch-bg-fill` |
| `fillStyle` | `hachure` | `--sketch-bg-fill-style` |
| `fillWeight` | `0.4` | `--sketch-bg-fill-weight` |
| `hachureGap` | `4` | `--sketch-bg-hachure-gap` |
| `hachureAngle` | `-45` | `--sketch-bg-hachure-angle` |
| `stroke` | `transparent` | `--sketch-bg-stroke` |
| `opacity` | `0.5` | `--sketch-bg-opacity` |

## CSS variables

`sketch.css` ships defaults on `:root`, and any element can override them for its own outline. They cascade like any other custom property, so Tailwind arbitrary properties, variants and dark mode all work.

```tsx
<div className="[--sketch-roughness:2.6] [--sketch-bowing:2.4]">
  <Button>Rougher button</Button>
</div>
```

| Variable | Default | Description |
| --- | --- | --- |
| `--sketch-seed` | `"20260828"` | Base seed, overriding the provider for the subtree. Quote it, because CSS minifiers round bare numbers to six significant digits. |
| `--sketch-roughness` | `1.1` | How far strokes stray from the ideal path. |
| `--sketch-bowing` | `1.4` | How much straight lines bend. |
| `--sketch-stroke` | `currentColor` | Stroke colour of the outline. |
| `--sketch-stroke-width` | `1.6` | Stroke width in pixels. |
| `--sketch-disable-multi-stroke` | `true` | Draw one pass instead of the doubled pencil pass. |
| `--sketch-preserve-vertices` | `true` | Keep corners anchored to the layout box. |
| `--sketch-fill` | — | Fill colour, also used by the CSS fill transition. |
| `--sketch-fill-style` | `solid` | RoughJS fill style, such as solid, hachure or zigzag. |
| `--sketch-fill-weight` | — | Thickness of each fill stroke for hatched styles. |
| `--sketch-hachure-gap` | — | Distance between hachure strokes. |
| `--sketch-hachure-angle` | — | Angle of the hachure lines in degrees. |
| `--sketch-dash` | `none` | CSS stroke-dasharray on the outline. |
| `--sketch-dash-animation` | `none` | CSS animation shorthand, used by the boil and alternate keyframes. |
| `--sketch-fill-opacity` | `1` | CSS fill-opacity on the drawn path, transitioned over 150ms. |

## Option precedence

Lowest to highest: CSS variables read from the element, then the options passed to the hook. The seed is the exception — it comes from `--sketch-seed` when the element sets one, otherwise from the provider, and is always mixed with the hook id.
