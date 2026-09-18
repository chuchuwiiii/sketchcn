import { Bold, Italic, TextUnderline } from "@boxicons/react";
import { useState } from "react";
import { Toggle } from "../../../registry/components/ui/toggle";
import { Demo } from "../demo";

const TEXT_MARKS = [
	{ value: "bold", label: "Bold", Icon: Bold },
	{ value: "italic", label: "Italic", Icon: Italic },
	{ value: "underline", label: "Underline", Icon: TextUnderline },
] as const;

function TextToolbarPreview() {
	const [marks, setMarks] = useState<string[]>(["bold"]);

	function toggleMark(value: string, pressed: boolean) {
		setMarks((current) => {
			if (pressed) {
				return [...current, value];
			}

			return current.filter((mark) => mark !== value);
		});
	}

	return (
		<div className="flex gap-1">
			{TEXT_MARKS.map(({ value, label, Icon }) => (
				<Toggle
					key={value}
					variant="outline"
					size="sm"
					aria-label={label}
					pressed={marks.includes(value)}
					onPressedChange={(pressed) => toggleMark(value, pressed)}
				>
					<Icon />
				</Toggle>
			))}
		</div>
	);
}

function DraftsFilterPreview() {
	const [showDrafts, setShowDrafts] = useState(false);

	return (
		<Toggle pressed={showDrafts} onPressedChange={setShowDrafts}>
			Show drafts
		</Toggle>
	);
}

export function ToggleToolbarDemo() {
	return (
		<Demo>
			<TextToolbarPreview />
		</Demo>
	);
}

export function ToggleFilterDemo() {
	return (
		<Demo>
			<DraftsFilterPreview />
		</Demo>
	);
}
