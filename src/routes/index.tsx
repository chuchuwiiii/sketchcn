import {
	ArrowRight,
	Bold,
	Heart,
	InfoCircle,
	Palette,
	Star,
} from "@boxicons/react";
import { createFileRoute, Link } from "@tanstack/react-router";
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
import { Checkbox } from "../../registry/components/ui/checkbox";
import { Input } from "../../registry/components/ui/input";
import {
	NativeSelect,
	NativeSelectOption,
} from "../../registry/components/ui/native-select";
import { Skeleton } from "../../registry/components/ui/skeleton";
import { Switch } from "../../registry/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "../../registry/components/ui/tabs";
import { Toggle } from "../../registry/components/ui/toggle";
import { COMPONENT_SHOWCASES } from "../components/component-showcases";
import { FloatingComponent } from "../components/floating-component";
import { SITE, seo } from "../lib/seo";

export const Route = createFileRoute("/")({
	head: () =>
		seo({
			title: `${SITE.name} — hand-drawn shadcn/ui components`,
			description: SITE.description,
			path: "/",
		}),
	component: Home,
});

function Home() {
	return (
		<main className="relative flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center overflow-hidden px-6 py-24">
			<FloatingComponents />
			<div className="relative z-10 flex flex-col items-center gap-6 text-center">
				<div className="flex animate-wobble items-center gap-3 motion-reduce:animate-none sm:gap-5">
					<img
						src="/logo_no_bg.svg"
						alt="Sketchcn logo"
						className="size-16 drop-shadow-sm transition-transform duration-300 ease-out hover:-rotate-6 hover:scale-105 motion-reduce:transition-none sm:size-24 lg:size-28 dark:invert"
					/>
					<h1 className="text-6xl leading-none sm:text-8xl lg:text-9xl">
						Sketchcn
					</h1>
				</div>
				<p className="max-w-md text-lg">
					<span className="block font-medium text-foreground">
						{"Add a human touch to your components."}
					</span>
					<span className="block text-muted-foreground">
						{"shadcn components library with hand-drawn styles."}
					</span>
				</p>
				<div className="flex flex-wrap items-center justify-center gap-3">
					<Link to="/components">
						<Button size="lg">
							Browse components
							<ArrowRight />
						</Button>
					</Link>
					<Link to="/docs">
						<Button size="lg" variant="outline">
							Read the docs
						</Button>
					</Link>
				</div>
				<span className="text-muted-foreground text-sm">
					{`${COMPONENT_SHOWCASES.length} components and counting`}
				</span>
				<a
					href="/llms.txt"
					className="text-muted-foreground text-xs underline decoration-dashed underline-offset-4 transition-colors duration-200 hover:text-foreground motion-reduce:transition-none"
				>
					{"Markdown docs for your coding agent — /llms.txt"}
				</a>
			</div>
		</main>
	);
}

