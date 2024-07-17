import './Player.scss';
import {Play} from "../../icons/Player/Play.tsx";
import {Random} from "../../icons/Player/Random.tsx";
import {Repeat} from "../../icons/Player/Repeat.tsx";

export function Player() {
    return (
        <div className="player d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3">
                <img
                    src="https://i1.sndcdn.com/artworks-ECKXdM5RsSBxdXja-acLzLg-t500x500.jpg"
                     alt="Картинка трека"
                    className="player-img"
                />
                <div className="d-flex align-items-center">
                    <div>
                        <p className="m-0 player-title">Lo siento</p>
                        <p className="m-0 player-author">Big baby tape</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex gap-5 justify-content-center align-items-center controls-track-container">
                    <Random/>
                    <Play/>
                    <Repeat/>
                </div>

                <div className="d-flex align-items-center gap-3 mt-2">
                    <p className="m-0 time-player">00:17</p>
                    <div className="progress-bar-container">
                        <div className="progress-bar-player" style={{width: `12%`}}/>
                    </div>
                    <p className="m-0 time-player">03:14</p>
                </div>
            </div>
            <div>Settings</div>
        </div>
    );
}