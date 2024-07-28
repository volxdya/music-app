import './MainScreen.scss';
import { Play } from "../../icons/Play.tsx";
import { MainCard } from "../../ui/Cards/MainCard/MainCard.tsx";
import {Link} from "react-router-dom";

export function MainScreen() {
    return (
        <>
            <div className="d-flex justify-content-center circle-container">
                <div className="circle d-flex justify-content-center">
                    <div className='c-2'></div>
                    <div className='c-3'></div>
                    <div className='c-4'></div>
                    <div className='c-5'></div>
                </div>
            </div>
            <button className="title-wave">
                <div className="d-flex align-items-center gap-2 wave-button justify-content-center">
                    <Play />
                    Моя волна
                </div>
            </button>
            <div className="container-playlists d-flex gap-3 mt-5">
                <Link to="/like" className="w-100">
                    <MainCard />
                </Link>
                <MainCard />
            </div>
        </>

    );
}