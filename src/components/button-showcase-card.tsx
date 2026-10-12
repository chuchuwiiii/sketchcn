import { Pencil, Plus, Trash2 } from "@matita/icons/react";
import {
	BUTTON_SIZES,
	BUTTON_VARIANTS,
	Button,
	ICON_BUTTON_SIZES,
} from "../../registry/components/ui/button";
import { ShowcaseCard } from "./showcase-card";

export function ButtonShowcaseCard() {
	return (
		<ShowcaseCard
			title="Button"
			description="Every hand-drawn button variant, size and state."
		>
			<ShowcaseCard.Row label="Variants">
				{BUTTON_VARIANTS.map((variant) => (
					<Button key={variant} variant={variant}>
						{variant}
					</Button>
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Sizes">
				{BUTTON_SIZES.map((size) => (
					<Button key={size} size={size}>
						{size}
					</Button>
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Icon sizes">
				{ICON_BUTTON_SIZES.map((size) => (
					<Button key={size} size={size} aria-label={`Edit (${size})`}>
						<Pencil />
					</Button>
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With icons">
				<Button>
					<Plus />
					New sketch
				</Button>
				<Button variant="outline">
					Continue
					<Pencil />
				</Button>
				<Button variant="destructive">
					<Trash2 />
					Delete
				</Button>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Disabled">
				{BUTTON_VARIANTS.map((variant) => (
					<Button key={variant} variant={variant} disabled>
						{variant}
					</Button>
				))}
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
