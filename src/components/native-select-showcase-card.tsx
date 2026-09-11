import type { ComponentProps } from "react";
import {
	NativeSelect,
	NativeSelectOptGroup,
	NativeSelectOption,
} from "../../registry/components/ui/native-select";
import { ShowcaseCard } from "./showcase-card";

const PENS = {
	ballpoint: "Ballpoint",
	fineliner: "Fineliner",
	marker: "Marker",
	pencil: "Pencil",
};

export function NativeSelectShowcaseCard() {
	return (
		<ShowcaseCard
			title="Native Select"
			description="Every hand-drawn native select size and state."
		>
			<ShowcaseCard.Row label="Sizes">
				<PenSelect className="w-44" />
				<PenSelect size="sm" className="w-40" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Grouped">
				<NativeSelect className="w-44" defaultValue="marker">
					<NativeSelectOptGroup label="Wet ink">
						<NativeSelectOption value="ballpoint">Ballpoint</NativeSelectOption>
						<NativeSelectOption value="fineliner">Fineliner</NativeSelectOption>
						<NativeSelectOption value="marker">Marker</NativeSelectOption>
					</NativeSelectOptGroup>
					<NativeSelectOptGroup label="Dry">
						<NativeSelectOption value="pencil">Pencil</NativeSelectOption>
					</NativeSelectOptGroup>
				</NativeSelect>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Invalid">
				<PenSelect aria-invalid className="w-44" />
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Disabled">
				<PenSelect disabled defaultValue="pencil" className="w-44" />
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}

function PenSelect(props: ComponentProps<typeof NativeSelect>) {
	return (
		<NativeSelect {...props}>
			{Object.entries(PENS).map(([value, label]) => (
				<NativeSelectOption key={value} value={value}>
					{label}
				</NativeSelectOption>
			))}
		</NativeSelect>
	);
}
