import { Link } from "@tanstack/react-router";
import { CodeBlock } from "./code-block";

export function SketchCssSection({
	css,
	title,
}: {
	css: string;
	title: string;
}) {
	return (
		<div className="flex flex-col gap-4">
			<p className="text-muted-foreground text-sm">
				{`${title} leans on these rules from sketch.css. The shadcn CLI installs the file with sketch-provider; copying the component by hand means copying them too.`}
			</p>
			<CodeBlock code={css} lang="css" />
			<p className="text-muted-foreground text-sm">
				<Link
					to="/sketch-styles"
					className="underline decoration-dashed underline-offset-4 transition-colors hover:text-foreground"
				>
					Read the whole file
				</Link>
				{" for the drawing variables, paper textures and reduced-motion rules."}
			</p>
		</div>
	);
}
