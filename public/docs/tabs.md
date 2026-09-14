# Tabs

Hand-drawn Base UI tabs styled with shadcn conventions, in a filled or an underlined style.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/tabs.json
```

## Usage

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PenTabs() {
  return (
    <Tabs defaultValue="sketch">
      <TabsList>
        <TabsTrigger value="sketch">Sketch</TabsTrigger>
        <TabsTrigger value="ink">Ink</TabsTrigger>
      </TabsList>
      <TabsContent value="sketch">Rough pencil pass.</TabsContent>
      <TabsContent value="ink">Final inked pass.</TabsContent>
    </Tabs>
  );
}
```

## Parts and props

| Part | Prop | Type | Default | Description |
| --- | --- | --- | --- | --- |
| `Tabs` | `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Vertical stacks the list down the side. |
| `Tabs` | `value` / `defaultValue` | `string` | — | Selected tab, controlled or not. |
| `TabsList` | `variant` | `"default" \| "line"` | `"default"` | Default fills the list background; line drops it and underlines the active tab. |
| `TabsTrigger` | `value` | `string` | — | Matches the panel to show. |
| `TabsContent` | `value` | `string` | — | Panel body. |

All other props are forwarded to the matching Base UI `Tabs` parts. The component also exports `tabsListVariants`.

## Examples

```tsx
<Tabs defaultValue="preview">
  <TabsList variant="line">
    <TabsTrigger value="preview">Preview</TabsTrigger>
    <TabsTrigger value="code">Code</TabsTrigger>
  </TabsList>
</Tabs>
```

## Notes

- The active indicator is drawn with RoughJS and follows the selected trigger as it moves.
