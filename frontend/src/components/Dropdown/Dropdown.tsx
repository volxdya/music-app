import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu";
import './Dropdown.scss';

interface Props {
    trigger: React.ReactNode;
    content: React.ReactNode;
    classNames?: string;
}

export function Dropdown({trigger, content, classNames}: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                {trigger}
            </DropdownMenuTrigger>
            <DropdownMenuContent className={classNames}>
                <div className= "mx-3 dropdown p-3">
                    {content}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}