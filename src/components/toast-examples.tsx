import { Button } from "../../registry/components/ui/button";
import { toast } from "../../registry/components/ui/toast";
import { ShowcaseCard } from "./showcase-card";

const SETUP_SNIPPET = `import { Toaster } from "@/components/ui/toast";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
}`;

const BASIC_SNIPPET = `import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function SaveButton() {
  return (
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
  );
}`;

const ACTION_SNIPPET = `import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function DeleteButton() {
  return (
    <Button
      variant="destructive"
      onClick={() =>
        toast.add({
          title: "Sketch deleted",
          description: "It moves to the bin for 30 days.",
          actionProps: { children: "Undo", onClick: restoreSketch },
        })
      }
    >
      Delete sketch
    </Button>
  );
}`;

const PAPER_SNIPPET = `import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function PublishButton() {
  return (
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
  );
}`;

const PROMISE_SNIPPET = `import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function ExportButton() {
  return (
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
  );
}`;

const PERSISTENT_SNIPPET = `import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";

export function ConnectionToast() {
  return (
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
  );
}`;

function exportSketch() {
	return new Promise<string>((resolve) => {
		setTimeout(() => resolve("sketch.png"), 2000);
	});
}

export function ToastExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Mount the Toaster once, then call toast from anywhere."
		>
			<ShowcaseCard.Example label="Setup" code={SETUP_SNIPPET}>
				<p className="text-muted-foreground text-sm">
					{
						"Render <Toaster /> once near the root of your app. It portals its own viewport, so no other wiring is needed."
					}
				</p>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Save confirmation" code={BASIC_SNIPPET}>
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
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Undo an action" code={ACTION_SNIPPET}>
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
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Paper texture" code={PAPER_SNIPPET}>
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
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Promise" code={PROMISE_SNIPPET}>
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
			</ShowcaseCard.Example>
			<ShowcaseCard.Example
				label="Stays until dismissed"
				code={PERSISTENT_SNIPPET}
			>
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
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}
