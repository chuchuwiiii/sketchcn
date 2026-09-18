import { cn } from "cn";
import { useSketchOutline } from "../../registry/components/ui/sketch-provider";
import { type CodeLanguage, highlight } from "../lib/highlighter";
import { CopyButton } from "./copy-button";

export function CodeBlock({
	code,
	lang = "tsx",
	className,
}: {
	code: string;
	lang?: CodeLanguage;
	className?: string;
}) {
	const sketchOutline = useSketchOutline({ strokeLineDash: [6, 4] });

	return (
		<div
			className={cn(
				"relative isolate flex items-start justify-between gap-2 rounded-lg bg-muted/40 px-3 py-2",
				className,
			)}
		>
			<div
				className="shiki-block overflow-x-auto font-mono text-sm leading-relaxed"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki output built from a local literal, never user input.
				dangerouslySetInnerHTML={{ __html: highlight(code, lang) }}
			/>
			<div className="sticky top-0 shrink-0">
				<CopyButton value={code} />
			</div>
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
