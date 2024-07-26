import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger
} from "@/components/ui/dialog.tsx";

interface Props {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    content: React.ReactNode;
    trigger: React.ReactNode;
}

export function Modal({header, footer, content, trigger}: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="bg-neutral-900 border-0">
                <DialogHeader>
                    {header}
                </DialogHeader>
                {content}
                <DialogFooter>
                    {footer}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}