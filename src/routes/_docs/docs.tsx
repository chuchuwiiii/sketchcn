import { InfoCircle } from "@boxicons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { cn } from "cn";
import { CodeBlock } from "../../components/code-block";
import type { DocsReferenceRow } from "../../components/docs-section";
import { DocsSection } from "../../components/docs-section";
import { InstallTabs } from "../../components/install-tabs";
import {
	BgPreview,
	OutlinePreview,
} from "../../components/sketch-docs-previews";
import { SITE, seo } from "../../lib/seo";

export const Route = createFileRoute("/_docs/docs")({
	head: () =>
		seo({
			title: "Documentation — Sketchcn",
			description:
				"Install Sketchcn, wrap your app in SketchProvider, and tune the RoughJS outline and background hooks every component draws through.",
			path: "/docs",
		}),
	component: DocsPage,
});

const SETUP_SNIPPET = `import { SketchProvider } from "@/components/ui/sketch-provider";

export function App({ children }: { children: React.ReactNode }) {
  return <SketchProvider>{children}</SketchProvider>;
}`;

const PROVIDER_OPTIONS_SNIPPET = `<SketchProvider seed={1234}>
  <div className="[--sketch-roughness:2] [--sketch-bowing:2]">{children}</div>
</SketchProvider>`;

const OUTLINE_SNIPPET = `import { useSketchOutline } from "@/components/ui/sketch-provider";

export function Panel({ children }: { children: React.ReactNode }) {
  const sketchOutline = useSketchOutline();

  return (
    <div className="relative isolate rounded-lg px-4 py-3">
      {children}
      <svg
        aria-hidden="true"
        data-sketch-outline
        className="-z-10"
        ref={sketchOutline.ref}
        style={sketchOutline.style}
      />
    </div>
  );
}`;

const BG_SNIPPET = `import { useSketchBg } from "@/components/ui/sketch-provider";

export function Highlight({ children }: { children: React.ReactNode }) {
  const sketchBg = useSketchBg({ hachureGap: 6 });

  return (
    <div className="relative isolate rounded-lg px-4 py-3 text-primary">
      {children}
      <svg
        aria-hidden="true"
        data-sketch-bg
        className="-z-10"
        ref={sketchBg.ref}
        style={sketchBg.style}
      />
    </div>
  );
}`;

const BG_HACHURE_ANGLE_SNIPPET = `<div className="[--sketch-bg-hachure-angle:0]">
  <Skeleton className="h-24 w-full" />
</div>

// or per instance, without touching the cascade
const sketchBg = useSketchBg({ hachureAngle: 0 });`;

const CSS_VARIABLES_SNIPPET = `<div className="[--sketch-roughness:2.6] [--sketch-bowing:2.4]">
  <Button>Rougher button</Button>
</div>`;

const KEYFRAMES_SNIPPET = `@keyframes sketch-dash-boil {
  to {
    stroke-dashoffset: -10;
  }
}

@keyframes sketch-dash-alternate {
  to {
    stroke-dashoffset: -10;
  }
}

@keyframes sketch-icon-wiggle {
  0%,
  100% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(5deg);
  }
}

@keyframes sketch-avatar-wobble {
  0% {
    transform: translateY(0) rotate(0deg);
  }

  35% {
    transform: translateY(-5px) rotate(-5deg);
  }

  60% {
    transform: translateY(-2px) rotate(4deg);
  }

  80% {
    transform: translateY(-4px) rotate(-2deg);
  }

  100% {
    transform: translateY(-3px) rotate(0deg);
  }
}

@keyframes sketch-hatch-reveal {
  0% {
    --sketch-bg-reveal-lead: 0%;
    --sketch-bg-reveal-trail: 0%;
  }

  45%,
  55% {
    --sketch-bg-reveal-lead: 100%;
    --sketch-bg-reveal-trail: 0%;
  }

  100% {
    --sketch-bg-reveal-lead: 100%;
    --sketch-bg-reveal-trail: 100%;
  }
}`;

