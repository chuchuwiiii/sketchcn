import { Book, ComponentIcon, Home, Layers, Slider } from "@boxicons/react";
import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "../../registry/components/ui/sidebar";
import { COMPONENT_SHOWCASES } from "./component-showcases";

const PROVIDER_SLUGS = new Set<string>(["sketch-provider"]);

const PROVIDER_SHOWCASES = COMPONENT_SHOWCASES.filter((showcase) =>
	PROVIDER_SLUGS.has(showcase.slug),
);

const UI_SHOWCASES = COMPONENT_SHOWCASES.filter(
	(showcase) => !PROVIDER_SLUGS.has(showcase.slug),
);

function ShowcaseSubMenu({
	showcases,
	children,
}: {
	showcases: readonly { slug: string; title: string }[];
	children?: ReactNode;
}) {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});

	return (
		<SidebarMenuSub>
			{showcases.map(({ slug, title }) => (
				<SidebarMenuSubItem key={slug}>
					<SidebarMenuSubButton
						isActive={pathname === `/components/${slug}`}
						render={<Link to="/components/$name" params={{ name: slug }} />}
					>
						<span>{title}</span>
					</SidebarMenuSubButton>
				</SidebarMenuSubItem>
			))}
			{children}
		</SidebarMenuSub>
	);
}

export function DocsSidebar() {
	const pathname = useRouterState({
		select: (state) => state.location.pathname,
	});

	return (
		<Sidebar>
			<SidebarHeader>
				<Link to="/" className="flex items-center gap-2 px-1 py-1">
					<img
						src="/logo.svg"
						alt=""
						className="size-9 rounded-lg transition-transform duration-200 ease-out hover:-rotate-6 motion-reduce:transition-none"
					/>
					<span className="text-xl">sketchcn</span>
				</Link>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton
									isActive={pathname === "/"}
									render={<Link to="/" />}
								>
									<Home />
									<span>Home</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroup>
					<SidebarGroupLabel>Docs</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton
									isActive={pathname === "/docs"}
									render={<Link to="/docs" />}
								>
									<Book />
									<span>Introduction</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton
									isActive={pathname === "/playground"}
									render={<Link to="/playground" />}
								>
									<Slider />
									<span>Playground</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem collapsible defaultOpen>
								<SidebarMenuButton>
									<Layers />
									<span>Providers</span>
								</SidebarMenuButton>
								<ShowcaseSubMenu showcases={PROVIDER_SHOWCASES}>
									<SidebarMenuSubItem>
										<SidebarMenuSubButton
											isActive={pathname === "/sketch-styles"}
											render={<Link to="/sketch-styles" />}
										>
											<span>Sketch Styles</span>
										</SidebarMenuSubButton>
									</SidebarMenuSubItem>
								</ShowcaseSubMenu>
							</SidebarMenuItem>
							<SidebarMenuItem collapsible defaultOpen>
								<SidebarMenuButton>
									<ComponentIcon />
									<span>Components</span>
								</SidebarMenuButton>
								<ShowcaseSubMenu showcases={UI_SHOWCASES} />
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
