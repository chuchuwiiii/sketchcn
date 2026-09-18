import { useId, useState } from "react";
import { Switch } from "../../../registry/components/ui/switch";
import { Demo } from "../demo";

function SettingRowPreview() {
	const id = useId();

	return (
		<div className="flex w-full items-center justify-between gap-4">
			<div className="flex flex-col">
				<label htmlFor={id} className="text-sm">
					Rough edges
				</label>
				<span className="text-muted-foreground text-xs">
					{"Redraw every outline with a hand-drawn wobble."}
				</span>
			</div>
			<Switch id={id} defaultChecked />
		</div>
	);
}

function AutosaveTogglePreview() {
	const [autosave, setAutosave] = useState(true);
	const autosaveLabel = autosave ? "on" : "off";

	return (
		<div className="flex items-center gap-3">
			<Switch
				checked={autosave}
				onCheckedChange={setAutosave}
				aria-label="Autosave"
			/>
			<span className="text-sm">{`Autosave is ${autosaveLabel}`}</span>
		</div>
	);
}

export function SwitchSettingRowDemo() {
	return (
		<Demo>
			<SettingRowPreview />
		</Demo>
	);
}

export function SwitchControlledDemo() {
	return (
		<Demo>
			<AutosaveTogglePreview />
		</Demo>
	);
}
