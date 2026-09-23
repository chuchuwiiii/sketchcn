"use client"

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"
import { Check } from "@boxicons/react"
import { cn } from "cn"
import { type CSSProperties, useId } from "react"
import { useSketchOutline, useSketchSeed } from "./sketch-provider"
import { createSeed } from "./utils/sketch"

const WOBBLE = { FREQUENCY: 0.08, OCTAVES: 2, SCALE: 4.5 }
const BOIL_FRAMES = [0, 1, 2, 3] as const

type CheckFrameStyle = CSSProperties &
  Record<`--sketch-check-frame-${(typeof BOIL_FRAMES)[number]}`, string>

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
  const boxOutline = useSketchOutline()
  const instanceId = useId()
  
  const baseSeed = createSeed(useSketchSeed(), instanceId, 100_000) * BOIL_FRAMES.length
  const filterId = `sketch-check-${instanceId.replace(/[^a-zA-Z0-9-]/g, "")}`
  const frameStyle: CheckFrameStyle = {
    "--sketch-check-frame-0": `url(#${filterId}-0)`,
    "--sketch-check-frame-1": `url(#${filterId}-1)`,
    "--sketch-check-frame-2": `url(#${filterId}-2)`,
    "--sketch-check-frame-3": `url(#${filterId}-3)`,
  }

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer relative isolate flex size-4 shrink-0 items-center justify-center rounded-[3px] outline-none transition-colors group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 focus-visible:ring-ring/50 data-disabled:cursor-not-allowed data-disabled:opacity-50 *:data-sketch-outline:-z-10 [--sketch-fill:var(--primary)] [--sketch-fill-opacity:0] [--sketch-stroke:var(--primary)] hover:[--sketch-fill-opacity:0.1] aria-invalid:[--sketch-fill:var(--destructive)] aria-invalid:[--sketch-stroke:var(--destructive)] aria-invalid:text-destructive text-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="pointer-events-none absolute -top-1.5 -right-1.5 bottom-0.5 left-0.5 [clip-path:inset(-4px)] transition-[clip-path,opacity] duration-200 ease-out data-ending-style:opacity-0 data-starting-style:[clip-path:inset(-4px_100%_-4px_-4px)] motion-reduce:transition-none"
        style={frameStyle}
      >
        <svg aria-hidden="true" className="absolute size-0">
          {BOIL_FRAMES.map((frame) => (
            <filter
              key={frame}
              id={`${filterId}-${frame}`}
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency={WOBBLE.FREQUENCY}
                numOctaves={WOBBLE.OCTAVES}
                seed={baseSeed + frame}
              />
              <feDisplacementMap in="SourceGraphic" scale={WOBBLE.SCALE} />
            </filter>
          ))}
        </svg>
        <Check
          aria-hidden="true"
          width="100%"
          height="100%"
          className="filter-(--sketch-check-frame-0) animate-[sketch-check-boil_1200ms_steps(1)_infinite]"
        />
      </CheckboxPrimitive.Indicator>
      <svg
        aria-hidden="true"
        data-sketch-outline
        ref={boxOutline.ref}
        style={boxOutline.style}
      />
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
