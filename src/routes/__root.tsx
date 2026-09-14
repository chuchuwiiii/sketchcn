import { Github, TwitterX } from "@boxicons/react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { Button } from "../../registry/components/ui/button";
import { SketchProvider } from "../../registry/components/ui/sketch-provider";
import { SITE, seo } from "../lib/seo";
import appCss from "../styles.css?url";

const GITHUB_URL = "https://github.com/chuwong35122/sketchcn";
const X_URL = "https://x.com/chuchuwiiii";

export const Route = createRootRoute({
	head: () => {
		const defaults = seo({
			title: `${SITE.name} — hand-drawn shadcn/ui components`,
			description: SITE.description,
			path: "/",
		});

		return {
			meta: [
				{ charSet: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				...defaults.meta,
			],
			scripts: [
				{
					type: "application/ld+json",
					children: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "WebSite",
						name: SITE.name,
						url: SITE.url,
						description: SITE.description,
					}),
				},
			],
			links: [
				{ rel: "stylesheet", href: appCss },
				{ rel: "icon", href: "/logo.svg", type: "image/svg+xml" },
				{ rel: "apple-touch-icon", href: "/logo.png" },
			],
		};
	},
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body suppressHydrationWarning>
				<SketchProvider>
					<div
						data-paper="graph"
						className="relative isolate min-h-screen [--paper-opacity:0.25]"
					>
						<div className="fixed top-4 right-4 z-50 flex items-center gap-2">
							<Button
								variant="ghost"
								size="icon"
								aria-label="Sketchcn on GitHub"
								render={
									<a href={GITHUB_URL} target="_blank" rel="noreferrer" />
								}
							>
								<Github />
							</Button>
							<Button
								variant="ghost"
								size="icon"
								aria-label="Chuwong on X"
								render={<a href={X_URL} target="_blank" rel="noreferrer" />}
							>
								<TwitterX />
							</Button>
						</div>
						{children}
					</div>
				</SketchProvider>
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
