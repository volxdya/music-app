import './MainScreen.scss';
import { Play } from "../../icons/Play.tsx";
import { MainCard } from "../../ui/Cards/MainCard/MainCard.tsx";
import { Link } from "react-router-dom";
import { usePlaylistInfo } from '@/hooks/usePlaylistInfo.ts';

export function MainScreen() {
    const { playlist } = usePlaylistInfo();
    let title = "треков";


    function getTitle(charAt: number, end: number, result: string) {
        if (playlist) {
            for (let i = charAt; i < end; i++) {
                if (playlist.tracks.length === charAt ||
                    playlist.tracks.length.toString().charAt(i) === charAt.toString()
                ) {
                    title = result
                }
            }

            return "треков";
        }
    }

    getTitle(1, 10, "трек");
    getTitle(2, 5, "трека");

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
                {playlist && (
                    <>
                        <MainCard
                            title="Мне нравится"
                            info={`${playlist?.tracks.length} ${title}`}
                            link="/like"
                        />

                        <MainCard
                            title="Мне нравится"
                            info={`${playlist?.tracks.length} ${title}`}
                            link="/like"
                        />

                    </>
                )}
            </div>
        </>

    );
}