const ANIMATION_USAGE_SNIPPET = `<div className="[--sketch-dash:6_4] hover:[--sketch-dash-animation:sketch-dash-boil_1s_steps(2)_infinite]">
  <Button variant="ghost">Boiling outline</Button>
</div>

<InfoCircle className="hover:animate-[sketch-icon-wiggle_180ms_ease-in-out_infinite] motion-reduce:animate-none" />`;

const REDUCED_MOTION_SNIPPET = `@media (prefers-reduced-motion: reduce) {
  [data-sketch-outline] path {
    animation: none;
  }

  [data-sketch-reveal] [data-sketch-bg] {
    animation: none;
    mask-image: none;
    -webkit-mask-image: none;
  }

  [data-slot="avatar-group"] > [data-slot="avatar"]:hover {
    animation: none;
  }
}`;

const REVEAL_SNIPPET = `<div className="relative isolate rounded-lg px-4 py-3" data-sketch-reveal>
  <span>Loading</span>
  <svg
    aria-hidden="true"
    data-sketch-bg
    className="-z-10"
    ref={sketchBg.ref}
    style={sketchBg.style}
  />
</div>`;

const PAPER_SNIPPET = `<div
  className="relative isolate rounded-lg p-4 [--paper-opacity:0.5]"
  data-paper="graph"
>
  Graph paper behind any element
</div>`;

const LLMS_INDEX_SNIPPET = `curl ${SITE.url}/llms.txt`;

const LLMS_COMPONENT_SNIPPET = `curl ${SITE.url}/components/button/md`;

const PROVIDER_PROPS = [
	{
		name: "children",
		type: "ReactNode",
		description: "The tree that can read sketch settings.",
	},
	{
		name: "seed",
		type: "number",
		defaultValue: "20260828",
		cssVariable: "--sketch-seed",
		description:
			"Base seed for the wobble. Every hook mixes it with its own id, so one seed change reshuffles the whole page deterministically.",
	},
] as const satisfies readonly DocsReferenceRow[];

const OUTLINE_OPTIONS = [
	{
		name: "shape",
		type: '"rectangle" | "underline"',
		defaultValue: '"rectangle"',
		description:
			"Rectangle follows the element border radius; underline draws a single stroke along the bottom edge.",
	},
	{
		name: "id",
		type: "string",
		defaultValue: "useId()",
		description:
			"Seeds the wobble. Because useId() shifts with tree position, pass a stable id when the geometry must not change, such as shared shapes or visual snapshots.",
	},
	{
		name: "opacity",
		type: "number",
		description:
			"Applied to the returned svg style. Style the svg directly in CSS instead when you want a hover or state transition.",
	},
	{
		name: "...roughOptions",
		type: "Partial<Options>",
		cssVariable: "--sketch-*",
		description:
			"Any RoughJS option except seed: roughness, bowing, stroke, strokeWidth, strokeLineDash, fill, fillStyle, and friends.",
	},
] as const satisfies readonly DocsReferenceRow[];

const BG_DEFAULTS = [
	{
		name: "fill",
		type: "color",
		defaultValue: "currentColor",
		cssVariable: "--sketch-bg-fill",
		description: "Fill colour of the hachure strokes.",
	},
	{
		name: "fillStyle",
		type: "string",
		defaultValue: "hachure",
		cssVariable: "--sketch-bg-fill-style",
		description: "RoughJS fill style used for the shading.",
	},
	{
		name: "fillWeight",
		type: "number",
		defaultValue: "0.4",
		cssVariable: "--sketch-bg-fill-weight",
		description: "Thickness of each hachure stroke.",
	},
	{
		name: "hachureGap",
		type: "number",
		defaultValue: "4",
		cssVariable: "--sketch-bg-hachure-gap",
		description: "Distance between hachure strokes.",
	},
	{
		name: "hachureAngle",
		type: "number",
		defaultValue: "-45",
		cssVariable: "--sketch-bg-hachure-angle",
		description:
			"Angle of the hachure strokes in degrees, measured clockwise from the x axis. Components that wipe their shading, such as Skeleton, read the same value to keep the reveal edge parallel to the strokes.",
	},
	{
		name: "stroke",
		type: "color",
		defaultValue: "transparent",
		cssVariable: "--sketch-bg-stroke",
		description: "No outline is drawn, only the fill.",
	},
	{
		name: "opacity",
		type: "number",
		defaultValue: "0.5",
		cssVariable: "--sketch-bg-opacity",
		description: "Keeps the shading behind the content readable.",
	},
] as const satisfies readonly DocsReferenceRow[];

