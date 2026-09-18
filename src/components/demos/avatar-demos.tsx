import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
	AvatarImage,
} from "../../../registry/components/ui/avatar";
import { Demo } from "../demo";

const NOTIONIST_ENDPOINT = "https://api.dicebear.com/9.x/notionists/svg";

function notionistAvatar(seed: string): string {
	return `${NOTIONIST_ENDPOINT}?seed=${encodeURIComponent(seed)}`;
}

const MEMBERS = ["Mali", "Anan", "Pim"];

export function AvatarProfileDemo() {
	return (
		<Demo>
			<div className="flex items-center gap-3">
				<Avatar size="lg">
					<AvatarImage src={notionistAvatar("Chuwii")} alt="Chuwii" />
					<AvatarFallback>CH</AvatarFallback>
				</Avatar>
				<div className="flex flex-col">
					<span className="text-sm">Chuwii</span>
					<span className="text-muted-foreground text-xs">
						creator of sketchcn
					</span>
				</div>
			</div>
		</Demo>
	);
}

export function AvatarFallbackDemo() {
	return (
		<Demo>
			<Avatar size="lg">
				<AvatarImage src="/nowhere.png" alt="Unknown teammate" />
				<AvatarFallback>SK</AvatarFallback>
			</Avatar>
		</Demo>
	);
}

export function AvatarGroupDemo() {
	return (
		<Demo>
			<AvatarGroup>
				{MEMBERS.map((member) => (
					<Avatar key={member}>
						<AvatarImage src={notionistAvatar(member)} alt={member} />
						<AvatarFallback>{member.charAt(0)}</AvatarFallback>
					</Avatar>
				))}
				<AvatarGroupCount>+8</AvatarGroupCount>
			</AvatarGroup>
		</Demo>
	);
}

export function AvatarScribbleDemo() {
	return (
		<Demo>
			<Avatar size="lg" className="[--sketch-roughness:2]">
				<AvatarFallback className="[--sketch-bg-hachure-angle:45] [--sketch-bg-hachure-gap:3]">
					SK
				</AvatarFallback>
			</Avatar>
		</Demo>
	);
}
