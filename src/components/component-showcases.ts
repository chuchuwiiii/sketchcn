import type { ComponentType } from "react";
import { AlertShowcaseCard } from "./alert-showcase-card";
import { AvatarShowcaseCard } from "./avatar-showcase-card";
import { ButtonShowcaseCard } from "./button-showcase-card";
import { CardShowcaseCard } from "./card-showcase-card";
import { CheckboxShowcaseCard } from "./checkbox-showcase-card";
import { DialogShowcaseCard } from "./dialog-showcase-card";
import { InputShowcaseCard } from "./input-showcase-card";
import { NativeSelectShowcaseCard } from "./native-select-showcase-card";
import { SeparatorShowcaseCard } from "./separator-showcase-card";
import { SheetShowcaseCard } from "./sheet-showcase-card";
import { SidebarShowcaseCard } from "./sidebar-showcase-card";
import { SkeletonShowcaseCard } from "./skeleton-showcase-card";
import { SketchProviderShowcaseCard } from "./sketch-provider-showcase-card";
import { SwitchShowcaseCard } from "./switch-showcase-card";
import { TabsShowcaseCard } from "./tabs-showcase-card";
import { TextareaShowcaseCard } from "./textarea-showcase-card";
import { ToastShowcaseCard } from "./toast-showcase-card";
import { ToggleShowcaseCard } from "./toggle-showcase-card";
import { TooltipShowcaseCard } from "./tooltip-showcase-card";

export type ComponentShowcase = {
	slug: string;
	title: string;
	description: string;
	Showcase: ComponentType;
};

export const COMPONENT_SHOWCASES = [
	{
		slug: "sketch-provider",
		title: "Sketch Provider",
		description:
			"The RoughJS provider and hooks every Sketchcn component draws through.",
		Showcase: SketchProviderShowcaseCard,
	},
	{
		slug: "button",
		title: "Button",
		description:
			"A Base UI button with hand-drawn style in shadcn conventions.",
		Showcase: ButtonShowcaseCard,
	},
	{
		slug: "card",
		title: "Card",
		description:
			"A card container with hand-drawn style in shadcn conventions.",
		Showcase: CardShowcaseCard,
	},
	{
		slug: "avatar",
		title: "Avatar",
		description: "A Base UI avatar clipped inside its hand-drawn outline.",
		Showcase: AvatarShowcaseCard,
	},
	{
		slug: "alert",
		title: "Alert",
		description:
			"An alert callout with hand-drawn style in shadcn conventions.",
		Showcase: AlertShowcaseCard,
	},
	{
		slug: "dialog",
		title: "Dialog",
		description:
			"A Base UI dialog with hand-drawn style in shadcn conventions.",
		Showcase: DialogShowcaseCard,
	},
	{
		slug: "sheet",
		title: "Sheet",
		description: "A Base UI sheet with hand-drawn style in shadcn conventions.",
		Showcase: SheetShowcaseCard,
	},
	{
		slug: "separator",
		title: "Separator",
		description:
			"A Base UI separator with hand-drawn style in shadcn conventions.",
		Showcase: SeparatorShowcaseCard,
	},
	{
		slug: "sidebar",
		title: "Sidebar",
		description:
			"A hand-drawn navigation panel that floats inside the page layout.",
		Showcase: SidebarShowcaseCard,
	},
	{
		slug: "skeleton",
		title: "Skeleton",
		description:
			"A hand-drawn loading placeholder that animates its hachure shading.",
		Showcase: SkeletonShowcaseCard,
	},
	{
		slug: "toast",
		title: "Toast",
		description: "A Base UI toast with hand-drawn style in shadcn conventions.",
		Showcase: ToastShowcaseCard,
	},
	{
		slug: "tooltip",
		title: "Tooltip",
		description:
			"A Base UI tooltip with hand-drawn style in shadcn conventions.",
		Showcase: TooltipShowcaseCard,
	},
	{
		slug: "toggle",
		title: "Toggle",
		description:
			"A pressable Base UI toggle with hand-drawn style in shadcn conventions.",
		Showcase: ToggleShowcaseCard,
	},
	{
		slug: "switch",
		title: "Switch",
		description:
			"A Base UI switch with hand-drawn style in shadcn conventions.",
		Showcase: SwitchShowcaseCard,
	},
	{
		slug: "checkbox",
		title: "Checkbox",
		description:
			"A Base UI checkbox with a hand-drawn box and a seeded, wobbling Boxicons tick.",
		Showcase: CheckboxShowcaseCard,
	},
	{
		slug: "tabs",
		title: "Tabs",
		description: "Base UI tabs with hand-drawn style in shadcn conventions.",
		Showcase: TabsShowcaseCard,
	},
	{
		slug: "native-select",
		title: "Native Select",
		description: "A native select with hand-drawn style in shadcn conventions.",
		Showcase: NativeSelectShowcaseCard,
	},
	{
		slug: "input",
		title: "Input",
		description: "A Base UI input with hand-drawn style in shadcn conventions.",
		Showcase: InputShowcaseCard,
	},
	{
		slug: "textarea",
		title: "Textarea",
		description: "A textarea with hand-drawn style in shadcn conventions.",
		Showcase: TextareaShowcaseCard,
	},
] as const satisfies readonly ComponentShowcase[];

export function findComponentShowcase(
	slug: string,
): ComponentShowcase | undefined {
	return COMPONENT_SHOWCASES.find((showcase) => showcase.slug === slug);
}
