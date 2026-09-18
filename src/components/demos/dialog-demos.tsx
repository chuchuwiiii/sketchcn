import { useId, useState } from "react";
import { Button } from "../../../registry/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../../registry/components/ui/dialog";
import { Input } from "../../../registry/components/ui/input";
import { Textarea } from "../../../registry/components/ui/textarea";
import { Demo } from "../demo";

function NewSketchDialogPreview() {
	const nameId = useId();
	const purposeId = useId();

	return (
		<Dialog>
			<DialogTrigger render={<Button>New sketch</Button>} />
			<DialogContent>
				<DialogHeader>
					<DialogTitle>New sketch</DialogTitle>
					<DialogDescription>
						{"Give it a name before you start."}
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col gap-3">
					<Input id={nameId} placeholder="Sketch name" />
					<Textarea id={purposeId} placeholder="What is it for?" />
				</div>
				<DialogFooter>
					<DialogClose render={<Button variant="outline" />}>
						Cancel
					</DialogClose>
					<Button>Create</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

function UnsavedChangesDialogPreview() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button variant="outline" onClick={() => setOpen(true)}>
				Leave page
			</Button>
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Leave without saving?</DialogTitle>
						<DialogDescription>
							{"Your sketch has unsaved changes."}
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button variant="outline" onClick={() => setOpen(false)}>
							Keep editing
						</Button>
						<Button variant="destructive" onClick={() => setOpen(false)}>
							Discard
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}

export function DialogFormDemo() {
	return (
		<Demo>
			<NewSketchDialogPreview />
		</Demo>
	);
}

export function DialogControlledDemo() {
	return (
		<Demo>
			<UnsavedChangesDialogPreview />
		</Demo>
	);
}
