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

const Player = observer(() => {
  const refAudio = useRef<HTMLMediaElement>();
  const [listen] = useListen();

  const isPlaying: boolean = player.current.isPlay;
  const time: number = player.current.time;
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

  useEffect(() => {
    if (isPlaying) {
      refAudio.current?.play();
    }
  });

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

  return (
    <div className="player flex justify-content-between align-items-center">
      <div className="flex gap-3 track-data-player">
        <TrackData />
        <ControlsWithUser isHaveTrack={isHaveTrack} />
      </div>

      <div>
        <ControlsWithPlayer refAudio={refAudio} play={play} pause={pause} />
        <Progress refAudio={refAudio} />
      </div>

      <ControlsWithTrack refAudio={refAudio} />
    </div>
  );
});

export default Player;
