import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../../registry/components/ui/card";
import {
	buildCssSnippet,
	type PlaygroundConfig,
} from "../lib/playground-config";
import { CodeBlock } from "./code-block";

export function PlaygroundCode({ config }: { config: PlaygroundConfig }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-muted-foreground text-xs uppercase tracking-wide">
					globals.css
				</CardTitle>
				<CardDescription>
					{
						"Paste this next to your other theme variables. Only values that differ from the Sketchcn default are emitted."
					}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<CodeBlock
					lang="css"
					code={buildCssSnippet(config)}
					className="w-full"
				/>
			</CardContent>
		</Card>
	);
}
