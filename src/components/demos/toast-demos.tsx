import { Button } from "../../../registry/components/ui/button";
import { toast } from "../../../registry/components/ui/toast";
import { Demo } from "../demo";

function exportSketch() {
	return new Promise<string>((resolve) => {
		setTimeout(() => resolve("sketch.png"), 2000);
	});
}

export function ToastSetupDemo() {
	return (
		<Demo>
			<p className="text-muted-foreground text-sm">
				{
					"Render <Toaster /> once near the root of your app. It portals its own viewport, so no other wiring is needed."
				}
			</p>
		</Demo>
	);
}

export function ToastBasicDemo() {
	return (
		<Demo>
			<Button
				onClick={() =>
					toast.add({
						type: "success",
						title: "Sketch saved",
						description: "Everyone on the board can see it now.",
					})
				}
			>
				Save sketch
			</Button>
		</Demo>
	);
}

export function ToastActionDemo() {
	return (
		<Demo>
			<Button
				variant="destructive"
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
				Delete sketch
			</Button>
		</Demo>
	);
}

export function ToastPaperDemo() {
	return (
		<Demo>
			<Button
				onClick={() =>
					toast.add({
						type: "warning",
						title: "Running low on space",
						description: "You have used 92% of your workspace.",
						data: { variant: "plus" },
					})
				}
			>
				Publish
			</Button>
		</Demo>
	);
}

export function ToastPromiseDemo() {
	return (
		<Demo>
			<Button
				onClick={() =>
					toast.promise(exportSketch(), {
						loading: "Exporting sketch",
						success: "Export ready",
						error: "Export failed",
					})
				}
			>
				Export PNG
			</Button>
		</Demo>
	);
}

export function ToastPersistentDemo() {
	return (
		<Demo>
			<Button
				variant="outline"
				onClick={() =>
					toast.add({
						type: "warning",
						title: "You are offline",
						description: "Changes are queued until the connection is back.",
						timeout: 0,
						priority: "high",
					})
				}
			>
				Go offline
			</Button>
		</Demo>
	);
}
