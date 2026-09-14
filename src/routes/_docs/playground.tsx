import { createFileRoute } from "@tanstack/react-router";
import { PlaygroundCode } from "../../components/playground-code";
import { PlaygroundControls } from "../../components/playground-controls";
import { PlaygroundPreview } from "../../components/playground-preview";
import { seo } from "../../lib/seo";
import { usePlaygroundConfig } from "../../lib/use-playground-config";

export const Route = createFileRoute("/_docs/playground")({
	head: () =>
		seo({
			title: "Playground — Sketchcn",
			description:
				"Tune the sketch CSS variables — seed, roughness, hatching, paper and theme colors — against a live preview, then copy the globals.css block into your app.",
			path: "/playground",
		}),
	component: PlaygroundPage,
});

function PlaygroundPage() {
	const { config, patchConfig, resetConfig } = usePlaygroundConfig();

	return (
		<main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12">
			<header className="flex flex-col gap-2">
				<h1 className="text-4xl">Playground</h1>
				<p className="max-w-2xl text-muted-foreground">
					{
						"Every Sketchcn component draws through the same --sketch-* variables. Tweak them here, watch the preview redraw, then paste the block into your globals.css."
					}
				</p>
			</header>

			<div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
				<div className="lg:sticky lg:top-6">
					<PlaygroundPreview config={config} />
				</div>
				<PlaygroundControls
					config={config}
					onChange={patchConfig}
					onReset={resetConfig}
				/>
			</div>

			<PlaygroundCode config={config} />
		</main>
	);
}
