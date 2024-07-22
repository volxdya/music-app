import './Player.scss';
import {Play} from "../../icons/Player/Play.tsx";
import {Random} from "../../icons/Player/Random.tsx";
import {Repeat} from "../../icons/Player/Repeat.tsx";
import {Dots} from "../../icons/Dots.tsx";
import {SecondHeart} from "../../icons/Hearts/SecondHeart.tsx";
import {Skip} from "@/icons/Player/Skip.tsx";
import {SkipBack} from "@/icons/Player/SkipBack.tsx";
import {Settings} from "@/icons/Settings.tsx";

export function Player() {
    return (
        <div className="player d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 track-data-player">
                <img
                    src="https://i1.sndcdn.com/artworks-ECKXdM5RsSBxdXja-acLzLg-t500x500.jpg"
                    alt="Картинка трека"
                    className="player-img"
                />
                <div className="d-flex align-items-center gap-5">
                    <div>
                        <p className="m-0 player-title">Lo siento</p>
                        <p className="m-0 player-author">Big baby tape</p>
                    </div>

                    <div className="controls-player d-flex gap-4">
                        <SecondHeart/>
                        <Dots/>
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex gap-4 mt-2 justify-content-center align-items-center controls-track-container">
                    <div className="me-4">
                        <Random/>
                    </div>
                    <SkipBack/>
                    <Play/>
                    <Skip/>
                    <div className="mx-4">
                        <Repeat/>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-3 mt-2 player-data">
                    <p className="m-0 time-player">00:17</p>
                    <div className="progress-bar-container">
                        <div className="progress-bar-player" style={{width: `12%`}}/>
                    </div>
                    <p className="m-0 time-player">03:14</p>
                </div>
            </div>
            <div className="settings-player d-flex justify-content-end"><Settings/></div>
        </div>
    );
}