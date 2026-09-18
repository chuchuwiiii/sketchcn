import { AlertTriangle, CheckCircle, InfoCircle } from "@boxicons/react";
import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from "../../../registry/components/ui/alert";
import { Button } from "../../../registry/components/ui/button";
import { Demo } from "../demo";

export function AlertBasicDemo() {
	return (
		<Demo>
			<Alert>
				<InfoCircle />
				<AlertTitle>Sketchcn 1.2 is out</AlertTitle>
				<AlertDescription>
					Alerts now draw their own outline with RoughJS.
				</AlertDescription>
			</Alert>
		</Demo>
	);
}

export function AlertDestructiveDemo() {
	return (
		<Demo>
			<Alert variant="destructive">
				<AlertTriangle />
				<AlertTitle>Upload failed</AlertTitle>
				<AlertDescription>
					The file is larger than the 5 MB limit.
				</AlertDescription>
			</Alert>
		</Demo>
	);
}

export function AlertActionDemo() {
	return (
		<Demo>
			<Alert>
				<CheckCircle />
				<AlertTitle>Draft saved</AlertTitle>
				<AlertDescription>
					You can keep sketching from any device.
				</AlertDescription>
				<AlertAction>
					<Button size="xs" variant="ghost">
						Undo
					</Button>
				</AlertAction>
			</Alert>
		</Demo>
	);
}

export function AlertPaperDemo() {
	return (
		<Demo>
			<Alert paper="graph" variant="destructive">
				<AlertTriangle />
				<AlertTitle>Scheduled maintenance</AlertTitle>
				<AlertDescription>Sketches are read-only until 18:00.</AlertDescription>
			</Alert>
		</Demo>
	);
}

export function AlertCalmDemo() {
	return (
		<Demo>
			<Alert className="[--sketch-roughness:0.4] [--sketch-bowing:0.6]">
				<AlertTitle>A steadier hand drew this one</AlertTitle>
			</Alert>
		</Demo>
	);
}
