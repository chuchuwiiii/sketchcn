# Dialog

A hand-drawn Base UI dialog styled with shadcn conventions. It renders in a portal, traps focus, and closes on outside click or Escape.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/dialog.json
```

## Usage

```tsx
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DeleteDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="destructive">Delete</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete this sketch?</DialogTitle>
          <DialogDescription>This cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button variant="ghost">Cancel</Button>} />
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## Parts

| Part | Description |
| --- | --- |
| `Dialog` | Root. Takes `open`, `defaultOpen` and `onOpenChange`. |
| `DialogTrigger` | Opens the dialog. Use `render` to reuse your own button. |
| `DialogContent` | The centred, outlined popup. |
| `DialogHeader` | Title and description block. |
| `DialogTitle` | Accessible name of the dialog. |
| `DialogDescription` | Accessible description. |
| `DialogFooter` | Action row, stacked on small screens. |
| `DialogClose` | Closes the dialog. |
| `DialogOverlay` | The backdrop, rendered for you by `DialogContent`. |
| `DialogPortal` | The portal, also rendered for you. |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `showCloseButton` | `boolean` | `true` | On `DialogContent`. Hides the corner close button when false. |

All other props are forwarded to the matching Base UI `Dialog` parts.

## Notes

- `DialogContent` renders its own overlay and portal, so do not wrap it again.
- Always give a `DialogTitle`; without one the dialog has no accessible name.
