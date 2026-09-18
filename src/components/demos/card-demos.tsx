import { ArrowRight } from "@boxicons/react";
import { useId } from "react";
import { Button } from "../../../registry/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../../registry/components/ui/card";
import { Input } from "../../../registry/components/ui/input";
import { Switch } from "../../../registry/components/ui/switch";
import { Demo } from "../demo";

function NotificationsCardPreview() {
	const id = useId();

	return (
		<Card size="sm" className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Notifications</CardTitle>
				<CardDescription>{"Choose what lands in your inbox."}</CardDescription>
				<CardAction>
					<Switch id={id} defaultChecked aria-label="Notifications" />
				</CardAction>
			</CardHeader>
			<CardContent className="text-muted-foreground text-sm">
				{"Weekly digests only, never more than one per week."}
			</CardContent>
		</Card>
	);
}

export function CardSignInDemo() {
	return (
		<Demo>
			<Card variant="graph" className="w-full max-w-sm">
				<CardHeader>
					<CardTitle>Welcome back</CardTitle>
					<CardDescription>{"Sign in to keep sketching."}</CardDescription>
				</CardHeader>
				<CardContent className="flex flex-col gap-3">
					<Input type="email" placeholder="hello@chuwii.com" />
					<Input type="password" placeholder="Password" />
				</CardContent>
				<CardFooter>
					<Button className="w-full">Sign in</Button>
				</CardFooter>
			</Card>
		</Demo>
	);
}

export function CardSettingsDemo() {
	return (
		<Demo>
			<NotificationsCardPreview />
		</Demo>
	);
}

export function CardLinkCardDemo() {
	return (
		<Demo>
			<Card className="w-full max-w-sm transition-transform hover:-translate-y-1">
				<CardHeader>
					<CardTitle className="flex items-center justify-between gap-2">
						Button
						<ArrowRight className="size-4" />
					</CardTitle>
					<CardDescription>{"A hand-drawn Base UI button."}</CardDescription>
				</CardHeader>
			</Card>
		</Demo>
	);
}
