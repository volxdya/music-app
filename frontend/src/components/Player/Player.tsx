import './Player.scss';
import {Play} from "../../icons/Player/Play.tsx";
import {Random} from "../../icons/Player/Random.tsx";
import {Repeat} from "../../icons/Player/Repeat.tsx";
import {SecondHeart} from "../../icons/Hearts/SecondHeart.tsx";
import {Skip} from "@/icons/Player/Skip.tsx";
import {SkipBack} from "@/icons/Player/SkipBack.tsx";
import {MainPlayerDropdown} from "@/components/Player/Dropdown/MainPlayerDropdown.tsx";
import {SettingsPlayerDropdown} from "@/components/Player/Dropdown/SettingsPlayerDropdown.tsx";
import {observer} from "mobx-react-lite";
import {useEffect, useRef, useState} from "react";
import {Pause} from "@/icons/Player/Pause.tsx";
import player from "@/store/player.ts";
import {useTrackInfo} from "@/hooks/useTrackInfo.ts";

export const Player = observer(() => {

    const refAudio = useRef<HTMLMediaElement>();
    const [isPlaying, setIsPlaying] = useState(true);
    const [time, setTime] = useState(0);

    const play = () => {
        refAudio.current?.play();
        console.log("play")

        setIsPlaying(true);
    }

    const pause = () => {
        refAudio.current?.pause();
        console.log("pause")

        setIsPlaying(false);
    }


    useEffect(() => {
        const timer = setInterval(() => {
            if (refAudio.current) {
                if (isPlaying && time < refAudio.current.duration) {
                    setTime((time) => time + 1);
                }
            }

        }, 1000);

        if (refAudio.current) {
            if (time >= refAudio.current.duration) {
                pause();

                setIsPlaying(false);
                setTime(0);
            }
        }

        return () => {
            clearInterval(timer);
        }
    }, [time, isPlaying]);


    function getPadTimeZero(time: any) {
        return time.toString().padStart(2, "0");
    }

    const minutes = getPadTimeZero(Math.floor(time / 60));
    const seconds = getPadTimeZero(time - minutes * 60);

    let durationMinutes;
    let durationSeconds;

    if (refAudio.current?.duration) {
        durationMinutes = getPadTimeZero(Math.floor(refAudio.current?.duration / 60));
        durationSeconds = getPadTimeZero(Math.floor(refAudio.current?.duration - durationMinutes * 60));
    } else {
        durationMinutes = "XX";
        durationSeconds = "XX";
    }

    const [track] = useTrackInfo(player.current.trackId);

    return (
        <div className="player d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 track-data-player">
                {track && (
                    <img
                        src={track.avatarUrl}
                        alt="Картинка трека"
                        className="player-img"
                    />
                )}
                <div className="d-flex align-items-center gap-5">

                    {track && (
                        <div>
                            <p className="m-0 player-title">{track?.title}</p>
                            <p className="m-0 player-author">{track?.author.login}</p>
                        </div>
                    )}

                    <div className="controls-player d-flex gap-4">
                        <SecondHeart/>
                        <MainPlayerDropdown/>
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex gap-4 mt-2 justify-content-center align-items-center controls-track-container">
                    {track && (
                        <audio
                            src={track?.trackUrl}
                            controls
                            ref={refAudio}
                            className="d-none"
                        />
                    )}
                    <div className="me-4">
                        <Random/>
                    </div>
                    <SkipBack/>
                    {isPlaying ? (
                        <button onClick={pause}>
                            <Pause/>
                        </button>
                    ) : (
                        <button onClick={play}>
                            <Play/>
                        </button>
                    )}
                    <Skip/>
                    <div className="mx-4">
                        <Repeat/>
                    </div>
                </div>

                <div className="d-flex align-items-center gap-3 mt-2 player-data">
                    <p className="m-0 time-player">{minutes}:{seconds}</p>
                    <div className="progress-bar-container">
                        <div className="progress-bar-player"
                             style={{width: (time / refAudio.current?.duration) * 100 + "%"}}/>
                    </div>
                    <p className="m-0 time-player">{durationMinutes}:{durationSeconds}</p>
                </div>
            </div>
            <div className="settings-player d-flex justify-content-end">
                <SettingsPlayerDropdown/>
            </div>
        </div>
    );
});