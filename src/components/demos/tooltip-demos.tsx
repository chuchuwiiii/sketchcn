import { Palette } from "@boxicons/react";
import { Button } from "../../../registry/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../../../registry/components/ui/tooltip";
import { Demo } from "../demo";

export function TooltipSetupDemo() {
	return (
		<Demo>
			<p className="text-muted-foreground text-sm">
				{
					"Render <TooltipProvider> once near the root of your app so every tooltip shares one open delay."
				}
			</p>
		</Demo>
	);
}

export function TooltipBasicDemo() {
	return (
		<Demo>
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
		</Demo>
	);
}

export function TooltipSideDemo() {
	return (
		<Demo>
			<Tooltip>
				<TooltipTrigger render={<Button variant="outline">Layers</Button>} />
				<TooltipContent side="right" sideOffset={12}>
					Show the layer panel
				</TooltipContent>
			</Tooltip>
		</Demo>
	);
}

export function TooltipPaperDemo() {
	return (
		<Demo>
			<Tooltip>
				<TooltipTrigger render={<Button variant="outline">Grid</Button>} />
				<TooltipContent variant="graph">
					Snap strokes to the grid
				</TooltipContent>
			</Tooltip>
		</Demo>
	);
}

export function TooltipDelayDemo() {
	return (
		<Demo>
			<TooltipProvider delay={0}>
				<Tooltip>
					<TooltipTrigger render={<Button variant="outline">Instant</Button>} />
					<TooltipContent>Opens with no delay</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</Demo>
	);
}
