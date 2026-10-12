import { Pencil } from "@matita/icons/react";
import { Button } from "../../registry/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../registry/components/ui/card";
import { ShowcaseCard } from "./showcase-card";

export function CardShowcaseCard() {
	return (
		<ShowcaseCard
			title="Card"
			description="Every hand-drawn card composition and size."
		>
			<ShowcaseCard.Row label="Sizes">
				<Card className="min-w-56 flex-1">
					<CardHeader>
						<CardTitle>Default size</CardTitle>
						<CardDescription>
							{"Comfortable spacing for most content."}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"Sketchy borders drawn at the default scale."}
						</p>
					</CardContent>
				</Card>
				<Card size="sm" className="min-w-56 flex-1">
					<CardHeader>
						<CardTitle>Small size</CardTitle>
						<CardDescription>
							{"Tighter spacing for dense layouts."}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"Sketchy borders drawn at the small scale."}
						</p>
					</CardContent>
				</Card>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With action">
				<Card className="min-w-56 flex-1">
					<CardHeader>
						<CardTitle>Sketch #12</CardTitle>
						<CardDescription>{"Last edited a moment ago."}</CardDescription>
						<CardAction>
							<Button variant="ghost" size="icon" aria-label="Edit sketch">
								<Pencil />
							</Button>
						</CardAction>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"An action sits beside the header content."}
						</p>
					</CardContent>
				</Card>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With footer">
				<Card className="min-w-56 flex-1">
					<CardHeader>
						<CardTitle>Publish sketch</CardTitle>
						<CardDescription>
							{"Share it with the rest of the team."}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-muted-foreground text-sm">
							{"A footer anchors actions to the bottom of the card."}
						</p>
					</CardContent>
					<CardFooter className="justify-end gap-2">
						<Button variant="ghost">Cancel</Button>
						<Button>Publish</Button>
					</CardFooter>
				</Card>
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
				<Card className="min-w-56 flex-1">
					<CardHeader>
						<CardTitle>Paper</CardTitle>
						<CardDescription>
							{"Flecked, handmade paper grain."}
						</CardDescription>
					</CardHeader>
				</Card>
				<Card variant="polkadots" className="min-w-56 flex-1">
					<CardHeader>
						<CardTitle>Polka dots</CardTitle>
						<CardDescription>{"Bullet-journal dot paper."}</CardDescription>
					</CardHeader>
				</Card>
				<Card variant="hexagons" className="min-w-56 flex-1">
					<CardHeader>
						<CardTitle>Hexagons</CardTitle>
						<CardDescription>{"Honeycomb hexagon grid."}</CardDescription>
					</CardHeader>
				</Card>
				<Card variant="graph" className="min-w-56 flex-1">
					<CardHeader>
						<CardTitle>Graph</CardTitle>
						<CardDescription>{"Engineering graph paper."}</CardDescription>
					</CardHeader>
				</Card>
				<Card variant="plus" className="min-w-56 flex-1">
					<CardHeader>
						<CardTitle>Plus</CardTitle>
						<CardDescription>{"Scattered plus-sign paper."}</CardDescription>
					</CardHeader>
				</Card>
				<Card variant="filled-dots" className="min-w-56 flex-1">
					<CardHeader>
						<CardTitle>Filled dots</CardTitle>
						<CardDescription>{"Fine speckled dot paper."}</CardDescription>
					</CardHeader>
				</Card>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
