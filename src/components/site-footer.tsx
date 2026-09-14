import { SITE } from "../lib/seo";

export function SiteFooter() {
	return (
		<footer className="flex items-center justify-center gap-1.5 py-6 text-muted-foreground text-sm">
			<span>Made with</span>
			<span
				role="img"
				aria-label="love"
				className="inline-block animate-heartbeat motion-reduce:animate-none"
			>
				{"❤️"}
			</span>
			<span>by</span>
			<a
				href={SITE.xUrl}
				target="_blank"
				rel="noreferrer"
				className="underline decoration-dashed underline-offset-4 transition-colors hover:text-foreground"
			>
				chuwii
			</a>
		</footer>
	);
}