const CSS_VARIABLES = [
	{
		name: "--sketch-seed",
		type: "quoted number",
		defaultValue: '"20260828"',
		description:
			"Base seed for the wobble, mixed with each instance id, overriding the SketchProvider seed for the subtree. Quote it, because CSS minifiers round bare numbers to six significant digits.",
	},
	{
		name: "--sketch-roughness",
		type: "number",
		defaultValue: "1.1",
		description: "How far strokes stray from the ideal path.",
	},
	{
		name: "--sketch-bowing",
		type: "number",
		defaultValue: "1.4",
		description: "How much straight lines bend.",
	},
	{
		name: "--sketch-stroke",
		type: "color",
		defaultValue: "currentColor",
		description: "Stroke colour of the outline.",
	},
	{
		name: "--sketch-stroke-width",
		type: "number",
		defaultValue: "1.6",
		description: "Stroke width in pixels.",
	},
	{
		name: "--sketch-disable-multi-stroke",
		type: '"true" | "false"',
		defaultValue: "true",
		description: "Draw one pass instead of the doubled pencil pass.",
	},
	{
		name: "--sketch-preserve-vertices",
		type: '"true" | "false"',
		defaultValue: "true",
		description:
			"Keep corners anchored so shapes stay aligned with the layout box.",
	},
	{
		name: "--sketch-fill",
		type: "color",
		description:
			"Fill colour, also used by the CSS fill transition on drawn paths.",
	},
	{
		name: "--sketch-fill-style",
		type: "string",
		defaultValue: "solid",
		description: "RoughJS fill style, such as solid, hachure, or zigzag.",
	},
	{
		name: "--sketch-fill-weight",
		type: "number",
		description: "Thickness of each fill stroke for hatched fill styles.",
	},
	{
		name: "--sketch-hachure-gap",
		type: "number",
		description: "Distance between hachure strokes.",
	},
	{
		name: "--sketch-hachure-angle",
		type: "number",
		description: "Angle of the hachure lines in degrees.",
	},
	{
		name: "--sketch-dash",
		type: "string",
		defaultValue: "none",
		description:
			"CSS stroke-dasharray on the drawn outline, separate from the RoughJS dashed fill.",
	},
	{
		name: "--sketch-dash-animation",
		type: "string",
		defaultValue: "none",
		description:
			"CSS animation shorthand for the outline, used by the boil and alternate keyframes.",
	},
	{
		name: "--sketch-fill-opacity",
		type: "number",
		defaultValue: "1",
		description: "CSS fill-opacity on the drawn path, transitioned over 150ms.",
	},
] as const satisfies readonly DocsReferenceRow[];

const KEYFRAMES = [
	{
		name: "sketch-dash-boil",
		type: "outline dash",
		defaultValue: "1s steps(2) infinite",
		cssVariable: "--sketch-dash-animation",
		description:
			"Shifts the dash offset by one full period in two steps, so the outline reads as redrawn by hand. Needs --sketch-dash set. Used by the ghost Button and the Input file selector on hover.",
	},
	{
		name: "sketch-dash-alternate",
		type: "outline dash",
		defaultValue: "1s steps(2) infinite",
		cssVariable: "--sketch-dash-animation",
		description:
			"The same sweep against a 5 5 dasharray, so dashes and gaps swap places every frame. Used by Toggle while pressed.",
	},
	{
		name: "sketch-icon-wiggle",
		type: "transform",
		defaultValue: "180ms ease-in-out infinite",
		description:
			"Rocks an icon between -5 and 5 degrees. Used by Button on press and by the Alert and Toast icons on hover.",
	},
	{
		name: "sketch-avatar-wobble",
		type: "transform",
		defaultValue: "450ms ease-out forwards",
		description:
			"Lifts an element out of a stack and lands it level but raised, so it stays up while hovered. Used by AvatarGroup.",
	},
	{
		name: "sketch-hatch-reveal",
		type: "mask",
		defaultValue: "2400ms linear infinite",
		description:
			"Wipes the hachure mask on and off along the hatch angle. Applied by data-sketch-reveal, which is the whole of Skeleton's animation.",
	},
] as const satisfies readonly DocsReferenceRow[];

