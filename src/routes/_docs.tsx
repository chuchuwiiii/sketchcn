import { createFileRoute, Outlet } from "@tanstack/react-router";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "../../registry/components/ui/sidebar";
import { DocsSidebar } from "../components/docs-sidebar";

export const Route = createFileRoute("/_docs")({ component: DocsLayout });

function DocsLayout() {
	return (
		<SidebarProvider className="bg-transparent">
			<DocsSidebar />
			<SidebarInset className="min-w-0 bg-transparent">
				<SidebarTrigger className="sticky top-4 z-20 ml-4 shrink-0 self-start" />
				<Outlet />
			</SidebarInset>
		</SidebarProvider>
	);
}
