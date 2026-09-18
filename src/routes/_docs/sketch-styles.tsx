import { createFileRoute } from "@tanstack/react-router";
import { CodeBlock } from "../../components/code-block";
import { DocsSection } from "../../components/docs-section";
import { SKETCH_CSS } from "../../lib/docs/sketch-css";
import { seo } from "../../lib/seo";

export const Route = createFileRoute("/_docs/sketch-styles")({
	head: () =>
		seo({
			title: "Sketch Styles — Sketchcn",
			description:
				"sketch.css in full: the drawing variables every Sketchcn component reads, the paper textures, the animation keyframes, and the reduced-motion rules.",
			path: "/sketch-styles",
		}),
	component: SketchStylesPage,
});

const IMPORT_SNIPPET = `import "./sketch.css";`;

function SketchStylesPage() {
	return (
		<div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-8">
			<header className="flex flex-col gap-2">
				<h1 className="text-4xl">Sketch Styles</h1>
				<p className="text-muted-foreground">
					{
						"sketch.css in full. It carries the drawing variables every component reads, the paper textures, the animation keyframes, and the reduced-motion rules."
					}
				</p>
			</header>

			<DocsSection
				id="installing"
				title="Where it comes from"
				description="The shadcn CLI writes sketch.css next to sketch-provider, which imports it. Adding any component pulls both in, so there is nothing to wire up."
			>
				<DocsSection.Block label="sketch-provider.tsx, first line">
					<CodeBlock code={IMPORT_SNIPPET} />
				</DocsSection.Block>
				<p className="text-muted-foreground text-sm">
					{
						"Copying a component by hand instead of using the CLI means copying this file too, otherwise outlines draw unstyled and nothing animates."
					}
				</p>
			</DocsSection>

			<DocsSection
				id="sketch-css"
				variant="graph"
				title="sketch.css"
				description="The file as installed. Every component page links back here."
			>
				<CodeBlock code={SKETCH_CSS} lang="css" />
			</DocsSection>
		</div>
	);
}