const DATA_ATTRIBUTES = [
	{
		name: "data-sketch-outline",
		type: "svg",
		description:
			"Marks the outline svg. Its paths keep a non-scaling stroke and read --sketch-dash, --sketch-dash-animation, --sketch-fill and --sketch-fill-opacity.",
	},
	{
		name: "data-sketch-bg",
		type: "svg",
		description: "Marks the hachure svg and applies --sketch-bg-opacity.",
	},
	{
		name: "data-sketch-reveal",
		type: "ancestor",
		description:
			"Masks the data-sketch-bg svg below it and runs sketch-hatch-reveal on a loop.",
	},
	{
		name: "data-paper",
		type: "PaperVariant",
		defaultValue: '"default"',
		description:
			"Draws a repeating paper texture on a ::before at z-index -1, so the element needs position: relative and isolate. Accepts polkadots, filled-dots, hexagons, graph and plus.",
	},
	{
		name: "--paper-pattern",
		type: "color",
		defaultValue: "#9c92ac",
		description: "Colour of the paper texture.",
	},
	{
		name: "--paper-opacity",
		type: "number",
		defaultValue: "0.4",
		description: "Opacity of the paper texture layer.",
	},
] as const satisfies readonly DocsReferenceRow[];

type CssVariableExample = {
	value: string;
	className: string;
	id?: string;
};

type CssVariableRow = {
	name: string;
	examples: readonly [CssVariableExample, CssVariableExample];
};

const HACHURE_FILL =
	"[--sketch-fill:var(--primary)] [--sketch-fill-style:hachure]";

