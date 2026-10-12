import { ArrowRight } from "@matita/icons/react";
import { Link } from "@tanstack/react-router";
import { Button } from "../../registry/components/ui/button";
import { Card } from "../../registry/components/ui/card";
import { SketchProvider } from "../../registry/components/ui/sketch-provider";
import { ShowcaseCard } from "./showcase-card";
import { BgPreview, OutlinePreview } from "./sketch-docs-previews";

const SEEDS = [1, 42, 1234];

export function SketchProviderShowcaseCard() {
	return (
		<ShowcaseCard
			title="Sketch Provider"
			description="The foundation every Sketchcn component draws through."
		>
			<Card
				variant="plus"
				className="flex-row flex-wrap items-center justify-between gap-3 px-4"
			>
				<div className="flex flex-col">
					<span className="text-base">Provider documentation</span>
					<span className="text-muted-foreground text-sm">
						{"Every hook, prop and CSS variable, with live examples."}
					</span>
				</div>
				<Button size="sm" render={<Link to="/docs" />}>
					Read the docs
					<ArrowRight />
				</Button>
			</Card>
			<ShowcaseCard.Row label="Seeds">
				{SEEDS.map((seed) => (
					<SketchProvider key={seed} seed={seed}>
						<OutlinePreview>{`seed ${seed}`}</OutlinePreview>
					</SketchProvider>
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="useSketchOutline">
				<OutlinePreview>Default</OutlinePreview>
				<OutlinePreview strokeLineDash={[6, 4]}>Dashed</OutlinePreview>
				<OutlinePreview className="[--sketch-roughness:2.8]">
					Rougher
				</OutlinePreview>
				<OutlinePreview shape="underline" className="px-1 py-1">
					Underline
				</OutlinePreview>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="useSketchBg">
				<BgPreview className="text-primary">Hachure</BgPreview>
				<BgPreview className="text-primary" fillStyle="cross-hatch">
					Cross hatch
				</BgPreview>
				<BgPreview className="text-primary" fillStyle="zigzag" hachureGap={6}>
					Zigzag
				</BgPreview>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
