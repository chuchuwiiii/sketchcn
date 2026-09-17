import { Palette } from "@boxicons/react";
import { Button } from "../../registry/components/ui/button";
import { PAPER_VARIANTS } from "../../registry/components/ui/sketch-provider";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../../registry/components/ui/tooltip";
import { ShowcaseCard } from "./showcase-card";

const SIDES = ["top", "right", "bottom", "left"] as const;

const ALIGNMENTS = ["start", "center", "end"] as const;

export function TooltipShowcaseCard() {
	return (
		<ShowcaseCard
			title="Tooltip"
			description="Hand-drawn tooltips that follow their trigger on every side."
		>
			<TooltipProvider>
				<ShowcaseCard.Row label="Sides">
					{SIDES.map((side) => (
						<Tooltip key={side}>
							<TooltipTrigger
								render={<Button variant="outline">{side}</Button>}
							/>
							<TooltipContent
								side={side}
							>{`Drawn on the ${side}`}</TooltipContent>
						</Tooltip>
					))}
				</ShowcaseCard.Row>
				<ShowcaseCard.Row label="Alignment" note="Relative to the trigger edge">
					{ALIGNMENTS.map((align) => (
						<Tooltip key={align}>
							<TooltipTrigger
								render={
									<Button variant="outline" className="w-40">
										{align}
									</Button>
								}
							/>
							<TooltipContent align={align}>{align}</TooltipContent>
						</Tooltip>
					))}
				</ShowcaseCard.Row>
				<ShowcaseCard.Row label="Paper textures">
					{PAPER_VARIANTS.map((variant) => (
						<Tooltip key={variant}>
							<TooltipTrigger
								render={<Button variant="outline">{variant}</Button>}
							/>
							<TooltipContent variant={variant}>{variant}</TooltipContent>
						</Tooltip>
					))}
				</ShowcaseCard.Row>
				<ShowcaseCard.Row label="Icon trigger">
					<Tooltip>
						<TooltipTrigger
							render={
								<Button variant="outline" size="icon" aria-label="Palette">
									<Palette />
								</Button>
							}
						/>
						<TooltipContent>Change the palette</TooltipContent>
					</Tooltip>
				</ShowcaseCard.Row>
				<ShowcaseCard.Row label="Long text" note="Wraps at max-width">
					<Tooltip>
						<TooltipTrigger
							render={<Button variant="outline">Export</Button>}
						/>
						<TooltipContent>
							{
								"Exports every visible layer to a PNG at twice the canvas resolution."
							}
						</TooltipContent>
					</Tooltip>
				</ShowcaseCard.Row>
			</TooltipProvider>
		</ShowcaseCard>
	);
}
