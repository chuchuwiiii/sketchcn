"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"
import * as React from "react"
import { type PaperVariant, useSketchOutline } from "./sketch-provider"

const alertVariants = cva(
  "group/alert relative isolate grid w-full gap-0.5 overflow-clip [overflow-clip-margin:6px] rounded-lg px-3 py-2.5 text-left text-sm [--paper-opacity:0.25] [--sketch-stroke:currentColor] [&>[data-sketch-outline]]:-z-10 has-data-[slot=alert-action]:pr-16 has-[>svg:not([data-sketch-outline])]:grid-cols-[auto_1fr] has-[>svg:not([data-sketch-outline])]:gap-x-2.5 *:[svg:not([data-sketch-outline])]:row-span-2 *:[svg:not([data-sketch-outline])]:translate-y-0.5 *:[svg:not([data-sketch-outline])]:text-current *:[svg:not([data-sketch-outline]):not([class*='size-'])]:size-4 hover:*:[svg:not([data-sketch-outline])]:animate-[sketch-icon-wiggle_180ms_ease-in-out_infinite] motion-reduce:hover:*:[svg:not([data-sketch-outline])]:animate-none",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground [--sketch-stroke:var(--border)]",
        destructive:
          "bg-destructive/5 text-destructive [--sketch-stroke:var(--destructive)] *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  children,
  className,
  paper = "default",
  variant = "default",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof alertVariants> & { paper?: PaperVariant }) {
  const sketchOutline = useSketchOutline()

  return (
    <div
      data-slot="alert"
      data-paper={paper}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {children}
      <svg
        aria-hidden="true"
        data-sketch-outline
        ref={sketchOutline.ref}
        style={sketchOutline.style}
      />
    </div>
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-medium group-has-[>svg:not([data-sketch-outline])]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-sm text-muted-foreground group-has-[>svg:not([data-sketch-outline])]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-2 right-2", className)}
      {...props}
    />
  )
}

export { Alert, AlertAction, AlertDescription, AlertTitle }
