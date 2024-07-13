import './MainCard.scss';
import {Heart} from "../../../icons/Hearts/Heart.tsx";

export function MainCard() {
    return (
        <div className="d-flex justify-content-between main-card">
            <div className="d-flex gap-3">
                <div className="image-card">
                    <Heart/>
                </div>
                <div>
                    <h4 className="m-0 main-text">Мне нравится</h4>
                    <p className="m-0 other-text">1160 треков</p>
                </div>
            </div>
        </div>
    );
}