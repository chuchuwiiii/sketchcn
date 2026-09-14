import { AlertTriangle, InfoCircle } from "@boxicons/react";
import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from "../../registry/components/ui/alert";
import { Button } from "../../registry/components/ui/button";
import { ShowcaseCard } from "./showcase-card";

export function AlertShowcaseCard() {
	return (
		<ShowcaseCard
			title="Alert"
			description="A hand-drawn callout whose outline is sketched around the message."
		>
			<ShowcaseCard.Row label="Default">
				<Alert>
					<InfoCircle />
					<AlertTitle>Sketchcn just got a new pen</AlertTitle>
					<AlertDescription>
						Every outline is drawn with RoughJS, so no two alerts look alike.
					</AlertDescription>
				</Alert>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Destructive">
				<Alert variant="destructive">
					<AlertTriangle />
					<AlertTitle>{"Your sketch couldn't be saved"}</AlertTitle>
					<AlertDescription>
						Check your connection and try drawing it again.
					</AlertDescription>
				</Alert>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With action">
				<Alert>
					<InfoCircle />
					<AlertTitle>A new pencil set is available</AlertTitle>
					<AlertDescription>
						Update the registry to pick up the latest components.
					</AlertDescription>
					<AlertAction>
						<Button size="xs" variant="outline">
							Update
						</Button>
					</AlertAction>
				</Alert>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row
				label="Paper textures"
				note={
					<ShowcaseCard.Note
						href="https://heropatterns.com/"
						linkLabel="Hero Patterns"
					>
						{"Patterns from "}
					</ShowcaseCard.Note>
				}
			>
				<Alert paper="polkadots">
					<InfoCircle />
					<AlertTitle>Polka dots</AlertTitle>
					<AlertDescription>{"Bullet-journal dot paper."}</AlertDescription>
				</Alert>
				<Alert paper="hexagons">
					<InfoCircle />
					<AlertTitle>Hexagons</AlertTitle>
					<AlertDescription>{"Honeycomb hexagon grid."}</AlertDescription>
				</Alert>
				<Alert paper="graph">
					<InfoCircle />
					<AlertTitle>Graph</AlertTitle>
					<AlertDescription>{"Engineering graph paper."}</AlertDescription>
				</Alert>
				<Alert paper="plus">
					<InfoCircle />
					<AlertTitle>Plus</AlertTitle>
					<AlertDescription>{"Scattered plus-sign paper."}</AlertDescription>
				</Alert>
				<Alert paper="filled-dots">
					<InfoCircle />
					<AlertTitle>Filled dots</AlertTitle>
					<AlertDescription>{"Tight pinprick dot grid."}</AlertDescription>
				</Alert>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Title only">
				<Alert>
					<AlertTitle>Saved to your sketchbook</AlertTitle>
				</Alert>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
