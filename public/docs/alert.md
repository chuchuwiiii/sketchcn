# Alert

A hand-drawn alert callout styled with shadcn conventions. Like Card, it can carry a paper texture.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/alert.json
```

## Usage

```tsx
import { InfoCircle } from "@boxicons/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function FreshInk() {
  return (
    <Alert>
      <InfoCircle />
      <AlertTitle>Fresh ink</AlertTitle>
      <AlertDescription>No two outlines match.</AlertDescription>
    </Alert>
  );
}
```

An `svg` as the first child becomes the leading icon and the grid switches to two columns automatically.

## Parts

| Part | Description |
| --- | --- |
| `Alert` | The outlined container with `role="alert"`. |
| `AlertTitle` | Heading line. |
| `AlertDescription` | Supporting text. |
| `AlertAction` | Pinned to the right edge, for a dismiss or undo control. |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"default" \| "destructive"` | `"default"` | Destructive tints the border, text and description. |
| `paper` | `"default" \| "polkadots" \| "hexagons" \| "graph" \| "plus" \| "filled-dots"` | `"default"` | Paper texture drawn behind the content. |

## Examples

```tsx
<Alert variant="destructive">
  <ErrorCircle />
  <AlertTitle>Could not save</AlertTitle>
  <AlertDescription>Check your connection and try again.</AlertDescription>
  <AlertAction>
    <Button variant="ghost" size="sm">Retry</Button>
  </AlertAction>
</Alert>
```

## Notes

- Hovering the alert wiggles its icon, unless the user prefers reduced motion.
