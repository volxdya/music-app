import './MainScreen.scss';
import { Play } from "../../icons/Play.tsx";
import { MainCard } from "../../ui/MainCard/MainCard.tsx";

export function MainScreen() {
    return (
        <>
            <div className="d-flex justify-content-center circle-container">
                <div className="circle d-flex justify-content-center">
                    <div className='c-2'></div>
                    <div className='c-3'></div>
                </div>
            </div>
            <button className="title-wave">
                <div className="d-flex align-items-center gap-2 wave-button">
                    <Play />
                    Моя волна
                </div>
            </button>
            <div className="container-playlists d-flex gap-3">
                <MainCard />
                <MainCard />
            </div>
        </>

    );
}