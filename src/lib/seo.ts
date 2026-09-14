export const SITE = {
	url: "https://sketchcn.chuwii.com",
	name: "Sketchcn",
	description:
		"Hand-drawn shadcn/ui components for React. Copy-paste RoughJS sketch styled Base UI primitives straight into your app with the shadcn CLI.",
	ogImage: "/logo.png",
	twitterHandle: "@chuchuwiiii",
} as const;

type SeoOptions = {
	title: string;
	description: string;
	path: string;
};

export function canonicalUrl(path: string) {
	return new URL(path, SITE.url).toString();
}

export function seo({ title, description, path }: SeoOptions) {
	const url = canonicalUrl(path);
	const image = canonicalUrl(SITE.ogImage);

	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			{ property: "og:type", content: "website" },
			{ property: "og:site_name", content: SITE.name },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:url", content: url },
			{ property: "og:image", content: image },
			{ property: "og:image:alt", content: `${SITE.name} logo` },
			{ name: "twitter:card", content: "summary" },
			{ name: "twitter:site", content: SITE.twitterHandle },
			{ name: "twitter:creator", content: SITE.twitterHandle },
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
			{ name: "twitter:image", content: image },
		],
		links: [{ rel: "canonical", href: url }],
	};
}
