import './Collection.scss';
import {MainCard} from "../../ui/Cards/MainCard/MainCard.tsx";
import {TrackCard} from "../../ui/Cards/TrackCard/TrackCard.tsx";
import {NavigationText} from "../../ui/Text/NavigationText/NavgiationText.tsx";
import {PlaylistCard} from "../../ui/Cards/PlaylistCard/PlaylistCard.tsx";

export function Collection() {
    return (
        <>
            <h3>Коллекция</h3>
            <p className="music-color">
                У вашей музыки есть
                <span className="mx-1">цвет</span>
            </p>

            <div className="mt-4">
                <MainCard/>
            </div>

            <div className="mt-4 d-flex flex-wrap gap-1 track-cards">
                <TrackCard/>
                <TrackCard/>
                <TrackCard/>
                <TrackCard/>
                <TrackCard/>
                <TrackCard/>
            </div>

            <div className="mt-4">
                <NavigationText text="Мои плейлисты"/>

                <nav className="nav-playlists d-flex gap-3 mt-3 align-items-center">
                    <p className="nav-playlist-item nav-playlist-active">Вы собрали</p>
                    <p className="nav-playlist-item">Вам понравилось</p>
                </nav>

                <div className="mt-2 d-flex flex-wrap gap-3">
                    <PlaylistCard/>
                </div>
            </div>
        </>
    );
}