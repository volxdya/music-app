import './NavigationText.scss';
import {Right} from "@/icons/Right.tsx";

export function NavigationText({text}: {text: string}) {
    return (
        <h5 className="m-0 main-text align-items-center fs-5">
            <span className="nav-text">
                {text}
                <span className="mx-2">
                    <Right/>
                </span>
            </span>
        </h5>
    )
}