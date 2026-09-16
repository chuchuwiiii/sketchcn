import { Button } from "../../registry/components/ui/button";
import { toast } from "../../registry/components/ui/toast";
import { ShowcaseCard } from "./showcase-card";

const TOAST_TYPES = ["success", "info", "warning", "error", "loading"] as const;

const PAPER_TOASTS = [
	{ type: "success", variant: "graph" },
	{ type: "info", variant: "polkadots" },
	{ type: "warning", variant: "plus" },
	{ type: "error", variant: "hexagons" },
	{ type: "loading", variant: "filled-dots" },
] as const;

const TYPE_MESSAGES = {
	success: {
		title: "Sketch saved",
		description: "Everyone on the board can see it now.",
	},
	info: {
		title: "Autosave is on",
		description: "We keep the last 30 versions of every sketch.",
	},
	warning: {
		title: "Running low on space",
		description: "You have used 92% of your workspace.",
	},
	error: {
		title: "Upload failed",
		description: "The file is larger than the 5 MB limit.",
	},
	loading: {
		title: "Exporting sketch",
		description: "Rendering the strokes to PNG.",
	},
} as const;

export function ToastShowcaseCard() {
	return (
		<ShowcaseCard
			title="Toast"
			description="Hand-drawn toasts that stack, expand on hover, and swipe away."
		>
			<ShowcaseCard.Row label="Types">
				{TOAST_TYPES.map((type) => (
					<Button
						key={type}
						variant="outline"
						onClick={() => toast.add({ type, ...TYPE_MESSAGES[type] })}
					>
						{type}
					</Button>
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row
				label="Paper textures"
				note="The pattern takes the toast type colour"
			>
				{PAPER_TOASTS.map(({ type, variant }) => (
					<Button
						key={variant}
						variant="outline"
						onClick={() =>
							toast.add({
								type,
								...TYPE_MESSAGES[type],
								data: { variant },
							})
						}
					>
						{variant}
					</Button>
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Plain">
				<Button
					variant="outline"
					onClick={() => toast.add({ title: "Stroke smoothed" })}
				>
					Title only
				</Button>
				<Button
					variant="outline"
					onClick={() =>
						toast.add({
							title: "Layer hidden",
							description: "Toggle it back from the layers panel.",
						})
					}
				>
					With description
				</Button>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With action">
				<Button
					variant="outline"
					onClick={() =>
						toast.add({
							title: "Sketch deleted",
							description: "It moves to the bin for 30 days.",
							actionProps: {
								children: "Undo",
								onClick: () =>
									toast.add({ type: "success", title: "Sketch restored" }),
							},
						})
					}
				>
					Deleted with undo
				</Button>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Stacking" note="Hover the stack to expand it">
				<Button
					variant="outline"
					onClick={() => {
						for (const [index, type] of TOAST_TYPES.slice(0, 3).entries()) {
							toast.add({
								type,
								title: `${TYPE_MESSAGES[type].title} (${index + 1})`,
								description: TYPE_MESSAGES[type].description,
							});
						}
					}}
				>
					Add three toasts
				</Button>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
