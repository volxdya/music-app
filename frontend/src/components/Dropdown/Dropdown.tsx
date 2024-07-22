import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu";

interface Props {
    trigger: React.ReactNode;
    content: React.ReactNode;
}

export function Dropdown({trigger, content}: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                {trigger}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <div className="dropdown mx-4 p-3">
                    {content}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}