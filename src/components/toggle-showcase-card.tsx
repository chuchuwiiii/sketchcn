import { Bold, Italic, Underline } from "@matita/icons/react";
import {
	TOGGLE_SIZES,
	TOGGLE_VARIANTS,
	Toggle,
} from "../../registry/components/ui/toggle";
import { ShowcaseCard } from "./showcase-card";

export function ToggleShowcaseCard() {
	return (
		<ShowcaseCard
			title="Toggle"
			description="Every hand-drawn toggle variant, size and state."
		>
			<ShowcaseCard.Row label="Variants">
				{TOGGLE_VARIANTS.map((variant) => (
					<Toggle key={variant} variant={variant}>
						{variant}
					</Toggle>
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Sizes">
				{TOGGLE_SIZES.map((size) => (
					<Toggle key={size} size={size}>
						{size}
					</Toggle>
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With icons">
				<Toggle aria-label="Toggle bold">
					<Bold />
					Bold
				</Toggle>
				<Toggle aria-label="Toggle italic">
					<Italic />
					Italic
				</Toggle>
				<Toggle aria-label="Toggle underline">
					<Underline />
					Underline
				</Toggle>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Pressed">
				<Toggle defaultPressed>Pressed</Toggle>
				<Toggle variant="outline" defaultPressed>
					Pressed outline
				</Toggle>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Disabled">
				<Toggle disabled>Disabled</Toggle>
				<Toggle variant="outline" disabled defaultPressed>
					Disabled pressed
				</Toggle>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
