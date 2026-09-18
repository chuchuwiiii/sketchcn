# Avatar

A Base UI avatar whose image is clipped inside its hand-drawn outline, with hatched initials as the fallback.

## Installation

```bash
npx shadcn@latest add https://sketchcn.chuwii.com/r/avatar.json
```

## Usage

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Profile() {
  return (
    <Avatar>
      <AvatarImage
        src="https://api.dicebear.com/9.x/notionists/svg?seed=Chuwii"
        alt="Chuwii"
      />
      <AvatarFallback>CH</AvatarFallback>
    </Avatar>
  );
}
```

## Props

### Avatar

Takes every Base UI `Avatar.Root` prop.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `size` | `"sm" \| "default" \| "lg"` | `"default"` | Draws a 24px, 32px, or 40px ring. |

### AvatarImage

Takes every Base UI `Avatar.Image` prop. It is clipped to the drawn ring, so the photo edge wobbles with the ink.

### AvatarFallback

Takes every Base UI `Avatar.Fallback` prop. Renders hatched shading behind whatever you put inside, usually initials.

### AvatarBadge

Takes every `span` prop. Sits at the bottom-right corner and follows the avatar `size`.

### AvatarGroup

Takes every `div` prop. Overlaps its avatars, haloes each one in the background colour, and wobbles the hovered face as it lifts. The wobble is skipped under `prefers-reduced-motion`.

### AvatarGroupCount

Takes every `div` prop. A drawn circle for the overflow count, sized from the avatars in the group.

## Notes

- The ring is drawn as a real circle, not a rounded square, so it stays round at every size.
- The image and the fallback share the drawn shape through `--sketch-clip`, so both stop at the same edge.
- Override the drawing with the usual sketch variables.

```tsx
<Avatar className="[--sketch-roughness:2]">
  <AvatarFallback className="[--sketch-bg-hachure-gap:3]">SK</AvatarFallback>
</Avatar>
```

- Always pass `alt` to `AvatarImage`; the fallback text is not read while the image is showing.

## Animation

Inside an `AvatarGroup`, hovering a face lifts it out of the stack with the `sketch-avatar-wobble` keyframe from `sketch.css`. It ends raised, so the face stays up while the hover is held.

```tsx
// on AvatarGroup
"*:data-[slot=avatar]:hover:z-10 *:data-[slot=avatar]:hover:[animation:sketch-avatar-wobble_450ms_ease-out_forwards]"
```

`sketch.css` already disables it under `prefers-reduced-motion`.

```css
@media (prefers-reduced-motion: reduce) {
  [data-slot="avatar-group"] > [data-slot="avatar"]:hover {
    animation: none;
  }
}
```
