import { useId, useState } from "react";
import {
	NativeSelect,
	NativeSelectOptGroup,
	NativeSelectOption,
} from "../../../registry/components/ui/native-select";
import { Demo } from "../demo";

const PAPERS = {
	graph: "Graph paper",
	dotted: "Dotted",
	plain: "Plain",
};

function PaperFieldPreview() {
	const id = useId();

	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id} className="text-sm">
				Paper
			</label>
			<NativeSelect id={id} name="paper" className="w-52">
				{Object.entries(PAPERS).map(([value, label]) => (
					<NativeSelectOption key={value} value={value}>
						{label}
					</NativeSelectOption>
				))}
			</NativeSelect>
		</div>
	);
}

function StrokePickerPreview() {
	const [stroke, setStroke] = useState("marker");

	return (
		<div className="flex items-center gap-3">
			<NativeSelect
				className="w-52"
				value={stroke}
				onChange={(event) => setStroke(event.target.value)}
			>
				<NativeSelectOptGroup label="Wet ink">
					<NativeSelectOption value="marker">Marker</NativeSelectOption>
					<NativeSelectOption value="fineliner">Fineliner</NativeSelectOption>
				</NativeSelectOptGroup>
				<NativeSelectOptGroup label="Dry">
					<NativeSelectOption value="pencil">Pencil</NativeSelectOption>
					<NativeSelectOption value="charcoal">Charcoal</NativeSelectOption>
				</NativeSelectOptGroup>
			</NativeSelect>
			<span className="text-sm">{`Drawing with ${stroke}`}</span>
		</div>
	);
}

export function NativeSelectFormFieldDemo() {
	return (
		<Demo>
			<PaperFieldPreview />
		</Demo>
	);
}

export function NativeSelectGroupedDemo() {
	return (
		<Demo>
			<StrokePickerPreview />
		</Demo>
	);
}
