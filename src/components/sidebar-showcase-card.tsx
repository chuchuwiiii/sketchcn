import { Bookmark, Home, Palette, Search, Settings } from "@matita/icons/react";
import { useState } from "react";
import { Input } from "../../registry/components/ui/input";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
} from "../../registry/components/ui/sidebar";
import { ShowcaseCard } from "./showcase-card";

const NAV_GROUPS = [
	{
		label: "Workspace",
		items: [
			{ icon: Home, label: "Sketchbook" },
			{ icon: Bookmark, label: "Saved pages" },
		],
	},
	{
		label: "Studio",
		items: [
			{ icon: Palette, label: "Palettes" },
			{ icon: Settings, label: "Settings" },
		],
	},
] as const;

export function SidebarShowcaseCard() {
	const [activeLabel, setActiveLabel] = useState<string>("Sketchbook");

	return (
		<ShowcaseCard
			title="Sidebar"
			description="A hand-drawn navigation panel that floats inside the page with an even gap on every side."
		>
			<ShowcaseCard.Row label="Floating panel with collapsible groups">
				<SidebarProvider className="h-96 min-h-0 w-full overflow-hidden rounded-xl">
					<Sidebar collapsible="none">
						<SidebarHeader>
							<span className="font-medium text-sm">Sketchbook</span>
							<Input placeholder="Search" />
						</SidebarHeader>
						<SidebarContent>
							{NAV_GROUPS.map((group) => (
								<SidebarGroup key={group.label} collapsible>
									<SidebarGroupLabel>{group.label}</SidebarGroupLabel>
									<SidebarGroupContent>
										<SidebarMenu>
											{group.items.map(({ icon: Icon, label }) => (
												<SidebarMenuItem key={label}>
													<SidebarMenuButton
														isActive={label === activeLabel}
														onClick={() => setActiveLabel(label)}
													>
														<Icon />
														<span>{label}</span>
													</SidebarMenuButton>
												</SidebarMenuItem>
											))}
										</SidebarMenu>
									</SidebarGroupContent>
								</SidebarGroup>
							))}
						</SidebarContent>
						<SidebarFooter>
							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton>
										<Search />
										<span>Command menu</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarFooter>
					</Sidebar>
					<div className="flex flex-1 items-center justify-center p-6 text-muted-foreground text-sm">
						{activeLabel}
					</div>
				</SidebarProvider>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
