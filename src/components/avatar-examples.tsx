import {
	Avatar,
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

const PROFILE_SNIPPET = `import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export function ProfileRow() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="lg">
        <AvatarImage
          src="https://api.dicebear.com/9.x/notionists/svg?seed=Chuwii"
          alt="Chuwii"
        />
        <AvatarFallback>CH</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm">Chuwii</span>
        <span className="text-muted-foreground text-xs">
          creator of sketchcn
        </span>
      </div>
    </div>
  );
}`;

const FALLBACK_SNIPPET = `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MissingPortrait() {
  return (
    <Avatar size="lg">
      <AvatarImage src="/nowhere.png" alt="Unknown teammate" />
      <AvatarFallback>SK</AvatarFallback>
    </Avatar>
  );
}`;

const GROUP_SNIPPET = `import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar";

const MEMBERS = ["Mali", "Anan", "Pim"];

export function TeamStack() {
  return (
    <AvatarGroup>
      {MEMBERS.map((member) => (
        <Avatar key={member}>
          <AvatarImage
            src={\`https://api.dicebear.com/9.x/notionists/svg?seed=\${member}\`}
            alt={member}
          />
          <AvatarFallback>{member.charAt(0)}</AvatarFallback>
        </Avatar>
      ))}
      <AvatarGroupCount>+8</AvatarGroupCount>
    </AvatarGroup>
  );
}`;

const SCRIBBLE_SNIPPET = `import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function ScribbledFallback() {
  return (
    <Avatar size="lg" className="[--sketch-roughness:2]">
      <AvatarFallback className="[--sketch-bg-hachure-gap:3] [--sketch-bg-hachure-angle:45]">
        SK
      </AvatarFallback>
    </Avatar>
  );
}`;

const MEMBERS = ["Mali", "Anan", "Pim"];

export function AvatarExamples() {
	return (
		<ShowcaseCard
			title="Examples"
			description="Profile rows, stacked teams, and a wobblier hand."
		>
			<ShowcaseCard.Example label="Profile row" code={PROFILE_SNIPPET}>
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
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Missing portrait" code={FALLBACK_SNIPPET}>
				<Avatar size="lg">
					<AvatarImage src="/nowhere.png" alt="Unknown teammate" />
					<AvatarFallback>SK</AvatarFallback>
				</Avatar>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Team stack" code={GROUP_SNIPPET}>
				<AvatarGroup>
					{MEMBERS.map((member) => (
						<Avatar key={member}>
							<AvatarImage src={notionistAvatar(member)} alt={member} />
							<AvatarFallback>{member.charAt(0)}</AvatarFallback>
						</Avatar>
					))}
					<AvatarGroupCount>+8</AvatarGroupCount>
				</AvatarGroup>
			</ShowcaseCard.Example>
			<ShowcaseCard.Example label="Wobblier hand" code={SCRIBBLE_SNIPPET}>
				<Avatar size="lg" className="[--sketch-roughness:2]">
					<AvatarFallback className="[--sketch-bg-hachure-angle:45] [--sketch-bg-hachure-gap:3]">
						SK
					</AvatarFallback>
				</Avatar>
			</ShowcaseCard.Example>
		</ShowcaseCard>
	);
}
