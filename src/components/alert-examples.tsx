import { AlertTriangle, CheckCircle, InfoCircle } from "@boxicons/react";
import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from "../../registry/components/ui/alert";
import { Button } from "../../registry/components/ui/button";
import { ShowcaseCard } from "./showcase-card";

const BASIC_SNIPPET = `import { InfoCircle } from "@boxicons/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ReleaseNote() {
  return (
    <Alert>
      <InfoCircle />
      <AlertTitle>Sketchcn 1.2 is out</AlertTitle>
      <AlertDescription>
        Alerts now draw their own outline with RoughJS.
      </AlertDescription>
    </Alert>
  );
}`;

const DESTRUCTIVE_SNIPPET = `import { AlertTriangle } from "@boxicons/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function UploadError() {
  return (
    <Alert variant="destructive">
      <AlertTriangle />
      <AlertTitle>Upload failed</AlertTitle>
      <AlertDescription>
        The file is larger than the 5 MB limit.
      </AlertDescription>
    </Alert>
  );
}`;

const ACTION_SNIPPET = `import { CheckCircle } from "@boxicons/react";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function DraftSaved() {
  return (
    <Alert>
      <CheckCircle />
      <AlertTitle>Draft saved</AlertTitle>
      <AlertDescription>You can keep sketching from any device.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="ghost">
          Undo
        </Button>
      </AlertAction>
    </Alert>
  );
}`;

const PAPER_SNIPPET = `import { AlertTriangle } from "@boxicons/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function MaintenanceNotice() {
  return (
    <Alert paper="graph" variant="destructive">
      <AlertTriangle />
      <AlertTitle>Scheduled maintenance</AlertTitle>
      <AlertDescription>
        Sketches are read-only until 18:00.
      </AlertDescription>
    </Alert>
  );
}`;

const CALM_SNIPPET = `import { Alert, AlertTitle } from "@/components/ui/alert";

export function CalmAlert() {
  return (
    <Alert className="[--sketch-roughness:0.4] [--sketch-bowing:0.6]">
      <AlertTitle>A steadier hand drew this one</AlertTitle>
    </Alert>
  );
}`;

export function AlertExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Notices, errors, inline actions, and a steadier drawing hand."
		>
			<ShowcaseCard.Example label="Release note" code={BASIC_SNIPPET}>
				<Alert>
					<InfoCircle />
					<AlertTitle>Sketchcn 1.2 is out</AlertTitle>
					<AlertDescription>
						Alerts now draw their own outline with RoughJS.
					</AlertDescription>
				</Alert>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Upload error" code={DESTRUCTIVE_SNIPPET}>
				<Alert variant="destructive">
					<AlertTriangle />
					<AlertTitle>Upload failed</AlertTitle>
					<AlertDescription>
						The file is larger than the 5 MB limit.
					</AlertDescription>
				</Alert>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="With action" code={ACTION_SNIPPET}>
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
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Paper texture" code={PAPER_SNIPPET}>
				<Alert paper="graph" variant="destructive">
					<AlertTriangle />
					<AlertTitle>Scheduled maintenance</AlertTitle>
					<AlertDescription>
						Sketches are read-only until 18:00.
					</AlertDescription>
				</Alert>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Steadier outline" code={CALM_SNIPPET}>
				<Alert className="[--sketch-roughness:0.4] [--sketch-bowing:0.6]">
					<AlertTitle>A steadier hand drew this one</AlertTitle>
				</Alert>
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}
