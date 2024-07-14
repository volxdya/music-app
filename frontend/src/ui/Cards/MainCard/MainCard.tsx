import './MainCard.scss';
import {Heart} from "../../../icons/Hearts/Heart.tsx";
import {NavigationText} from "../../Text/NavigationText/NavgiationText.tsx";

export function MainCard() {
    return (
        <div className="d-flex justify-content-between main-card">
            <div className="d-flex gap-3">
                <div className="image-card">
                    <Heart/>
                </div>
                <div className="d-flex align-items-center">
                    <div>
                        <NavigationText text="Мне нравится"/>
                        <p className="m-0 other-text">1160 треков</p>
                    </div>
                </div>
            </div>
        </div>
    );
}