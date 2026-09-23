import {
	Bell,
	Cart,
	Check,
	Github,
	Google,
	Package,
	Send,
} from "@boxicons/react";
import { useState } from "react";
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "../../registry/components/ui/alert";
import {
	Avatar,
	AvatarBadge,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
} from "../../registry/components/ui/avatar";
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
import { Checkbox } from "../../registry/components/ui/checkbox";
import { Input } from "../../registry/components/ui/input";
import {
	NativeSelect,
	NativeSelectOption,
} from "../../registry/components/ui/native-select";
import { Separator } from "../../registry/components/ui/separator";
import { Switch } from "../../registry/components/ui/switch";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../../registry/components/ui/tabs";
import { Textarea } from "../../registry/components/ui/textarea";
import { Toggle } from "../../registry/components/ui/toggle";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "../../registry/components/ui/tooltip";

const PLAN_PRICES = [
	{ period: "monthly", label: "Monthly", price: "$12", unit: "/ month" },
	{ period: "yearly", label: "Yearly", price: "$120", unit: "/ year" },
];

const PLAN_FEATURES = [
	"Unlimited sketches",
	"Every paper variant",
	"Priority support",
];

const NOTIFICATION_SETTINGS = [
	{ id: "comments", label: "Comments", defaultChecked: true },
	{ id: "mentions", label: "Mentions", defaultChecked: true },
	{ id: "weekly-digest", label: "Weekly digest", defaultChecked: false },
];

const TODOS = [
	{ id: "wireframe", label: "Sketch the wireframe", done: true },
	{ id: "palette", label: "Pick a palette", done: true },
	{ id: "review", label: "Design review", done: false },
	{ id: "ship", label: "Ship it", done: false },
];

const TEAM_MEMBERS = [
	{ initials: "CW", name: "Chuwong", email: "chu@chuwii.com", role: "owner" },
	{ initials: "MK", name: "Mali K.", email: "mali@chuwii.com", role: "editor" },
	{ initials: "TP", name: "Tong P.", email: "tong@chuwii.com", role: "viewer" },
];

const PRODUCT_SIZES = ["S", "M", "L"] as const;

type ProductSize = (typeof PRODUCT_SIZES)[number];

export function LandingBlocks() {
	return (
		<section className="mx-auto w-full max-w-6xl px-6 pb-24">
			<div className="mb-10 flex flex-col items-center gap-2 text-center">
				<h2 className="text-4xl sm:text-5xl">{"Build real things"}</h2>
				<p className="max-w-md text-muted-foreground">
					{"Every block below is made from sketchcn components only."}
				</p>
			</div>
			<div className="grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				<LoginBlock />
				<ProductBlock />
				<PricingBlock />
				<NotificationsBlock />
				<TodoBlock />
				<TeamBlock />
				<FeedbackBlock />
			</div>
		</section>
	);
}