const CSS_VARIABLE_EXAMPLES: readonly CssVariableRow[] = [
	{
		name: "--sketch-seed",
		examples: [
			{ value: "7", className: "[--sketch-seed:7]", id: "seed-example" },
			{ value: "99", className: "[--sketch-seed:99]", id: "seed-example" },
		],
	},
	{
		name: "--sketch-roughness",
		examples: [
			{ value: "0.4", className: "[--sketch-roughness:0.4]" },
			{ value: "3", className: "[--sketch-roughness:3]" },
		],
	},
	{
		name: "--sketch-bowing",
		examples: [
			{ value: "0", className: "[--sketch-bowing:0]" },
			{ value: "6", className: "[--sketch-bowing:6]" },
		],
	},
	{
		name: "--sketch-stroke",
		examples: [
			{
				value: "var(--primary)",
				className: "[--sketch-stroke:var(--primary)]",
			},
			{
				value: "var(--destructive)",
				className: "[--sketch-stroke:var(--destructive)]",
			},
		],
	},
	{
		name: "--sketch-stroke-width",
		examples: [
			{ value: "1", className: "[--sketch-stroke-width:1]" },
			{ value: "4", className: "[--sketch-stroke-width:4]" },
		],
	},
	{
		name: "--sketch-disable-multi-stroke",
		examples: [
			{ value: "true", className: "[--sketch-disable-multi-stroke:true]" },
			{ value: "false", className: "[--sketch-disable-multi-stroke:false]" },
		],
	},
	{
		name: "--sketch-preserve-vertices",
		examples: [
			{
				value: "true",
				className: "[--sketch-preserve-vertices:true] [--sketch-roughness:2.4]",
			},
			{
				value: "false",
				className:
					"[--sketch-preserve-vertices:false] [--sketch-roughness:2.4]",
			},
		],
	},
	{
		name: "--sketch-fill",
		examples: [
			{
				value: "var(--primary)",
				className: "text-primary-foreground [--sketch-fill:var(--primary)]",
			},
			{
				value: "var(--destructive)",
				className: "text-primary-foreground [--sketch-fill:var(--destructive)]",
			},
		],
	},
	{
		name: "--sketch-fill-style",
		examples: [
			{
				value: "solid",
				className:
					"text-primary-foreground [--sketch-fill:var(--primary)] [--sketch-fill-style:solid]",
			},
			{ value: "hachure", className: HACHURE_FILL },
		],
	},
	{
		name: "--sketch-fill-weight",
		examples: [
			{ value: "0.5", className: `${HACHURE_FILL} [--sketch-fill-weight:0.5]` },
			{ value: "2.5", className: `${HACHURE_FILL} [--sketch-fill-weight:2.5]` },
		],
	},
	{
		name: "--sketch-hachure-gap",
		examples: [
			{ value: "3", className: `${HACHURE_FILL} [--sketch-hachure-gap:3]` },
			{ value: "10", className: `${HACHURE_FILL} [--sketch-hachure-gap:10]` },
		],
	},
	{
		name: "--sketch-hachure-angle",
		examples: [
			{ value: "0", className: `${HACHURE_FILL} [--sketch-hachure-angle:0]` },
			{ value: "90", className: `${HACHURE_FILL} [--sketch-hachure-angle:90]` },
		],
	},
	{
		name: "--sketch-dash",
		examples: [
			{ value: "6 4", className: "[--sketch-dash:6_4]" },
			{ value: "2 10", className: "[--sketch-dash:2_10]" },
		],
	},
	{
		name: "--sketch-dash-animation",
		examples: [
			{
				value: "sketch-dash-boil 1s steps(2) infinite",
				className:
					"[--sketch-dash:6_4] [--sketch-dash-animation:sketch-dash-boil_1s_steps(2)_infinite]",
			},
			{
				value: "sketch-dash-alternate 1s steps(2) infinite",
				className:
					"[--sketch-dash:5_5] [--sketch-dash-animation:sketch-dash-alternate_1s_steps(2)_infinite]",
			},
		],
	},
	{
		name: "--sketch-fill-opacity",
		examples: [
			{
				value: "0.2",
				className: "[--sketch-fill:var(--primary)] [--sketch-fill-opacity:0.2]",
			},
			{
				value: "1",
				className:
					"text-primary-foreground [--sketch-fill:var(--primary)] [--sketch-fill-opacity:1]",
			},
		],
	},
];

