import player from "@/store/player.ts";
import { observer } from "mobx-react-lite";

interface Props {
  refAudio: React.MutableRefObject<HTMLMediaElement>;
}

export const Progress = observer(({ refAudio }: Props) => {
  const isHaveTrack: boolean = player.current.trackId !== 0;
  const time: number = player.current.time;

  // Получение красивого отображения времени
  function getPadTimeZero(time: number) {
    return time.toString().padStart(2, "0");
  }

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
  
  return (
    <div className="flex align-items-center gap-3 mt-2 player-data">
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
  );
});
