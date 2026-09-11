import { useId, useState } from "react";
import {
	NativeSelect,
	NativeSelectOptGroup,
	NativeSelectOption,
} from "../../registry/components/ui/native-select";
import { ShowcaseCard } from "./showcase-card";

const PAPERS = {
	graph: "Graph paper",
	dotted: "Dotted",
	plain: "Plain",
};

const FORM_FIELD_SNIPPET = `import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

const PAPERS = {
  graph: "Graph paper",
  dotted: "Dotted",
  plain: "Plain",
};

export function PaperField() {
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
}`;

const GROUPED_SNIPPET = `import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";

export function StrokePicker() {
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
      <span className="text-sm">Drawing with {stroke}</span>
    </div>
  );
}`;

export function NativeSelectExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Form fields and grouped, controlled native selects."
		>
			<ShowcaseCard.Example label="Form field" code={FORM_FIELD_SNIPPET}>
				<PaperFieldPreview />
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Grouped" code={GROUPED_SNIPPET}>
				<StrokePickerPreview />
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}

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
