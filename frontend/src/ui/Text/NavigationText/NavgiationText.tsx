import {Right} from "../../../icons/Right.tsx";
import './NavigationText.scss';

export function NavigationText({text}: {text: string}) {
    return (
        <h5 className="m-0 main-text d-flex align-items-center">
            <span className="nav-text">
                {text}
                <span className="mx-2">
                    <Right/>
                </span>
            </span>
        </h5>
    )
}