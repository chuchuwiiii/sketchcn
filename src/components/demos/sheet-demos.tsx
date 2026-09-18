import { useId, useState } from "react";
import { Button } from "../../../registry/components/ui/button";
import { Input } from "../../../registry/components/ui/input";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../../../registry/components/ui/sheet";
import { Textarea } from "../../../registry/components/ui/textarea";
import { Demo } from "../demo";

function EditSketchSheetPreview() {
	const nameId = useId();
	const purposeId = useId();

	return (
		<Sheet>
			<SheetTrigger render={<Button>Edit details</Button>} />
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit details</SheetTitle>
					<SheetDescription>
						{"Update the sketch without leaving the canvas."}
					</SheetDescription>
				</SheetHeader>
				<div className="flex flex-col gap-3 px-4">
					<Input id={nameId} placeholder="Sketch name" />
					<Textarea id={purposeId} placeholder="What is it for?" />
				</div>
				<SheetFooter>
					<SheetClose render={<Button variant="outline" />}>Cancel</SheetClose>
					<Button>Save changes</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}

function FiltersSheetPreview() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Button variant="outline" onClick={() => setOpen(true)}>
				Filters
			</Button>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetContent side="left">
					<SheetHeader>
						<SheetTitle>Filters</SheetTitle>
						<SheetDescription>
							{"Narrow the sketches you are looking at."}
						</SheetDescription>
					</SheetHeader>
					<SheetFooter>
						<Button onClick={() => setOpen(false)}>Apply</Button>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</>
	);
}

export function SheetFormDemo() {
	return (
		<Demo>
			<EditSketchSheetPreview />
		</Demo>
	);
}

export function SheetControlledDemo() {
	return (
		<Demo>
			<FiltersSheetPreview />
		</Demo>
	);
}
