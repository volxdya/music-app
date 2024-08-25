import "./Player.scss";
import { Play } from "../../icons/Player/Play.tsx";
import { Random } from "../../icons/Player/Random.tsx";
import { Repeat } from "../../icons/Player/Repeat.tsx";
import { SecondHeart } from "../../icons/Hearts/SecondHeart.tsx";
import { Skip } from "@/icons/Player/Skip.tsx";
import { SkipBack } from "@/icons/Player/SkipBack.tsx";
import { MainPlayerDropdown } from "@/components/Player/Dropdown/MainPlayerDropdown.tsx";
import { SettingsPlayerDropdown } from "@/components/Player/Dropdown/SettingsPlayerDropdown.tsx";
import { observer } from "mobx-react-lite";
import { ChangeEvent, useEffect, useRef } from "react";
import { Pause } from "@/icons/Player/Pause.tsx";
import player from "@/store/player.ts";
import { useTrackInfo } from "@/hooks/useTrackInfo.ts";
import { VolumeUp } from "@/icons/Volume/VolumeUp.tsx";
import { VolumeDown } from "@/icons/Volume/VolumeDown.tsx";
import { VolumeOff } from "@/icons/Volume/VolumeOff.tsx";
import { useListen } from "@/hooks/useListen.ts";

const Player = observer(() => {
  const refAudio = useRef<HTMLMediaElement>();
  const [listen] = useListen();

  const isPlaying: boolean = player.current.isPlay;
  const time: number = player.current.time;
  const currentVolume: number = player.current.currentVolume;
  const trackId: number = player.current.trackId;
  const isHaveTrack: boolean = player.current.trackId !== 0;

  const play = () => {
    refAudio.current?.play();
    player.current.isPlay = true;
  };

  const pause = () => {
    refAudio.current?.pause();
    player.current.isPlay = false;
  };

  const handleChangeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    if (refAudio.current) {
      refAudio.current.volume = Number(e.target.value / 100);

      player.current.currentVolume = Number(e.target.value / 100);
      player.current.previousVolume = Number(e.target.value / 100);
    }
  };

  const offMusic = () => {
    if (refAudio.current) {
      refAudio.current.volume = 0;
      player.current.currentVolume = 0;
    }
  };

  const onMusic = () => {
    if (refAudio.current) {
      refAudio.current.volume = player.current.previousVolume;
      player.current.currentVolume = player.current.previousVolume;
    }
  };

  useEffect(() => {
    if (isPlaying) {
      refAudio.current?.play();
    }
  });

  useEffect(() => {
    if (isPlaying && refAudio.current) {
      setTimeout(async () => {
        await listen(player.current.trackId);
      }, 30000);
    }
  }, [trackId]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (refAudio.current) {
        if (isPlaying && player.current.time < refAudio.current.duration) {
          player.current.time += 1;
        }
      }
    }, 1000);

    if (refAudio.current) {
      if (time >= refAudio.current.duration) {
        pause();
        player.current.time = 0;
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [time, isPlaying]);

  function getPadTimeZero(time: number) {
    return time.toString().padStart(2, "0");
  }

  // function getCorrect(minutesFn: string, secondsFn: string, timeFn: number): string[] {
  //     minutesFn = getPadTimeZero(Math.floor(time / 60));
  //     secondsFn = getPadTimeZero(timeFn - Number(minutesFn) * 60);
  //
  //     return [minutesFn, secondsFn];
  // }

  const minutes = getPadTimeZero(Math.floor(time / 60));
  const seconds = getPadTimeZero(time - Number(minutes) * 60);

  let durationMinutes;
  let durationSeconds;

  if (refAudio.current?.duration) {
    durationMinutes = getPadTimeZero(
      Math.floor(refAudio.current?.duration / 60),
    );
    durationSeconds = getPadTimeZero(
      Math.floor(refAudio.current?.duration - Number(durationMinutes) * 60),
    );
  }

  const [track] = useTrackInfo(player.current.trackId);

  return (
    <div className="player d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3 track-data-player">
        {track && (
          <img
            src={track.trackData.fileUrlAvatar}
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

          {isHaveTrack && (
            <div className="controls-player d-flex gap-4">
              <SecondHeart />
              <MainPlayerDropdown />
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="d-flex gap-4 mt-2 justify-content-center align-items-center controls-track-container">
          {track && (
            <audio
              src={track?.trackData.fileUrlMP3}
              controls
              ref={refAudio}
              className="d-none"
            />
          )}
          <button className="me-4" disabled={!isHaveTrack}>
            <Random />
          </button>
          <button disabled={!isHaveTrack}>
            <SkipBack />
          </button>
          {isPlaying ? (
            <button onClick={pause}>
              <Pause />
            </button>
          ) : (
            <button onClick={play}>
              <Play />
            </button>
          )}
          <button disabled={!isHaveTrack}>
            <Skip />
          </button>
          <button className="mx-4" disabled={!isHaveTrack}>
            <Repeat />
          </button>
        </div>

        <div className="d-flex align-items-center gap-3 mt-2 player-data">
          <p className="m-0 time-player">
            {minutes}:{seconds}
          </p>
          <div className="progress-bar-container">
            <div
              className="progress-bar-player"
              style={
                isHaveTrack
                  ? { width: (time / refAudio.current?.duration) * 100 + "%" }
                  : { width: "0" }
              }
            />
          </div>
          {isHaveTrack ? (
            <p className="m-0 time-player">
              {durationMinutes}:{durationSeconds}
            </p>
          ) : (
            <p className="m-0 time-player">00:00</p>
          )}
        </div>
      </div>
      <div className="settings-player d-flex justify-content-end gap-4">
        <div className="d-flex align-items-center gap-3">
          <SettingsPlayerDropdown />

          {refAudio.current && (
            <>
              {currentVolume === 0 && (
                <button onClick={onMusic}>
                  <VolumeOff />
                </button>
              )}

              {currentVolume * 100 < 50 && currentVolume > 0 && (
                <button onClick={offMusic}>
                  <VolumeDown />
                </button>
              )}

              {currentVolume * 100 >= 50 && (
                <button onClick={offMusic}>
                  <VolumeUp />
                </button>
              )}
            </>
          )}
          <input type="range" onChange={handleChangeVolume} />
        </div>
      </div>
    </div>
  );
});

export default Player;
