import { Link } from "@matita/icons/react";
import { CopyButton } from "./copy-button";

function sectionUrl(id: string) {
	const url = new URL(window.location.href);
	url.hash = id;
	return url.toString();
}

export function SectionLink({ id }: { id: string }) {
	return (
		<CopyButton
			icon={Link}
			label="Copy link to section"
			value={() => sectionUrl(id)}
		/>
	);
}
