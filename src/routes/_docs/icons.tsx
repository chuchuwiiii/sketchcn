import {
	Calendar as BoxCalendar,
	Check as BoxCheck,
	ChevronDown as BoxChevronDown,
	Home as BoxHome,
	InfoCircle as BoxInfoCircle,
	Location as BoxLocation,
	Menu as BoxMenu,
	Moon as BoxMoon,
	Search as BoxSearch,
	Sun as BoxSun,
	X as BoxX,
} from "@boxicons/react";
import {
	Calendar as MatitaCalendar,
	Check as MatitaCheck,
	ChevronDown as MatitaChevronDown,
	Home as MatitaHome,
	Info as MatitaInfo,
	MapPin as MatitaMapPin,
	Menu as MatitaMenu,
	Moon as MatitaMoon,
	Search as MatitaSearch,
	Sun as MatitaSun,
	X as MatitaX,
} from "@matita/icons/react";
import { createFileRoute } from "@tanstack/react-router";
import { type ComponentType, Fragment, type ReactNode, useState } from "react";
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "../../../registry/components/ui/alert";
import { Button } from "../../../registry/components/ui/button";
import { Toggle } from "../../../registry/components/ui/toggle";
import { CodeBlock } from "../../components/code-block";
import { DocsSection } from "../../components/docs-section";
import { PackageInstallTabs } from "../../components/install-tabs";
import { seo } from "../../lib/seo";

export const Route = createFileRoute("/_docs/icons")({
	head: () =>
		seo({
			title: "Icons — Sketchcn",
			description:
				"Recommended icon libraries for Sketchcn: the hand-drawn Matita set, Boxicons, and the libraries the shadcn CLI supports.",
			path: "/icons",
		}),
	component: IconsPage,
});

const PREVIEW_ICON_NAMES = [
	"X",
	"Check",
	"Chevron down",
	"Menu",
	"Search",
	"Home",
] as const;

type ShowcaseIcons = Record<
	"Info" | "Home" | "MapPin" | "Sun" | "Moon" | "Calendar",
	ComponentType
>;

type IconLibrary = {
	id: string;
	title: string;
	description: string;
	homepage: string;
	packages: readonly string[];
	usage: string;
	icons: readonly [
		ReactNode,
		ReactNode,
		ReactNode,
		ReactNode,
		ReactNode,
		ReactNode,
	];
	showcaseIcons: ShowcaseIcons;
};

const ICON_LIBRARIES: readonly IconLibrary[] = [
	{
		id: "matita",
		title: "Matita",
		description:
			"Freehand pencil icons with overshooting strokes and crossed corners, the closest match to a hand-drawn UI.",
		homepage: "https://matita.dev",
		packages: ["@matita/icons"],
		usage: `import { X } from "@matita/icons/react";

<X size={20} pencil />`,
		icons: [
			<MatitaX key="x" />,
			<MatitaCheck key="check" />,
			<MatitaChevronDown key="chevron" />,
			<MatitaMenu key="menu" />,
			<MatitaSearch key="search" />,
			<MatitaHome key="home" />,
		],
		showcaseIcons: {
			Info: MatitaInfo,
			Home: MatitaHome,
			MapPin: MatitaMapPin,
			Sun: MatitaSun,
			Moon: MatitaMoon,
			Calendar: MatitaCalendar,
		},
	},
	{
		id: "boxicons",
		title: "Boxicons",
		description:
			"The set Sketchcn ships with. Every registry component that draws an icon imports it from here.",
		homepage: "https://boxicons.com",
		packages: ["@boxicons/react"],
		usage: `import { X } from "@boxicons/react";

<X />`,
		icons: [
			<BoxX key="x" />,
			<BoxCheck key="check" />,
			<BoxChevronDown key="chevron" />,
			<BoxMenu key="menu" />,
			<BoxSearch key="search" />,
			<BoxHome key="home" />,
		],
		showcaseIcons: {
			Info: BoxInfoCircle,
			Home: BoxHome,
			MapPin: BoxLocation,
			Sun: BoxSun,
			Moon: BoxMoon,
			Calendar: BoxCalendar,
		},
	},
];

