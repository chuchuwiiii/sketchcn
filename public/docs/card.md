# Card

A hand-drawn card container styled with shadcn conventions. The card body can carry a paper texture behind its content.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/card.json
```

## Usage

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SketchCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sketch card</CardTitle>
        <CardDescription>Rough edges on purpose.</CardDescription>
      </CardHeader>
      <CardContent>Every component ships as plain source you own.</CardContent>
    </Card>
  );
}
```

## Parts

| Part | Description |
| --- | --- |
| `Card` | The outlined container. |
| `CardHeader` | Title, description and action row. |
| `CardTitle` | Heading text, scales down at `size="sm"`. |
| `CardDescription` | Muted supporting text. |
| `CardAction` | Pinned to the top right of the header. |
| `CardContent` | Main body. |
| `CardFooter` | Bordered footer strip with a muted background. |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"default" \| "sm"` | `"default"` | Tightens the `--card-spacing` and the title size. |
| `variant` | `"default" \| "polkadots" \| "hexagons" \| "graph" \| "plus" \| "filled-dots"` | `"default"` | Paper texture drawn behind the content. |

All other props are forwarded to the underlying `div`.

## Paper variants

```tsx
<Card variant="graph">
  <CardHeader>
    <CardTitle>Graph paper</CardTitle>
    <CardDescription>Engineering graph paper.</CardDescription>
  </CardHeader>
</Card>
```

| Variant | Look |
| --- | --- |
| `default` | Plain card surface. |
| `polkadots` | Bullet-journal dot paper. |
| `hexagons` | Hex grid. |
| `graph` | Engineering graph paper. |
| `plus` | Scattered plus-sign paper. |
| `filled-dots` | Fine speckled dot paper. |

## Notes

- Spacing is driven by `--card-spacing`, so overriding it on the card rescales the padding of every part.
- A first-child or last-child `img` gets its corners rounded to match the card.
