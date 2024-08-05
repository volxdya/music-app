import './MainCard.scss';
import { Heart } from "../../../icons/Hearts/Heart.tsx";
import { NavigationText } from "../../Text/NavigationText/NavgiationText.tsx";
import { Link } from 'react-router-dom';

interface Props {
    title: string;
    info: string;
    link: string;
}

export function MainCard({ title, info, link }: Props) {
    return (
        <Link to={link}>
            <div className="d-flex justify-content-between main-card">
                <div className="d-flex gap-3">
                    <div className="image-card">
                        <Heart />
                    </div>
                    <div className="d-flex align-items-center">
                        <div>
                            <NavigationText text={title} />
                            <p className="m-0 other-text">{info}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}