const SHADCN_ICON_LIBRARIES = [
	{ title: "Lucide", url: "https://www.npmjs.com/package/lucide-react" },
	{
		title: "Tabler Icons",
		url: "https://www.npmjs.com/package/@tabler/icons-react",
	},
	{
		title: "HugeIcons",
		url: "https://www.npmjs.com/package/@hugeicons/react",
	},
	{
		title: "Phosphor Icons",
		url: "https://www.npmjs.com/package/@phosphor-icons/react",
	},
	{
		title: "Remix Icon",
		url: "https://www.npmjs.com/package/@remixicon/react",
	},
] as const;

const SHADCN_CREATE_URL = "https://ui.shadcn.com/create";

const LINK_CLASS_NAME =
	"w-fit underline decoration-dashed underline-offset-4 transition-colors hover:text-foreground";

function IconPreviewRow({ icons }: { icons: IconLibrary["icons"] }) {
	return (
		<div className="flex flex-wrap gap-5 p-2">
			{PREVIEW_ICON_NAMES.map((name, index) => (
				<span
					key={name}
					title={name}
					className="flex size-10 items-center justify-center [&_svg]:size-6 hover:[&_svg]:animate-[sketch-icon-wiggle_180ms_ease-in-out_infinite] motion-reduce:hover:[&_svg]:animate-none"
				>
					{icons[index]}
				</span>
			))}
		</div>
	);
}

function SketchComponentsPreview({ library }: { library: IconLibrary }) {
	const { Info, Home, MapPin, Sun, Moon, Calendar } = library.showcaseIcons;
	const [theme, setTheme] = useState<"light" | "dark">("light");

	return (
		<div className="flex flex-col gap-4 p-2">
			<div className="flex flex-wrap items-center gap-3">
				<Button variant="ghost" size="icon" aria-label="Home">
					<Home />
				</Button>
				<Button variant="outline">
					<MapPin />
					Bangkok
				</Button>
				<Button variant="outline">
					<Calendar />
					Pick a date
				</Button>
				<div className="flex gap-1">
					<Toggle
						variant="outline"
						size="sm"
						aria-label="Light mode"
						pressed={theme === "light"}
						onPressedChange={() => setTheme("light")}
					>
						<Sun />
					</Toggle>
					<Toggle
						variant="outline"
						size="sm"
						aria-label="Dark mode"
						pressed={theme === "dark"}
						onPressedChange={() => setTheme("dark")}
					>
						<Moon />
					</Toggle>
				</div>
			</div>
			<Alert>
				<Info />
				<AlertTitle>{`Drawn with ${library.title}`}</AlertTitle>
				<AlertDescription>
					{"Icons pick up the component's colour and size on their own."}
				</AlertDescription>
			</Alert>
		</div>
	);
}

function IconsPage() {
	return (
		<div className="mx-auto flex w-full max-w-4xl flex-col gap-6 p-8">
			<header className="flex flex-col gap-2">
				<h1 className="text-4xl">Icons</h1>
				<p className="text-muted-foreground">
					{
						"Icon libraries that sit well next to Sketchcn. Registry components import Boxicons; any set below works once you swap the import."
					}
				</p>
			</header>

			{ICON_LIBRARIES.map((library) => (
				<DocsSection
					key={library.id}
					id={library.id}
					title={library.title}
					description={library.description}
				>
					<IconPreviewRow icons={library.icons} />
					<DocsSection.Block label="In Sketchcn components">
						<SketchComponentsPreview library={library} />
					</DocsSection.Block>
					<PackageInstallTabs packages={library.packages} />
					<DocsSection.Block label="Usage">
						<CodeBlock code={library.usage} />
					</DocsSection.Block>
					<a
						href={library.homepage}
						target="_blank"
						rel="noreferrer"
						className={`${LINK_CLASS_NAME} text-sm`}
					>
						{`Browse ${library.title}`}
					</a>
				</DocsSection>
			))}

			<p className="text-muted-foreground text-sm">
				{"shadcn also supports "}
				{SHADCN_ICON_LIBRARIES.map((library, index) => (
					<Fragment key={library.title}>
						{index > 0 && ", "}
						<a
							href={library.url}
							target="_blank"
							rel="noreferrer"
							className={LINK_CLASS_NAME}
						>
							{library.title}
						</a>
					</Fragment>
				))}
				{". Preview them in "}
				<a
					href={SHADCN_CREATE_URL}
					target="_blank"
					rel="noreferrer"
					className={LINK_CLASS_NAME}
				>
					shadcn/create
				</a>
				{"."}
			</p>
		</div>
	);
}