function LoginBlock() {
	return (
		<Card className="lg:row-span-2">
			<CardHeader>
				<CardTitle className="text-xl">{"Welcome back"}</CardTitle>
				<CardDescription>{"Sign in to keep sketching."}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-4">
				<div className="flex flex-col gap-1.5">
					<label htmlFor="landing-email">{"Email"}</label>
					<Input id="landing-email" type="email" placeholder="you@sketch.cn" />
				</div>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="landing-password">{"Password"}</label>
					<Input id="landing-password" type="password" placeholder="••••••••" />
				</div>
				<div className="flex items-center gap-2">
					<Checkbox id="landing-remember" defaultChecked />
					<label htmlFor="landing-remember">{"Remember me"}</label>
				</div>
				<Button className="w-full">{"Sign in"}</Button>
				<Separator variant="dashed">or</Separator>
				<div className="grid grid-cols-2 gap-2">
					<Button variant="outline">
						<Github />
						GitHub
					</Button>
					<Button variant="outline">
						<Google />
						Google
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}

function ProductBlock() {
	const [selectedSize, setSelectedSize] = useState<ProductSize>("M");

	return (
		<Card variant="polkadots" className="lg:row-span-2">
			<Card className="mx-(--card-spacing) aspect-4/3 items-center justify-center bg-muted">
				<Package className="size-20 text-muted-foreground" />
			</Card>
			<CardHeader>
				<CardTitle className="text-xl">{"Doodle Tote"}</CardTitle>
				<CardDescription>{"Canvas bag, hand-inked print."}</CardDescription>
				<CardAction className="text-xl">{"$24"}</CardAction>
			</CardHeader>
			<CardContent className="flex gap-2">
				{PRODUCT_SIZES.map((size) => (
					<Toggle
						key={size}
						variant="outline"
						size="sm"
						aria-label={`Size ${size}`}
						pressed={selectedSize === size}
						onPressedChange={() => setSelectedSize(size)}
					>
						{size}
					</Toggle>
				))}
			</CardContent>
			<CardFooter className="pb-(--card-spacing)">
				<Button className="w-full">
					<Cart />
					{"Add to cart"}
				</Button>
			</CardFooter>
		</Card>
	);
}

function PricingBlock() {
	return (
		<Card className="md:col-span-2">
			<CardHeader>
				<CardTitle className="text-xl">{"Pro plan"}</CardTitle>
				<CardDescription>{"For people who sketch every day."}</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4 sm:grid-cols-2">
				<Tabs defaultValue="monthly">
					<TabsList>
						{PLAN_PRICES.map(({ period, label }) => (
							<TabsTrigger key={period} value={period}>
								{label}
							</TabsTrigger>
						))}
					</TabsList>
					{PLAN_PRICES.map(({ period, price, unit }) => (
						<TabsContent key={period} value={period} className="pt-3">
							<span className="text-4xl">{price}</span>
							<span className="text-muted-foreground">{` ${unit}`}</span>
						</TabsContent>
					))}
				</Tabs>
				<ul className="flex flex-col gap-2">
					{PLAN_FEATURES.map((feature) => (
						<li key={feature} className="flex items-center gap-2">
							<Check className="size-4" />
							{feature}
						</li>
					))}
				</ul>
			</CardContent>
			<CardContent className="flex flex-col gap-4">
				<Separator variant="dashed" />
				<Button className="w-full">{"Upgrade to Pro"}</Button>
			</CardContent>
		</Card>
	);
}

function NotificationsBlock() {
	return (
		<Card size="sm">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-lg">
					<Bell className="size-4" />
					{"Notifications"}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				{NOTIFICATION_SETTINGS.map(({ id, label, defaultChecked }) => (
					<div key={id} className="flex items-center justify-between gap-2">
						<label htmlFor={`landing-${id}`}>{label}</label>
						<Switch
							id={`landing-${id}`}
							size="sm"
							defaultChecked={defaultChecked}
						/>
					</div>
				))}
			</CardContent>
		</Card>
	);
}

function TodoBlock() {
	const [doneIds, setDoneIds] = useState(
		() => new Set(TODOS.filter(({ done }) => done).map(({ id }) => id)),
	);

	const toggleTodo = (id: string, checked: boolean) => {
		setDoneIds((previous) => {
			const next = new Set(previous);
			if (checked) {
				next.add(id);
			} else {
				next.delete(id);
			}
			return next;
		});
	};

	return (
		<Card size="sm">
			<CardHeader>
				<CardTitle className="text-lg">{"Today"}</CardTitle>
				<CardDescription>{`${doneIds.size} of ${TODOS.length} done`}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-2">
				{TODOS.map(({ id, label }) => {
					const isDone = doneIds.has(id);

					return (
						<div key={id} className="flex items-center gap-2">
							<Checkbox
								id={`landing-${id}`}
								checked={isDone}
								onCheckedChange={(checked) => toggleTodo(id, checked)}
							/>
							<label
								htmlFor={`landing-${id}`}
								className={isDone ? "text-muted-foreground line-through" : ""}
							>
								{label}
							</label>
						</div>
					);
				})}
			</CardContent>
		</Card>
	);
}

function TeamBlock() {
	return (
		<Card className="md:col-span-2">
			<CardHeader>
				<CardTitle className="text-lg">{"Team members"}</CardTitle>
				<CardDescription>{"Invite people to sketch with you."}</CardDescription>
				<CardAction>
					<AvatarGroup>
						{TEAM_MEMBERS.map(({ initials, name }) => (
							<Tooltip key={initials}>
								<TooltipTrigger
									render={
										<Avatar>
											<AvatarFallback>{initials}</AvatarFallback>
										</Avatar>
									}
								/>
								<TooltipContent>{name}</TooltipContent>
							</Tooltip>
						))}
						<Tooltip>
							<TooltipTrigger
								render={<AvatarGroupCount>+4</AvatarGroupCount>}
							/>
							<TooltipContent>{"4 more members"}</TooltipContent>
						</Tooltip>
					</AvatarGroup>
				</CardAction>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">
				{TEAM_MEMBERS.map(({ initials, name, email, role }) => (
					<div key={email} className="flex items-center gap-3">
						<Avatar>
							<AvatarFallback>{initials}</AvatarFallback>
							{role === "owner" && <AvatarBadge />}
						</Avatar>
						<div className="flex min-w-0 flex-1 flex-col">
							<span className="truncate">{name}</span>
							<span className="truncate text-muted-foreground text-xs">
								{email}
							</span>
						</div>
						<NativeSelect
							size="sm"
							defaultValue={role}
							aria-label={`${name} role`}
						>
							<NativeSelectOption value="owner">Owner</NativeSelectOption>
							<NativeSelectOption value="editor">Editor</NativeSelectOption>
							<NativeSelectOption value="viewer">Viewer</NativeSelectOption>
						</NativeSelect>
					</div>
				))}
			</CardContent>
		</Card>
	);
}

function FeedbackBlock() {
	return (
		<Card className="md:col-span-2">
			<CardHeader>
				<CardTitle className="text-lg">{"Send feedback"}</CardTitle>
				<CardDescription>{"Tell us what to draw next."}</CardDescription>
			</CardHeader>
			<CardContent>
				<Tabs defaultValue="idea">
					<TabsList variant="line">
						<TabsTrigger value="idea">Idea</TabsTrigger>
						<TabsTrigger value="bug">Bug</TabsTrigger>
					</TabsList>
					<TabsContent value="idea" className="flex flex-col gap-3 pt-3">
						<Textarea placeholder="A sketchy date picker would be neat..." />
						<Button className="self-end">
							<Send />
							Send
						</Button>
					</TabsContent>
					<TabsContent value="bug" className="flex flex-col gap-3 pt-3">
						<Alert>
							<AlertTitle>{"Found a wobbly line?"}</AlertTitle>
							<AlertDescription>
								{"That one is on purpose. Everything else, tell us."}
							</AlertDescription>
						</Alert>
						<Textarea placeholder="What went wrong?" />
						<Button className="self-end">
							<Send />
							Report
						</Button>
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}
