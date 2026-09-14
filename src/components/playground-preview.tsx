import {
	Bold,
	Heart,
	InfoCircle,
	Italic,
	Palette,
	Star,
} from "@boxicons/react";
import { cn } from "cn";
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "../../registry/components/ui/alert";
import { Button } from "../../registry/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../registry/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../registry/components/ui/dialog";
import { Input } from "../../registry/components/ui/input";
import {
	NativeSelect,
	NativeSelectOption,
} from "../../registry/components/ui/native-select";
import { Separator } from "../../registry/components/ui/separator";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../../registry/components/ui/sheet";
import { Skeleton } from "../../registry/components/ui/skeleton";
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
	TooltipProvider,
	TooltipTrigger,
} from "../../registry/components/ui/tooltip";
import {
	type PlaygroundConfig,
	toPreviewStyle,
} from "../lib/playground-config";

/*
	A sketch component redraws on mutations to its own class or style, not on an
	inherited custom property changing further up the tree, so the preview has to
	remount for a slider drag to repaint any outline.
*/
function configKey(config: PlaygroundConfig): string {
	return JSON.stringify(config);
}

/*
	These popups portal into <body>, outside the preview wrapper, so the theme
	class and custom properties have to travel to the popup element itself.
*/
function getPortalProps(config: PlaygroundConfig) {
	return {
		className: cn(config.theme === "dark" && "dark"),
		style: toPreviewStyle(config),
	};
}

function PreviewSection({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-muted-foreground text-xs uppercase tracking-wide">
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col gap-3">{children}</CardContent>
		</Card>
	);
}

function Overlays({ config }: { config: PlaygroundConfig }) {
	const portalProps = getPortalProps(config);

	return (
		<div className="flex flex-wrap items-center gap-2">
			<Dialog>
				<DialogTrigger
					render={<Button variant="outline">Open dialog</Button>}
				/>
				<DialogContent {...portalProps}>
					<DialogHeader>
						<DialogTitle>Sketch dialog</DialogTitle>
						<DialogDescription>
							{"Drawn with the same seed as everything else on the page."}
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant="ghost">Cancel</Button>
						<Button>Looks good</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<Sheet>
				<SheetTrigger render={<Button variant="outline">Open sheet</Button>} />
				<SheetContent {...portalProps}>
					<SheetHeader>
						<SheetTitle>Sketch sheet</SheetTitle>
						<SheetDescription>
							{"Slides in from the edge, outline and all."}
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>

			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger
						render={
							<Button variant="outline" size="icon" aria-label="Palette">
								<Palette />
							</Button>
						}
					/>
					<TooltipContent {...portalProps}>Hover me</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}

export function PlaygroundPreview({ config }: { config: PlaygroundConfig }) {
	return (
		<div
			className={cn(
				"relative isolate text-foreground",
				config.theme === "dark" && "dark",
			)}
			style={toPreviewStyle(config)}
			data-paper={config.paper}
		>
			<div key={configKey(config)} className="flex flex-col gap-6 p-4">
				<PreviewSection title="Buttons">
					<div className="flex flex-wrap items-center gap-2">
						<Button>
							<Heart />
							Primary
						</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="destructive">
							<Star />
							Destructive
						</Button>
						<Button variant="link">Link</Button>
						<Button size="icon" aria-label="Favourite">
							<Heart />
						</Button>
					</div>
				</PreviewSection>

				<PreviewSection title="Inputs">
					<div className="flex flex-wrap items-start gap-3">
						<Input className="w-44" placeholder="Sketch something" />
						<Textarea className="w-56" rows={2} placeholder="Longer note" />
						<NativeSelect className="w-36" defaultValue="marker">
							<NativeSelectOption value="ballpoint">
								Ballpoint
							</NativeSelectOption>
							<NativeSelectOption value="marker">Marker</NativeSelectOption>
							<NativeSelectOption value="pencil">Pencil</NativeSelectOption>
						</NativeSelect>
					</div>
					<div className="flex flex-wrap items-center gap-3">
						<Toggle defaultPressed>
							<Bold />
							Bold
						</Toggle>
						<Toggle variant="outline">
							<Italic />
							Italic
						</Toggle>
						<Switch defaultChecked aria-label="Sketch mode" />
						<Switch size="sm" aria-label="Compact mode" />
					</div>
				</PreviewSection>

				<PreviewSection title="Navigation">
					<div className="flex flex-wrap items-start gap-4">
						<Tabs defaultValue="sketch">
							<TabsList>
								<TabsTrigger value="sketch">Sketch</TabsTrigger>
								<TabsTrigger value="ink">Ink</TabsTrigger>
							</TabsList>
							<TabsContent value="sketch" className="text-muted-foreground">
								{"Pencil first, ink later."}
							</TabsContent>
							<TabsContent value="ink" className="text-muted-foreground">
								{"No going back now."}
							</TabsContent>
						</Tabs>
						<Tabs defaultValue="all">
							<TabsList variant="line">
								<TabsTrigger value="all">All</TabsTrigger>
								<TabsTrigger value="drafts">Drafts</TabsTrigger>
							</TabsList>
						</Tabs>
					</div>
				</PreviewSection>

				<PreviewSection title="Separators">
					<div className="flex flex-col gap-3">
						<Separator />
						<Separator variant="dashed" />
						<Separator variant="double">or</Separator>
					</div>
				</PreviewSection>

				<PreviewSection title="Feedback">
					<div className="flex flex-wrap items-start gap-4">
						<Alert className="w-64">
							<InfoCircle />
							<AlertTitle>Fresh ink</AlertTitle>
							<AlertDescription>{"No two outlines match."}</AlertDescription>
						</Alert>
						<Alert variant="destructive" className="w-64">
							<InfoCircle />
							<AlertTitle>Smudged</AlertTitle>
							<AlertDescription>
								{"Something went wrong on the page."}
							</AlertDescription>
						</Alert>
					</div>
				</PreviewSection>

				<PreviewSection title="Cards">
					<div className="flex flex-wrap items-start gap-4">
						<Card size="sm" className="w-56">
							<CardHeader>
								<CardTitle>Sketch card</CardTitle>
								<CardDescription>{"Rough edges on purpose."}</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col gap-2">
								<Skeleton className="h-4 w-2/3" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-1/2" />
							</CardContent>
						</Card>
						<Card size="sm" variant="polkadots" className="w-56">
							<CardHeader>
								<CardTitle>Patterned card</CardTitle>
								<CardDescription>
									{"Paper variants tint with --paper-pattern."}
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</PreviewSection>

				<PreviewSection title="Overlays">
					<Overlays config={config} />
				</PreviewSection>
			</div>
		</div>
	);
}
