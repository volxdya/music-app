import './TrackCard.scss';
import {SecondHeart} from "../../../icons/Hearts/SecondHeart.tsx";
import {Dots} from "../../../icons/Dots.tsx";
import {BreakHeart} from "../../../icons/Hearts/BreakHeart.tsx";

interface Props {
    title: string;
}

export function TrackCard({title}: Props) {
    return (
        <div className="d-flex track-card justify-content-between align-items-center">
            <div className="d-flex gap-3">
                <div>
                    <img src="https://i.pinimg.com/736x/6e/85/cf/6e85cf5884fc21b1c2e0a42f9c10b00d.jpg" alt=""/>
                </div>
                <div>
                    <p className="m-0 title">{title}</p>
                    <p className="m-0 author">Trap</p>
                </div>
            </div>
            <div className="d-flex gap-5 align-items-center">
                <SecondHeart/>
                <BreakHeart/>
                <Dots/>
                <div className="time">03:36</div>
            </div>
        </div>
    )
}