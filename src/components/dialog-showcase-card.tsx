import { Trash2 } from "@matita/icons/react";
import { Button } from "../../registry/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../registry/components/ui/dialog";
import { ShowcaseCard } from "./showcase-card";

export function DialogShowcaseCard() {
	return (
		<ShowcaseCard
			title="Dialog"
			description="Every hand-drawn dialog composition."
		>
			<ShowcaseCard.Row label="Basic">
				<Dialog>
					<DialogTrigger render={<Button>Open dialog</Button>} />
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Are you sure?</DialogTitle>
							<DialogDescription>
								{"This dialog is hand-drawn just like the button."}
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="With footer actions">
				<Dialog>
					<DialogTrigger
						render={<Button variant="outline">Publish sketch</Button>}
					/>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Publish sketch</DialogTitle>
							<DialogDescription>
								{"This will share it with the rest of the team."}
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<DialogClose render={<Button variant="outline" />}>
								Cancel
							</DialogClose>
							<Button>Publish</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Destructive confirm">
				<Dialog>
					<DialogTrigger
						render={
							<Button variant="destructive">
								<Trash2 />
								Delete sketch
							</Button>
						}
					/>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Delete this sketch?</DialogTitle>
							<DialogDescription>
								{"This action cannot be undone."}
							</DialogDescription>
						</DialogHeader>
						<DialogFooter showCloseButton>
							<Button variant="destructive">Delete</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</ShowcaseCard.Row>
			<ShowcaseCard.Row label="Without close button">
				<Dialog>
					<DialogTrigger
						render={<Button variant="ghost">Open plain dialog</Button>}
					/>
					<DialogContent showCloseButton={false}>
						<DialogHeader>
							<DialogTitle>No close button</DialogTitle>
							<DialogDescription>
								{"Dismiss by clicking outside or pressing escape."}
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<DialogClose render={<Button variant="outline" />}>
								Got it
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</ShowcaseCard.Row>
		</ShowcaseCard>
	);
}
