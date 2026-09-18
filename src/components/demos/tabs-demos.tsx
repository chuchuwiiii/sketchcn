import { useState } from "react";
import { Button } from "../../../registry/components/ui/button";
import { Input } from "../../../registry/components/ui/input";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "../../../registry/components/ui/tabs";
import { Demo } from "../demo";

function PreviewTabsPreview() {
	const [tab, setTab] = useState("preview");

	return (
		<div className="flex flex-col gap-2">
			<Tabs value={tab} onValueChange={(value) => setTab(String(value))}>
				<TabsList variant="line">
					<TabsTrigger value="preview">Preview</TabsTrigger>
					<TabsTrigger value="code">Code</TabsTrigger>
				</TabsList>
				<TabsContent value="preview" className="text-muted-foreground text-sm">
					{"A hand-drawn preview."}
				</TabsContent>
				<TabsContent value="code" className="text-muted-foreground text-sm">
					{"The source behind it."}
				</TabsContent>
			</Tabs>
			<Button size="sm" variant="outline" onClick={() => setTab("code")}>
				Jump to code
			</Button>
		</div>
	);
}

export function TabsSettingsDemo() {
	return (
		<Demo>
			<Tabs defaultValue="profile" className="w-full">
				<TabsList>
					<TabsTrigger value="profile">Profile</TabsTrigger>
					<TabsTrigger value="password">Password</TabsTrigger>
				</TabsList>
				<TabsContent value="profile" className="flex flex-col gap-2">
					<Input placeholder="Display name" />
					<Button className="self-start">Save profile</Button>
				</TabsContent>
				<TabsContent value="password" className="flex flex-col gap-2">
					<Input type="password" placeholder="New password" />
					<Button className="self-start">Update password</Button>
				</TabsContent>
			</Tabs>
		</Demo>
	);
}

export function TabsControlledDemo() {
	return (
		<Demo>
			<PreviewTabsPreview />
		</Demo>
	);
}
