import { Palette } from "@boxicons/react";
import { Button } from "../../registry/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../../registry/components/ui/tooltip";
import { ShowcaseCard } from "./showcase-card";

const SETUP_SNIPPET = `import { TooltipProvider } from "@/components/ui/tooltip";

export function App({ children }: { children: React.ReactNode }) {
  return <TooltipProvider>{children}</TooltipProvider>;
}`;

const BASIC_SNIPPET = `import { Palette } from "@boxicons/react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function PaletteButton() {
  return (
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
  );
}`;

const SIDE_SNIPPET = `<Tooltip>
  <TooltipTrigger render={<Button variant="outline">Layers</Button>} />
  <TooltipContent side="right" sideOffset={12}>
    Show the layer panel
  </TooltipContent>
</Tooltip>`;

const PAPER_SNIPPET = `<Tooltip>
  <TooltipTrigger render={<Button variant="outline">Grid</Button>} />
  <TooltipContent variant="graph">Snap strokes to the grid</TooltipContent>
</Tooltip>`;

const DELAY_SNIPPET = `<TooltipProvider delay={0}>
  <Tooltip>
    <TooltipTrigger render={<Button variant="outline">Instant</Button>} />
    <TooltipContent>Opens with no delay</TooltipContent>
  </Tooltip>
</TooltipProvider>`;

export function TooltipExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Wrap the app in TooltipProvider once, then pair a trigger with its content."
		>
			<TooltipProvider>
				<ShowcaseCard.Example label="Setup" code={SETUP_SNIPPET}>
					<p className="text-muted-foreground text-sm">
						{
							"Render <TooltipProvider> once near the root of your app so every tooltip shares one open delay."
						}
					</p>
				</ShowcaseCard.Example>
				<ShowcaseCard.Example label="Icon button" code={BASIC_SNIPPET}>
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
				</ShowcaseCard.Example>
				<ShowcaseCard.Example label="Side and offset" code={SIDE_SNIPPET}>
					<Tooltip>
						<TooltipTrigger
							render={<Button variant="outline">Layers</Button>}
						/>
						<TooltipContent side="right" sideOffset={12}>
							Show the layer panel
						</TooltipContent>
					</Tooltip>
				</ShowcaseCard.Example>
				<ShowcaseCard.Example label="Paper texture" code={PAPER_SNIPPET}>
					<Tooltip>
						<TooltipTrigger render={<Button variant="outline">Grid</Button>} />
						<TooltipContent variant="graph">
							Snap strokes to the grid
						</TooltipContent>
					</Tooltip>
				</ShowcaseCard.Example>
				<ShowcaseCard.Example label="No delay" code={DELAY_SNIPPET}>
					<TooltipProvider delay={0}>
						<Tooltip>
							<TooltipTrigger
								render={<Button variant="outline">Instant</Button>}
							/>
							<TooltipContent>Opens with no delay</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</ShowcaseCard.Example>
			</TooltipProvider>
		</ShowcaseCard>
	);
}
