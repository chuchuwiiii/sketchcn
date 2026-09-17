import type { ComponentType } from "react";
import { AlertExamples } from "./alert-examples";
import { AlertShowcaseCard } from "./alert-showcase-card";
import { ButtonExamples } from "./button-examples";
import { ButtonShowcaseCard } from "./button-showcase-card";
import { CardExamples } from "./card-examples";
import { CardShowcaseCard } from "./card-showcase-card";
import { DialogExamples } from "./dialog-examples";
import { DialogShowcaseCard } from "./dialog-showcase-card";
import { InputExamples } from "./input-examples";
import { InputShowcaseCard } from "./input-showcase-card";
import { NativeSelectExamples } from "./native-select-examples";
import { NativeSelectShowcaseCard } from "./native-select-showcase-card";
import { SeparatorExamples } from "./separator-examples";
import { SeparatorShowcaseCard } from "./separator-showcase-card";
import { SheetExamples } from "./sheet-examples";
import { SheetShowcaseCard } from "./sheet-showcase-card";
import { SidebarExamples } from "./sidebar-examples";
import { SidebarShowcaseCard } from "./sidebar-showcase-card";
import { SkeletonExamples } from "./skeleton-examples";
import { SkeletonShowcaseCard } from "./skeleton-showcase-card";
import { SketchProviderExamples } from "./sketch-provider-examples";
import { SketchProviderShowcaseCard } from "./sketch-provider-showcase-card";
import { SwitchExamples } from "./switch-examples";
import { SwitchShowcaseCard } from "./switch-showcase-card";
import { TabsExamples } from "./tabs-examples";
import { TabsShowcaseCard } from "./tabs-showcase-card";
import { TextareaExamples } from "./textarea-examples";
import { TextareaShowcaseCard } from "./textarea-showcase-card";
import { ToastExamples } from "./toast-examples";
import { ToastShowcaseCard } from "./toast-showcase-card";
import { ToggleExamples } from "./toggle-examples";
import { ToggleShowcaseCard } from "./toggle-showcase-card";
import { TooltipExamples } from "./tooltip-examples";
import { TooltipShowcaseCard } from "./tooltip-showcase-card";

export type ComponentShowcase = {
	slug: string;
	title: string;
	description: string;
	Showcase: ComponentType;
	Examples?: ComponentType;
};

export const COMPONENT_SHOWCASES = [
	{
		slug: "sketch-provider",
		title: "Sketch Provider",
		description:
			"The RoughJS provider and hooks every Sketchcn component draws through.",
		Showcase: SketchProviderShowcaseCard,
		Examples: SketchProviderExamples,
	},
	{
		slug: "button",
		title: "Button",
		description:
			"A Base UI button with hand-drawn style in shadcn conventions.",
		Showcase: ButtonShowcaseCard,
		Examples: ButtonExamples,
	},
	{
		slug: "card",
		title: "Card",
		description:
			"A card container with hand-drawn style in shadcn conventions.",
		Showcase: CardShowcaseCard,
		Examples: CardExamples,
	},
	{
		slug: "alert",
		title: "Alert",
		description:
			"An alert callout with hand-drawn style in shadcn conventions.",
		Showcase: AlertShowcaseCard,
		Examples: AlertExamples,
	},
	{
		slug: "dialog",
		title: "Dialog",
		description:
			"A Base UI dialog with hand-drawn style in shadcn conventions.",
		Showcase: DialogShowcaseCard,
		Examples: DialogExamples,
	},
	{
		slug: "sheet",
		title: "Sheet",
		description: "A Base UI sheet with hand-drawn style in shadcn conventions.",
		Showcase: SheetShowcaseCard,
		Examples: SheetExamples,
	},
	{
		slug: "separator",
		title: "Separator",
		description:
			"A Base UI separator with hand-drawn style in shadcn conventions.",
		Showcase: SeparatorShowcaseCard,
		Examples: SeparatorExamples,
	},
	{
		slug: "sidebar",
		title: "Sidebar",
		description:
			"A hand-drawn navigation panel that floats inside the page layout.",
		Showcase: SidebarShowcaseCard,
		Examples: SidebarExamples,
	},
	{
		slug: "skeleton",
		title: "Skeleton",
		description:
			"A hand-drawn loading placeholder that animates its hachure shading.",
		Showcase: SkeletonShowcaseCard,
		Examples: SkeletonExamples,
	},
	{
		slug: "toast",
		title: "Toast",
		description: "A Base UI toast with hand-drawn style in shadcn conventions.",
		Showcase: ToastShowcaseCard,
		Examples: ToastExamples,
	},
	{
		slug: "tooltip",
		title: "Tooltip",
		description:
			"A Base UI tooltip with hand-drawn style in shadcn conventions.",
		Showcase: TooltipShowcaseCard,
		Examples: TooltipExamples,
	},
	{
		slug: "toggle",
		title: "Toggle",
		description:
			"A pressable Base UI toggle with hand-drawn style in shadcn conventions.",
		Showcase: ToggleShowcaseCard,
		Examples: ToggleExamples,
	},
	{
		slug: "switch",
		title: "Switch",
		description:
			"A Base UI switch with hand-drawn style in shadcn conventions.",
		Showcase: SwitchShowcaseCard,
		Examples: SwitchExamples,
	},
	{
		slug: "tabs",
		title: "Tabs",
		description: "Base UI tabs with hand-drawn style in shadcn conventions.",
		Showcase: TabsShowcaseCard,
		Examples: TabsExamples,
	},
	{
		slug: "native-select",
		title: "Native Select",
		description: "A native select with hand-drawn style in shadcn conventions.",
		Showcase: NativeSelectShowcaseCard,
		Examples: NativeSelectExamples,
	},
	{
		slug: "input",
		title: "Input",
		description: "A Base UI input with hand-drawn style in shadcn conventions.",
		Showcase: InputShowcaseCard,
		Examples: InputExamples,
	},
	{
		slug: "textarea",
		title: "Textarea",
		description: "A textarea with hand-drawn style in shadcn conventions.",
		Showcase: TextareaShowcaseCard,
		Examples: TextareaExamples,
	},
] as const satisfies readonly ComponentShowcase[];

export function findComponentShowcase(
	slug: string,
): ComponentShowcase | undefined {
	return COMPONENT_SHOWCASES.find((showcase) => showcase.slug === slug);
}
