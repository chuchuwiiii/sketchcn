import { useSketchOutline } from "../../registry/components/ui/sketch-provider";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../../registry/components/ui/tabs";
import { highlight } from "../lib/highlighter";
import { CopyButton } from "./copy-button";

export const REGISTRY_URL = "https://sketchcn.chuwii.com/r";

const PACKAGE_MANAGERS = [
	{
		id: "npm",
		label: "npm",
		command: (url: string) => `npx shadcn@latest add ${url}`,
		install: "npm install",
	},
	{
		id: "pnpm",
		label: "pnpm",
		command: (url: string) => `pnpm dlx shadcn@latest add ${url}`,
		install: "pnpm add",
	},
	{
		id: "bun",
		label: "bun",
		command: (url: string) => `bunx --bun shadcn@latest add ${url}`,
		install: "bun add",
	},
] as const;

type PackageManager = (typeof PACKAGE_MANAGERS)[number];

export function InstallTabs({ name }: { name: string }) {
	const url = `${REGISTRY_URL}/${name}.json`;

	return <CommandTabs commandFor={(manager) => manager.command(url)} />;
}

export function PackageInstallTabs({
	packages,
}: {
	packages: readonly string[];
}) {
	return (
		<CommandTabs
			commandFor={(manager) => `${manager.install} ${packages.join(" ")}`}
		/>
	);
}

function CommandTabs({
	commandFor,
}: {
	commandFor: (manager: PackageManager) => string;
}) {
	return (
		<Tabs defaultValue="npm" className="flex flex-col gap-2">
			<TabsList className="w-fit">
				{PACKAGE_MANAGERS.map((manager) => (
					<TabsTrigger key={manager.id} value={manager.id}>
						{manager.label}
					</TabsTrigger>
				))}
			</TabsList>
			{PACKAGE_MANAGERS.map((manager) => (
				<TabsContent key={manager.id} value={manager.id}>
					<CommandBox command={commandFor(manager)} />
				</TabsContent>
			))}
		</Tabs>
	);
}

function CommandBox({ command }: { command: string }) {
	const sketchOutline = useSketchOutline({
		strokeLineDash: [6, 4],
	});

	return (
		<div className="relative isolate flex items-center justify-between gap-2 rounded-lg bg-muted/40 px-3 py-2">
			<div
				className="shiki-block overflow-x-auto font-mono text-sm"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki output built from a local literal, never user input.
				dangerouslySetInnerHTML={{ __html: highlight(command, "bash") }}
			/>
			<CopyButton value={command} />
			<svg
				aria-hidden="true"
				data-sketch-outline
				className="-z-10"
				ref={sketchOutline.ref}
				style={sketchOutline.style}
			/>
		</div>
	);
}
