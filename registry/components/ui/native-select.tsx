"use client"

import { ChevronDown } from "@boxicons/react"
import { cn } from "cn"
import type * as React from "react"
import { useSketchOutline } from "./sketch-provider"

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
  size?: "sm" | "default"
}

function NativeSelect({ className, size = "default", ...props }: NativeSelectProps) {
  const sketchOutline = useSketchOutline()

  return (
    <div
      data-slot="native-select-wrapper"
      data-size={size}
      className={cn(
        "group/native-select relative isolate w-fit rounded-lg text-input transition-colors has-aria-invalid:text-destructive has-focus-visible:text-ring has-[select:disabled]:opacity-50 [--sketch-stroke:currentColor] [&>[data-sketch-outline]]:-z-10",
        className
      )}
    >
      <select
        data-slot="native-select"
        data-size={size}
        className="h-8 w-full min-w-0 appearance-none rounded-lg border border-transparent bg-transparent py-1 pr-8 pl-2.5 text-sm text-foreground transition-colors outline-none select-none disabled:pointer-events-none disabled:cursor-not-allowed data-[size=sm]:h-7 data-[size=sm]:py-0.5 dark:bg-input/30 dark:hover:bg-input/50"
        {...props}
      />
      <ChevronDown
        aria-hidden="true"
        data-slot="native-select-icon"
        className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground transition-transform duration-200 ease-out select-none motion-reduce:transition-none group-hover/native-select:translate-y-[calc(-50%+1px)]"
      />
      <svg
        aria-hidden="true"
        data-sketch-outline
        ref={sketchOutline.ref}
        style={sketchOutline.style}
      />
    </div>
  )
}

function NativeSelectOption({
  className,
  ...props
}: React.ComponentProps<"option">) {
  return (
    <option
      data-slot="native-select-option"
      className={cn("bg-[Canvas] text-[CanvasText]", className)}
      {...props}
    />
  )
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<"optgroup">) {
  return (
    <optgroup
      data-slot="native-select-optgroup"
      className={cn("bg-[Canvas] text-[CanvasText]", className)}
      {...props}
    />
  )
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption }
