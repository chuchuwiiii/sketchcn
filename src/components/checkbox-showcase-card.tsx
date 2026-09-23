import { Checkbox } from "../../registry/components/ui/checkbox";
import { ShowcaseCard } from "./showcase-card";

const TICK_SAMPLES = ["one", "two", "three", "four", "five"] as const;

export function CheckboxShowcaseCard() {
	return (
		<ShowcaseCard
			title="Checkbox"
			description="Every hand-drawn checkbox state, each with its own tick."
		>
			<ShowcaseCard.Row label="Ticks">
				{TICK_SAMPLES.map((sample) => (
					<Checkbox key={sample} defaultChecked aria-label={`Tick ${sample}`} />
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Unchecked">
				<Checkbox aria-label="Unchecked" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Invalid">
				<Checkbox aria-invalid aria-label="Invalid" />
				<Checkbox aria-invalid defaultChecked aria-label="Invalid checked" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Disabled">
				<Checkbox disabled aria-label="Disabled" />
				<Checkbox disabled defaultChecked aria-label="Disabled checked" />
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
