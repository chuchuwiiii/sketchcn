"use client"

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import { useSketchOutline } from "./sketch-provider"

const toggleVariants = cva(
  "group/toggle relative isolate inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>[data-sketch-outline]]:-z-10 [--sketch-fill:var(--primary)] [--sketch-fill-opacity:0]",
  {
    variants: {
      variant: {
        default:
          "text-foreground/70 [--sketch-stroke:var(--primary)] hover:text-foreground hover:[--sketch-fill-opacity:0.12] data-pressed:text-primary-foreground data-pressed:[--sketch-fill-opacity:1] data-pressed:hover:[--sketch-fill-opacity:0.85]",
        outline:
          "text-foreground/70 hover:text-foreground hover:[--sketch-fill-opacity:0.08] data-pressed:text-foreground data-pressed:[--sketch-fill-opacity:0.14] data-pressed:[--sketch-dash:5_5] data-pressed:[--sketch-dash-animation:sketch-dash-boil_1s_steps(2)_infinite]",
      },
      size: {
        default:
          "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  children,
  className,
  variant = "default",
  size = "default",
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  const sketchOutline = useSketchOutline()

  return (
    <TogglePrimitive
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        data-sketch-outline
        ref={sketchOutline.ref}
        style={sketchOutline.style}
      />
    </TogglePrimitive>
  )
}

const TOGGLE_VARIANTS = [
  "default",
  "outline",
] as const satisfies readonly NonNullable<VariantProps<typeof toggleVariants>["variant"]>[]

const TOGGLE_SIZES = [
  "sm",
  "default",
  "lg",
] as const satisfies readonly NonNullable<VariantProps<typeof toggleVariants>["size"]>[]

export { Toggle, toggleVariants, TOGGLE_VARIANTS, TOGGLE_SIZES }
