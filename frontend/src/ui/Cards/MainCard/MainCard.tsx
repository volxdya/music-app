import './MainCard.scss';
import {Heart} from "../../../icons/Hearts/Heart.tsx";
import {NavigationText} from "../../Text/NavigationText/NavgiationText.tsx";

interface Props {
    title: string;
    info: string;
}

export function MainCard({title, info}: Props) {
    return (
        <div className="d-flex justify-content-between main-card">
            <div className="d-flex gap-3">
                <div className="image-card">
                    <Heart/>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <NavigationText text={title}/>
                        <p className="m-0 other-text">{info}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}