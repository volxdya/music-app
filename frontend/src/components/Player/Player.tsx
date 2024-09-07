import "./Player.scss";
import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import player from "@/store/player.ts";
import { useListen } from "@/hooks/useListen.ts";
import { TrackData } from "@/components/Player/TrackData/TrackData.tsx";
import { ControlsWithUser } from "@/components/Player/Controls/ControlsWithUser/ControlsWithUser.tsx";
import { ControlsWithPlayer } from "@/components/Player/Controls/ControlsWithPlayer/ControlsWithPlayer.tsx";
import { Progress } from "@/components/Player/Progress/Progress.tsx";
import { ControlsWithTrack } from "@/components/Player/Controls/ControlsWithTrack/ControlsWithTrack.tsx";
import { getRandomInt } from "@/utils/getRandomInt";

const Player = observer(() => {
  const refAudio = useRef<HTMLMediaElement>();
  const [listen] = useListen();

  // Получение значений из стора
  const isPlaying: boolean = player.current.isPlay;
  const time: number = player.current.time;
  const trackId: number = player.current.trackId;
  const isHaveTrack: boolean = player.current.trackId !== 0;

  // Включение трека
  const play = () => {
    refAudio.current?.play();
    player.current.isPlay = true;
  };

  // Пауза
  const pause = () => {
    refAudio.current?.pause();
    player.current.isPlay = false;
  };

  // Проигрываение следующего трека
  const nextTrack = () => {
    const { title, byFind } = player.current.play.whatPlay;
    const { next } = player.current.play;

    player.setCurrent({
      trackId: next[getRandomInt(next.length)].id,
      play: {
        next: next,
        whatPlay: {
          title: title,
          byFind: byFind,
        },
      },
      isPlay: true,
      time: 0,
      previousVolume: player.current.previousVolume,
      currentVolume: player.current.currentVolume,
    });
  }

  useEffect(() => {
    if (isPlaying) {
      refAudio.current?.play();
    }
  });

  // Функция, которая по истечении 30 секунд, вызывает API запрос, на увеличение прослушивания трека по ID 
  useEffect(() => {
    if (isPlaying && refAudio.current) {
      const interval = setTimeout(async () => {
        await listen(player.current.trackId);
      }, 30000);

      return () => {
        clearTimeout(interval);
      };
    }
  }, [trackId]);

  /*
    Функция, которая увеличивает каждую секунду время трека.
    Вообще это можно сделать через стор, но пока что вызываются конфликты и оставлю это пока что так
  */
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
        nextTrack();
      }
    }

    return () => {
      clearInterval(timer);
    };
  }, [time, isPlaying]);

  return (
    <div className="player flex justify-content-between align-items-center">
      <div className="flex gap-3 track-data-player">
        <TrackData />
        <ControlsWithUser isHaveTrack={isHaveTrack} />
      </div>

      <div>
        <ControlsWithPlayer refAudio={refAudio} play={play} pause={pause} nextTrack={nextTrack} />
        <Progress refAudio={refAudio} />
      </div>

      <ControlsWithTrack refAudio={refAudio} />
    </div>
  );
});

export default Player;
