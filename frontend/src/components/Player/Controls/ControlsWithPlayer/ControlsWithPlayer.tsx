import { Random } from "@/icons/Player/Random.tsx";
import { SkipBack } from "@/icons/Player/SkipBack.tsx";
import { Pause } from "@/icons/Player/Pause.tsx";
import { Play } from "@/icons/Player/Play.tsx";
import { Skip } from "@/icons/Player/Skip.tsx";
import { Repeat } from "@/icons/Player/Repeat.tsx";
import player from "@/store/player.ts";
import { observer } from "mobx-react-lite";
import { useTrackInfo } from "@/hooks/useTrackInfo.ts";

interface Props {
  isHaveTrack: boolean;
  play: () => void;
  pause: () => void;
  nextTrack: () => void;
  refAudio: React.MutableRefObject<HTMLMediaElement>;
}

export const ControlsWithPlayer = observer(
  ({ play, pause, nextTrack, refAudio }: Props) => {
    const isPlaying: boolean = player.current.isPlay;
    const [track] = useTrackInfo(player.current.trackId);
    const isHaveTrack: boolean = player.current.trackId !== 0;
    let { isRandom, isRepeat } = player.current;

    function toggleRandom() {
      player.current.isRandom = !player.current.isRandom;
    }

    function toggleRepeat() {
      player.current.isRepeat = !player.current.isRepeat;
    }

    return (
      <div className="flex gap-4 mt-2 justify-center align-items-center controls-track-container">
        {track && (
          <audio
            src={track?.trackData.fileUrlMP3}
            controls
            ref={refAudio}
            className="d-none"
          />
        )}
        <button
          onClick={toggleRandom}
          className={isRandom ? "active-track-controls me-4" : "me-4"}
          disabled={!isHaveTrack}
        >
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
        <button disabled={!isHaveTrack} onClick={nextTrack}>
          <Skip />
        </button>
        <button
          onClick={toggleRepeat}
          className={isRepeat ? "mx-3 active-track-controls": "mx-3"}
          disabled={!isHaveTrack}
        >
          <Repeat />
        </button>
      </div>
    );
  },
);
