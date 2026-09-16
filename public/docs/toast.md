# Toast

A hand-drawn Base UI toast styled with shadcn conventions. Toasts stack from the bottom right, expand on hover, and can be swiped away.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/toast.json
```

## Usage

Render `<Toaster />` once near the root of your app. It portals its own viewport, so no other wiring is needed.

```tsx
import { Toaster } from "@/components/ui/toast";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}
```

Then call `toast` from anywhere.

```tsx
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function SaveButton() {
  return (
    <Button
      onClick={() =>
        toast.add({
          type: "success",
          title: "Sketch saved",
          description: "Everyone on the board can see it now.",
        })
      }
    >
      Save sketch
    </Button>
  );
}
```

## Parts

| Part | Description |
| --- | --- |
| `Toaster` | Provider, portal, viewport and toast list in one. Mount it once. |
| `Toast` | A single outlined toast. |
| `ToastContent` | Row holding the icon, text and controls. |
| `ToastTitle` | Accessible name, filled from `title`. |
| `ToastDescription` | Supporting text, filled from `description`. |
| `ToastAction` | Action button, rendered from `actionProps`. Defaults to an outline button. |
| `ToastClose` | Dismiss button. Defaults to a ghost icon button. |
| `ToastProvider` | Provider only, if you compose the pieces yourself. |
| `ToastPortal` | Portal only. |
| `ToastViewport` | Fixed bottom-right stack. |

## Manager

| Export | Description |
| --- | --- |
| `toast` | The default manager. `toast.add`, `toast.update`, `toast.close`, `toast.promise`. |
| `useToastManager` | Hook to read `toasts` and call the same methods inside a component. |
| `createToastManager` | Creates a separate manager, passed to `<Toaster toastManager={...} />`. |

## Options

Options passed to `toast.add`.

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `ReactNode` | — | Headline text. |
| `description` | `ReactNode` | — | Supporting text. |
| `type` | `"success" \| "error" \| "warning" \| "info" \| "loading"` | — | Picks the leading icon and tint. Omit for a plain toast. |
| `timeout` | `number` | `5000` | Milliseconds before auto dismiss. `0` keeps it until dismissed. |
| `priority` | `"low" \| "high"` | `"low"` | `"high"` announces the toast assertively to screen readers. |
| `actionProps` | `object` | — | Props for `ToastAction`, such as `children` and `onClick`. |
| `data` | `{ variant?: PaperVariant }` | — | `variant` draws a paper texture behind the toast. |

`PaperVariant` is `"default" | "polkadots" | "hexagons" | "graph" | "plus" | "filled-dots"`.

## Toaster props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `timeout` | `number` | `5000` | Default dismiss delay for every toast. |
| `limit` | `number` | `3` | Toasts shown at once. Older ones get `data-limited` and fade out. |
| `toastManager` | `ToastManager` | `toast` | Swap in a manager made with `createToastManager`. |

## Examples

Undo an action:

```tsx
toast.add({
  title: "Sketch deleted",
  description: "It moves to the bin for 30 days.",
  actionProps: { children: "Undo", onClick: restoreSketch },
});
```

Paper texture:

```tsx
toast.add({
  type: "warning",
  title: "Running low on space",
  description: "You have used 92% of your workspace.",
  data: { variant: "plus" },
});
```

Promise, which swaps the loading toast for the result:

```tsx
toast.promise(exportSketch(), {
  loading: "Exporting sketch",
  success: "Export ready",
  error: "Export failed",
});
```

Stays until dismissed:

```tsx
toast.add({
  type: "warning",
  title: "You are offline",
  description: "Changes are queued until the connection is back.",
  timeout: 0,
  priority: "high",
});
```

## Notes

- The registry item and route are named `toast`; `Toaster` is the component you mount.
- Hovering a toast wiggles its icon, unless the user prefers reduced motion.
- A `loading` toast never times out on its own; close or update it yourself, or use `toast.promise`.
