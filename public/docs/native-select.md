# Native Select

A hand-drawn native select styled with shadcn conventions. It is a real `<select>`, so it gets the platform dropdown on mobile and needs no popover.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/native-select.json
```

## Usage

```tsx
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";

export function PenPicker() {
  return (
    <NativeSelect defaultValue="marker" className="w-40">
      <NativeSelectOption value="ballpoint">Ballpoint</NativeSelectOption>
      <NativeSelectOption value="marker">Marker</NativeSelectOption>
      <NativeSelectOption value="pencil">Pencil</NativeSelectOption>
    </NativeSelect>
  );
}
```

## Parts

| Part | Description |
| --- | --- |
| `NativeSelect` | The outlined `select` with a drawn chevron. |
| `NativeSelectOption` | A styled `option`. |
| `NativeSelectOptGroup` | A styled `optgroup`. |

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "default"` | `"default"` | Height and text size. Note this replaces the native `size` attribute. |

All other `select` props are forwarded, so `name`, `value`, `defaultValue`, `onChange`, `required` and `disabled` behave exactly as usual.

## Notes

- Because it is a native control, form libraries and uncontrolled forms work without an adapter.