function FloatingComponents() {
	return (
		<div aria-hidden="true" className="absolute inset-0">
			<FloatingComponent className="top-[15%] left-[5%] [--float-drift:10px] [--float-tilt:-7deg] [animation-duration:7s] md:hidden">
				<Button size="sm">
					<Heart />
					Click me
				</Button>
			</FloatingComponent>

			<FloatingComponent className="top-[17%] right-[6%] [--float-drift:-10px] [--float-tilt:8deg] [animation-delay:0.8s] [animation-duration:8s] md:hidden">
				<Button variant="outline" size="icon" aria-label="Palette">
					<Palette />
				</Button>
			</FloatingComponent>

			<FloatingComponent className="bottom-[19%] left-[5%] [--float-drift:-14px] [--float-tilt:-6deg] [animation-delay:0.5s] [animation-duration:10s] md:hidden">
				<Card size="sm" className="w-40">
					<CardHeader>
						<CardTitle>Sketch card</CardTitle>
						<CardDescription>{"Rough edges on purpose."}</CardDescription>
					</CardHeader>
				</Card>
			</FloatingComponent>

			<FloatingComponent className="bottom-[6%] left-[7%] [--float-drift:12px] [--float-tilt:6deg] [animation-delay:1.4s] [animation-duration:9s] md:hidden">
				<div className="flex w-28 flex-col gap-2">
					<Skeleton className="h-3 w-2/3" />
					<Skeleton className="h-3 w-full" />
					<Skeleton className="h-3 w-1/2" />
				</div>
			</FloatingComponent>

			<FloatingComponent className="right-[8%] bottom-[9%] [--float-tilt:-5deg] [animation-delay:0.4s] [animation-duration:6.5s] md:hidden">
				<Switch defaultChecked aria-label="Sketch mode" />
			</FloatingComponent>

			<FloatingComponent className="top-[23%] left-[40%] [--float-drift:8px] [--float-tilt:-6deg] [animation-delay:1.6s] [animation-duration:7.5s] md:hidden">
				<div className="flex items-center gap-2 text-sm">
					<Checkbox defaultChecked aria-label="Ship it" />
					Ship it
				</div>
			</FloatingComponent>

			<FloatingComponent className="top-[3%] left-[34%] [--float-drift:-12px] [--float-tilt:9deg] [animation-delay:2s] [animation-duration:8.5s] md:hidden">
				<Toggle size="sm" variant="outline" defaultPressed>
					<Bold />
					Bold
				</Toggle>
			</FloatingComponent>

			<FloatingComponent className="right-[5%] bottom-[21%] [--float-drift:12px] [--float-tilt:-4deg] [animation-delay:1.1s] [animation-duration:9.5s] md:hidden">
				<Tabs defaultValue="sketch">
					<TabsList>
						<TabsTrigger value="sketch">Sketch</TabsTrigger>
						<TabsTrigger value="ink">Ink</TabsTrigger>
					</TabsList>
				</Tabs>
			</FloatingComponent>

			<FloatingComponent className="top-[12%] left-[8%] hidden [--float-tilt:-8deg] [animation-duration:7s] lg:block">
				<Button>
					<Heart />
					Click me
				</Button>
			</FloatingComponent>

			<FloatingComponent className="top-[22%] right-[10%] hidden [--float-drift:18px] [--float-tilt:6deg] [animation-delay:0.6s] [animation-duration:8s] md:block">
				<Toggle variant="outline" defaultPressed>
					<Bold />
					Bold
				</Toggle>
			</FloatingComponent>

			<FloatingComponent className="top-[8%] right-[22%] hidden [--float-tilt:-5deg] [animation-delay:1.2s] [animation-duration:9s] xl:block">
				<Card size="sm" className="w-52">
					<CardHeader>
						<CardTitle>Sketch card</CardTitle>
						<CardDescription>{"Rough edges on purpose."}</CardDescription>
					</CardHeader>
				</Card>
			</FloatingComponent>

			<FloatingComponent className="bottom-[14%] left-[14%] hidden [--float-drift:-20px] [--float-tilt:7deg] [animation-delay:0.3s] [animation-duration:10s] xl:block">
				<Card size="sm" className="w-56">
					<CardHeader>
						<CardTitle>Copy and paste</CardTitle>
					</CardHeader>
					<CardContent className="text-muted-foreground text-sm">
						{"Every component ships as plain source you own."}
					</CardContent>
				</Card>
			</FloatingComponent>

			<FloatingComponent className="right-[14%] bottom-[16%] hidden [--float-tilt:-6deg] [animation-delay:0.9s] [animation-duration:6.5s] lg:block">
				<Button variant="destructive">
					<Star />
					Star it
				</Button>
			</FloatingComponent>

			<FloatingComponent className="bottom-[26%] left-[6%] hidden [--float-drift:14px] [--float-tilt:10deg] [animation-delay:1.5s] [animation-duration:7.5s] md:block">
				<Button variant="outline" size="icon-lg" aria-label="Palette">
					<Palette />
				</Button>
			</FloatingComponent>

			<FloatingComponent className="top-[34%] left-[4%] hidden [--float-drift:-10px] [--float-tilt:6deg] [animation-delay:0.2s] [animation-duration:8s] lg:block">
				<div className="flex items-center gap-2">
					<Checkbox defaultChecked aria-label="Looks hand-drawn" />
					Looks hand-drawn
				</div>
			</FloatingComponent>

			<FloatingComponent className="top-[46%] left-[2%] hidden [--float-tilt:-12deg] [animation-delay:2s] [animation-duration:8.5s] 2xl:block">
				<Toggle size="lg">Ghost</Toggle>
			</FloatingComponent>

			<FloatingComponent className="top-[4%] left-[34%] hidden [--float-drift:16px] [--float-tilt:4deg] [animation-delay:1.8s] [animation-duration:9.5s] 2xl:block">
				<Alert className="w-64">
					<InfoCircle />
					<AlertTitle>Fresh ink</AlertTitle>
					<AlertDescription>{"No two outlines match."}</AlertDescription>
				</Alert>
			</FloatingComponent>

			<FloatingComponent className="top-[40%] right-[3%] hidden [--float-tilt:9deg] [animation-delay:0.4s] [animation-duration:6s] 2xl:block">
				<Switch defaultChecked aria-label="Sketch mode" />
			</FloatingComponent>

			<FloatingComponent className="right-[5%] bottom-[34%] hidden [--float-drift:-16px] [--float-tilt:-7deg] [animation-delay:1.1s] [animation-duration:8s] xl:block">
				<NativeSelect className="w-40" defaultValue="marker">
					<NativeSelectOption value="ballpoint">Ballpoint</NativeSelectOption>
					<NativeSelectOption value="marker">Marker</NativeSelectOption>
					<NativeSelectOption value="pencil">Pencil</NativeSelectOption>
				</NativeSelect>
			</FloatingComponent>

			<FloatingComponent className="bottom-[7%] left-[30%] hidden [--float-tilt:5deg] [animation-delay:2.4s] [animation-duration:7s] 2xl:block">
				<Input className="w-52" placeholder="Sketch something" />
			</FloatingComponent>

			<FloatingComponent className="right-[27%] bottom-[5%] hidden [--float-drift:12px] [--float-tilt:-4deg] [animation-delay:0.7s] [animation-duration:9s] 2xl:block">
				<Tabs defaultValue="sketch">
					<TabsList>
						<TabsTrigger value="sketch">Sketch</TabsTrigger>
						<TabsTrigger value="ink">Ink</TabsTrigger>
					</TabsList>
				</Tabs>
			</FloatingComponent>

			<FloatingComponent className="top-[62%] left-[12%] hidden [--float-drift:-12px] [--float-tilt:8deg] [animation-delay:1.7s] [animation-duration:10.5s] 2xl:block">
				<div className="flex w-44 flex-col gap-2">
					<Skeleton className="h-4 w-2/3" />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-1/2" />
				</div>
			</FloatingComponent>
		</div>
	);
}
