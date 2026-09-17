import { Check } from "@boxicons/react";
import {
	Avatar,
	AvatarBadge,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
	AvatarImage,
} from "../../registry/components/ui/avatar";
import { ShowcaseCard } from "./showcase-card";

const NOTIONIST_ENDPOINT = "https://api.dicebear.com/9.x/notionists/svg";

function notionistAvatar(seed: string): string {
	return `${NOTIONIST_ENDPOINT}?seed=${encodeURIComponent(seed)}`;
}

const SIZES = ["sm", "default", "lg"] as const;

const TEAM = ["Chuwii", "Mali", "Anan", "Pim"] as const;

export function AvatarShowcaseCard() {
	return (
		<ShowcaseCard
			title="Avatar"
			description="Portraits clipped inside a hand-drawn ring, with hatched initials when the image is missing."
		>
			<ShowcaseCard.Row label="Sizes">
				{SIZES.map((size) => (
					<Avatar key={size} size={size}>
						<AvatarImage src={notionistAvatar(size)} alt={`${size} avatar`} />
						<AvatarFallback>{size.charAt(0).toUpperCase()}</AvatarFallback>
					</Avatar>
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Fallback" note="Drawn when no image loads">
				{SIZES.map((size) => (
					<Avatar key={size} size={size}>
						<AvatarFallback>CH</AvatarFallback>
					</Avatar>
				))}
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Badge">
				<Avatar size="lg">
					<AvatarImage src={notionistAvatar("Badge")} alt="Online teammate" />
					<AvatarFallback>ON</AvatarFallback>
					<AvatarBadge aria-label="Online">
						<Check />
					</AvatarBadge>
				</Avatar>
				<Avatar size="lg">
					<AvatarFallback>OF</AvatarFallback>
					<AvatarBadge
						aria-label="Away"
						className="bg-muted-foreground [&>svg]:hidden"
					/>
				</Avatar>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Group" note="Hover to lift a face">
				<AvatarGroup>
					{TEAM.map((member) => (
						<Avatar key={member}>
							<AvatarImage src={notionistAvatar(member)} alt={member} />
							<AvatarFallback>{member.charAt(0)}</AvatarFallback>
						</Avatar>
					))}
					<AvatarGroupCount>+3</AvatarGroupCount>
				</AvatarGroup>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