function CssVariableGallery() {
	return (
		<div className="grid gap-5 sm:grid-cols-2">
			{CSS_VARIABLE_EXAMPLES.map((variable) => (
				<div key={variable.name} className="flex flex-col gap-2">
					<span className="font-mono text-muted-foreground text-xs">
						{variable.name}
					</span>
					<div className="grid grid-cols-2 gap-3">
						{variable.examples.map((example) => (
							<OutlinePreview
								key={example.value}
								id={example.id}
								className={cn("text-center", example.className)}
							>
								<span className="font-mono text-xs">{example.value}</span>
							</OutlinePreview>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

const KEYFRAME_PREVIEWS = [
	{
		name: "sketch-dash-boil",
		className:
			"[--sketch-dash:6_4] [--sketch-dash-animation:sketch-dash-boil_1s_steps(2)_infinite]",
	},
	{
		name: "sketch-dash-alternate",
		className:
			"[--sketch-dash:5_5] [--sketch-dash-animation:sketch-dash-alternate_1s_steps(2)_infinite]",
	},
	{
		name: "sketch-avatar-wobble",
		className: "hover:[animation:sketch-avatar-wobble_450ms_ease-out_forwards]",
	},
] as const;

function KeyframeGallery() {
	return (
		<div className="flex flex-wrap items-center gap-4 p-4">
			{KEYFRAME_PREVIEWS.map((preview) => (
				<OutlinePreview key={preview.name} className={preview.className}>
					<span className="font-mono text-xs">{preview.name}</span>
				</OutlinePreview>
			))}
			<OutlinePreview className="hover:[&_svg:not([data-sketch-outline])]:animate-[sketch-icon-wiggle_180ms_ease-in-out_infinite] motion-reduce:hover:[&_svg:not([data-sketch-outline])]:animate-none">
				<span className="flex items-center gap-2 font-mono text-xs">
					<InfoCircle className="size-4" />
					sketch-icon-wiggle
				</span>
			</OutlinePreview>
			<div data-sketch-reveal>
				<BgPreview className="text-primary">
					<span className="font-mono text-xs">sketch-hatch-reveal</span>
				</BgPreview>
			</div>
		</div>
	);
}

function DocsPage() {
	return (
		<div>
			<div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-8">
				<header className="flex flex-col gap-2">
					<h1 className="text-4xl">Sketch Provider</h1>
					<p className="text-muted-foreground">
						{
							"Every Sketchcn component draws its outline with RoughJS. SketchProvider holds the drawing settings, and the useSketchOutline and useSketchBg hooks turn any element into a hand-drawn one."
						}
					</p>
				</header>

				<DocsSection
					id="installation"
					title="Installation"
					description="Adding any component pulls sketch-provider in as a dependency, but you can install it on its own."
				>
					<InstallTabs name="sketch-provider" />
					<DocsSection.Block label="Wrap your app once, at the root">
						<CodeBlock code={SETUP_SNIPPET} />
					</DocsSection.Block>
					<p className="text-muted-foreground text-sm">
						{
							"The hooks throw when there is no provider above them, so a missing wrapper fails loudly instead of rendering unstyled boxes."
						}
					</p>
				</DocsSection>

				<DocsSection
					id="llms"
					variant="polkadots"
					title="Docs for LLMs"
					description="Every component doc is also served as plain markdown, so a coding agent can read it without scraping the page."
				>
					<DocsSection.Block label="Index of every component doc">
						<CodeBlock code={LLMS_INDEX_SNIPPET} lang="bash" />
					</DocsSection.Block>
					<DocsSection.Block label="A single component as markdown">
						<CodeBlock code={LLMS_COMPONENT_SNIPPET} lang="bash" />
					</DocsSection.Block>
					<p className="text-muted-foreground text-sm">
						{
							"llms.txt lists every component with a link to its markdown, so pointing an agent at that one URL is enough for it to find the rest."
						}
					</p>
				</DocsSection>

				<DocsSection
					id="sketch-provider"
					title="SketchProvider"
					description="Shares the seed with every sketch component below it. Every other drawing option comes from the --sketch-* CSS variables."
				>
					<DocsSection.Reference rows={PROVIDER_PROPS} />
					<DocsSection.Block label="Draw the whole page rougher">
						<CodeBlock code={PROVIDER_OPTIONS_SNIPPET} />
					</DocsSection.Block>
					<DocsSection.Block label="Option precedence, lowest to highest">
						<p className="text-muted-foreground text-sm">
							{
								"CSS variables read from the element, then the options passed to the hook. The seed is the exception. It comes from --sketch-seed when the element sets one, otherwise from the provider, and is always mixed with the hook id."
							}
						</p>
					</DocsSection.Block>
				</DocsSection>

				<DocsSection
					id="use-sketch-outline"
					title="useSketchOutline"
					description="Returns a ref and a style for an absolutely positioned svg that traces the parent element."
				>
					<CodeBlock code={OUTLINE_SNIPPET} />
					<p className="text-muted-foreground text-sm">
						{
							"The parent needs position: relative and isolate so the svg can sit behind the content. The outline is measured from the padding box and redrawn whenever the element resizes or its class or style attribute changes."
						}
					</p>
					<DocsSection.Reference rows={OUTLINE_OPTIONS} />
					<DocsSection.Block label="Live">
						<div className="flex flex-wrap items-center gap-4 p-4">
							<OutlinePreview>Default</OutlinePreview>
							<OutlinePreview strokeLineDash={[6, 4]}>Dashed</OutlinePreview>
							<OutlinePreview className="[--sketch-roughness:2.8]">
								Rougher
							</OutlinePreview>
							<OutlinePreview shape="underline" className="px-1 py-1">
								Underline
							</OutlinePreview>
						</div>
					</DocsSection.Block>
				</DocsSection>

				<DocsSection
					id="use-sketch-bg"
					title="useSketchBg"
					description="useSketchOutline drawn from the --sketch-bg-* variables, giving a hatched fill and no stroke. Anything it does not define falls back to the shared --sketch-* value."
				>
					<CodeBlock code={BG_SNIPPET} />
					<DocsSection.Reference rows={BG_DEFAULTS} />
					<DocsSection.Block label="Override the hatch angle">
						<CodeBlock code={BG_HACHURE_ANGLE_SNIPPET} />
					</DocsSection.Block>
					<DocsSection.Block label="Live">
						<div className="flex flex-wrap items-center gap-4 p-4">
							<BgPreview className="text-primary">Hachure</BgPreview>
							<BgPreview className="text-primary" fillStyle="cross-hatch">
								Cross hatch
							</BgPreview>
							<BgPreview
								className="text-primary"
								fillStyle="zigzag"
								hachureGap={6}
							>
								Zigzag
							</BgPreview>
							<BgPreview className="text-primary [--sketch-bg-hachure-angle:0]">
								Flat hatch
							</BgPreview>
							<BgPreview className="text-primary [--sketch-bg-hachure-angle:90]">
								Upright hatch
							</BgPreview>
						</div>
					</DocsSection.Block>
				</DocsSection>

				<DocsSection
					id="css-variables"
					title="CSS variables"
					description="sketch.css ships defaults on :root, and any element can override them for its own outline."
				>
					<DocsSection.Reference rows={CSS_VARIABLES} />
					<DocsSection.Block label="Two values, side by side">
						<CssVariableGallery />
					</DocsSection.Block>
					<DocsSection.Block label="Override on a subtree">
						<CodeBlock code={CSS_VARIABLES_SNIPPET} />
					</DocsSection.Block>
					<p className="text-muted-foreground text-sm">
						{
							"Variables are read from the drawn element itself, so they cascade like any other CSS custom property and work with Tailwind arbitrary properties, variants, and dark mode. "
						}
						<Link
							to="/sketch-styles"
							className="underline decoration-dashed underline-offset-4 transition-colors hover:text-foreground"
						>
							Read sketch.css in full
						</Link>
						{"."}
					</p>
				</DocsSection>

				<DocsSection
					id="animations"
					title="Animations"
					description="sketch.css ships five keyframes. They are global, so any element can use them through --sketch-dash-animation, an animation shorthand, or a Tailwind arbitrary animate-[…] value."
				>
					<DocsSection.Reference rows={KEYFRAMES} />
					<DocsSection.Block label="Live, the dashed ones loop and the rest react to hover">
						<KeyframeGallery />
					</DocsSection.Block>
					<DocsSection.Block label="The keyframes, as shipped">
						<CodeBlock code={KEYFRAMES_SNIPPET} lang="css" />
					</DocsSection.Block>
					<DocsSection.Block label="Use them on your own elements">
						<CodeBlock code={ANIMATION_USAGE_SNIPPET} />
					</DocsSection.Block>
					<DocsSection.Block label="Already silenced under prefers-reduced-motion">
						<CodeBlock code={REDUCED_MOTION_SNIPPET} lang="css" />
					</DocsSection.Block>
					<p className="text-muted-foreground text-sm">
						{
							"Animations you add yourself are not covered by that block, so pair them with motion-reduce:animate-none."
						}
					</p>
				</DocsSection>

				<DocsSection
					id="data-attributes"
					variant="graph"
					title="Data attributes"
					description="sketch.css styles these attributes wherever they appear, so they work on your own markup, not only inside the components."
				>
					<DocsSection.Reference rows={DATA_ATTRIBUTES} />
					<DocsSection.Block label="Wipe any hachure svg">
						<CodeBlock code={REVEAL_SNIPPET} />
					</DocsSection.Block>
					<DocsSection.Block label="Paper texture behind any element">
						<CodeBlock code={PAPER_SNIPPET} />
					</DocsSection.Block>
					<p className="text-muted-foreground text-sm">
						{
							"The reveal mask is driven by --sketch-bg-reveal-lead and --sketch-bg-reveal-trail, declared with @property so they can be animated. Treat them as internal to the reveal; the angle follows --sketch-bg-hachure-angle."
						}
					</p>
				</DocsSection>
			</div>
		</div>
	);
}
