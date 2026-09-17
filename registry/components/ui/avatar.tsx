"use client"

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar"
import { cn } from "cn"
import type { ComponentProps, CSSProperties } from "react"
import { useSketchBg, useSketchOutline } from "./sketch-provider"

const AVATAR_SIZES = ["sm", "default", "lg"] as const

type SketchClipStyle = CSSProperties & { "--sketch-clip"?: string }

type AvatarSize = (typeof AVATAR_SIZES)[number]

function Avatar({
  children,
  className,
  size = "default",
  style,
  ...props
}: AvatarPrimitive.Root.Props & { size?: AvatarSize }) {
  const outline = useSketchOutline({ clip: true, shape: "circle" })
  const clipStyle: SketchClipStyle = { "--sketch-clip": outline.clipPath, ...style }

  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "group/avatar relative isolate flex size-8 shrink-0 select-none rounded-full text-muted-foreground transition-transform data-[size=lg]:size-10 data-[size=sm]:size-6",
        className
      )}
      style={clipStyle}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        data-sketch-outline
        ref={outline.ref}
        style={outline.style}
      />
    </AvatarPrimitive.Root>
  )
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        "aspect-square size-full rounded-full bg-background object-cover [clip-path:var(--sketch-clip,none)]",
        className
      )}
      {...props}
    />
  )
}

function AvatarFallback({
  children,
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  const shading = useSketchBg()

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "relative flex size-full items-center justify-center rounded-full bg-background text-foreground text-sm leading-none [clip-path:var(--sketch-clip,none)] [--sketch-bg-fill:var(--muted-foreground)] [--sketch-bg-opacity:0.35] [&>[data-sketch-bg]]:-z-10 group-data-[size=lg]/avatar:text-base group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        data-sketch-bg
        ref={shading.ref}
        style={shading.style}
      />
    </AvatarPrimitive.Fallback>
  )
}

function AvatarBadge({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "group/avatar-group flex -space-x-2",
        "*:data-[slot=avatar]:[filter:drop-shadow(0_0_1px_var(--background))_drop-shadow(0_0_1px_var(--background))]",
        "*:data-[slot=avatar]:hover:z-10 *:data-[slot=avatar]:hover:[animation:sketch-avatar-wobble_450ms_ease-out_forwards]",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  const outline = useSketchOutline({ shape: "circle" })

  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "relative isolate flex size-8 shrink-0 items-center justify-center rounded-full bg-background text-muted-foreground text-sm group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=lg]/avatar-group:text-base group-has-data-[size=sm]/avatar-group:size-6 group-has-data-[size=sm]/avatar-group:text-xs",
        className
      )}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        data-sketch-outline
        ref={outline.ref}
        style={outline.style}
      />
    </div>
  )
}

export {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  AVATAR_SIZES,
}
