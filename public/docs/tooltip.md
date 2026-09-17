# Tooltip

A hand-drawn Base UI tooltip styled with shadcn conventions. It portals its content, draws its own sketch outline, and can carry any paper texture.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/tooltip.json
```

## Usage

```tsx
import { Palette } from "@boxicons/react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function PaletteButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" size="icon" aria-label="Palette">
              <Palette />
            </Button>
          }
        />
        <TooltipContent>Change the palette</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
```

## Props

### TooltipProvider

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `delay` | `number` | `200` | Milliseconds to wait before a tooltip opens on hover. |

### Tooltip

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | — | Controlled open state. |
| `defaultOpen` | `boolean` | `false` | Uncontrolled initial state. |
| `onOpenChange` | `(open: boolean) => void` | — | Fires on every change. |

### TooltipTrigger

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `render` | `ReactElement` | — | Element the tooltip attaches to, such as a Button. |

### TooltipContent

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `side` | `"top" \| "right" \| "bottom" \| "left"` | `"top"` | Edge of the trigger the tooltip is drawn against. |
| `sideOffset` | `number` | `8` | Distance in pixels from the trigger. |
| `align` | `"start" \| "center" \| "end"` | `"center"` | Alignment along the chosen side. |
| `alignOffset` | `number` | `0` | Extra pixels applied to the alignment. |
| `variant` | `PaperVariant` | `"polkadots"` | Paper texture drawn behind the content. |

All other props are forwarded to the matching Base UI primitives.

## Examples

```tsx
<Tooltip>
  <TooltipTrigger render={<Button variant="outline">Layers</Button>} />
  <TooltipContent side="right" sideOffset={12}>
    Show the layer panel
  </TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger render={<Button variant="outline">Grid</Button>} />
  <TooltipContent variant="graph">Snap strokes to the grid</TooltipContent>
</Tooltip>
```

## Notes

- Mount `TooltipProvider` once near the root of the app so every tooltip shares one open delay.
- A tooltip only appears on hover and keyboard focus, so never put an action or essential text inside it.
- Icon-only triggers still need an `aria-label` on the button itself.
