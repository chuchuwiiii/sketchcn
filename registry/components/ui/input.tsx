"use client"

import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"
import { useLayoutEffect, useState } from "react"
import { useSketchOutline } from "./sketch-provider"

function Input({ className, type, ...props }: InputPrimitive.Props) {
  const sketchOutline = useSketchOutline()
  const fileButtonOutline = useSketchOutline()
  const fileButton = useFileButtonBox(type === "file")

  return (
    <div
      data-slot="input-wrapper"
      className="group/input relative isolate w-full rounded-lg text-input transition-colors has-aria-invalid:text-destructive has-focus-visible:text-ring [&>[data-sketch-outline]]:-z-10 [--sketch-stroke:currentColor]"
    >
      <InputPrimitive
        ref={fileButton.ref}
        type={type}
        data-slot="input"
        className={cn(
          "block h-8 w-full min-w-0 rounded-lg border border-transparent bg-transparent px-2.5 py-1 text-base text-foreground transition-colors outline-none file:mr-2 file:inline-flex file:h-6 file:rounded-md file:border-0 file:bg-transparent file:px-2 file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        {...props}
      />
      {fileButton.box && (
        <span
          aria-hidden="true"
          data-slot="input-file-outline"
          className="pointer-events-none absolute -z-10 rounded-md text-foreground/60 group-hover/input:[--sketch-dash:6_4] group-hover/input:[--sketch-dash-animation:sketch-dash-boil_1s_steps(2)_infinite]"
          style={fileButton.box}
        >
          <svg
            aria-hidden="true"
            data-sketch-outline
            ref={fileButtonOutline.ref}
            style={fileButtonOutline.style}
          />
        </span>
      )}
      <svg
        aria-hidden="true"
        data-sketch-outline
        ref={sketchOutline.ref}
        style={sketchOutline.style}
      />
    </div>
  )
}

type FileButtonBox = { height: number; left: number; top: number; width: number }

function useFileButtonBox(enabled: boolean) {
  const [input, setInput] = useState<HTMLElement | null>(null)
  const [box, setBox] = useState<FileButtonBox | null>(null)

  useLayoutEffect(() => {
    if (!enabled || !input) {
      setBox(null)
      return
    }

    let frame = 0
    const measure = () => {
      const buttonStyles = getComputedStyle(input, "::file-selector-button")
      const width = Number.parseFloat(buttonStyles.width)
      const height = Number.parseFloat(buttonStyles.height)

      if (!width || !height) {
        setBox(null)
        return
      }

      const styles = getComputedStyle(input)

      setBox({
        height,
        left:
          input.offsetLeft +
          (Number.parseFloat(styles.borderLeftWidth) || 0) +
          (Number.parseFloat(styles.paddingLeft) || 0),
        top:
          input.offsetTop +
          (Number.parseFloat(styles.borderTopWidth) || 0) +
          (input.clientHeight - height) / 2,
        width,
      })
    }

    const scheduleMeasure = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }

    const observer = new ResizeObserver(scheduleMeasure)
    observer.observe(input)
    scheduleMeasure()

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
    }
  }, [enabled, input])

  return { box, ref: setInput }
}

export { Input }
