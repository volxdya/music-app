import "./TrackCard.scss";
import { SecondHeart } from "../../../icons/Hearts/SecondHeart.tsx";
import { BreakHeart } from "../../../icons/Hearts/BreakHeart.tsx";
import { DropdownTrack } from "@/ui/Cards/TrackCard/Dropdown/DropdownTrack.tsx";
import { Play } from "@/icons/Player/Play.tsx";
import { useAddToPlaylist } from "@/hooks/useAddToPlaylist.ts";
import player from "@/store/player.ts";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Pause } from "@/icons/Player/Pause.tsx";
import { useCheckLike } from "@/hooks/useCheckLike.ts";

interface Props {
  title: string;
  author: string;
  id: number;
  img?: string;
  where: string;
  byFind: string | number;
  isAlbum: boolean;
  index?: number;
}

export const TrackCard = observer((props: Props) => {
  const { title, author, id, img, where, byFind, isAlbum, index } = props;

  const { createLike } = useAddToPlaylist(id);

  const [isCurrent, setIsCurrent] = useState(false);

  function set() {
    player.setCurrent({
      trackId: id,
      play: {
        next: [""],
        whatPlay: {
          title: where,
          byFind: byFind,
        },
      },
      isPlay: true,
      time: id === player.current.trackId ? player.current.time : 0,
      previousVolume: player.current.previousVolume,
      currentVolume: player.current.currentVolume,
    });
  }

  function pause() {
    player.current.isPlay = false;
  }

  useEffect(() => {
    if (id === player.current.trackId && player.current.isPlay) {
      setIsCurrent(true);
    } else {
      setIsCurrent(false);
    }
  }, [player.current.trackId, id, player.current.isPlay]);

  return (
    <div className="d-flex track-card justify-content-between align-items-center">
      <div className="d-flex gap-4">
        {isAlbum ? (
          <button className="d-flex align-items-center author" onClick={set}>
            {index}
          </button>
        ) : (
          <div className="image-container">
            <img
              src={
                img !== "" && img
                  ? img
                  : "https://i.pinimg.com/736x/6e/85/cf/6e85cf5884fc21b1c2e0a42f9c10b00d.jpg"
              }
              className={isCurrent ? "dark" : ""}
              alt={`Картинка трека ${title}`}
            />
            <div className="play-btn-container">
              {isCurrent && (
                <>
                  {player.current.isPlay && <div className="circle-play"></div>}
                </>
              )}
              {isCurrent ? (
                <button className="play-btn" onClick={pause}>
                  <Pause />
                </button>
              ) : (
                <button className="play-btn" onClick={set}>
                  <Play />
                </button>
              )}
            </div>
          </div>
        )}

        <div>
          <p className="m-0 title">{title}</p>
          <p className="m-0 author">{author}</p>
        </div>
      </div>
      <div className="d-flex gap-5 align-items-center controls-track">
        <button onClick={createLike}>
          <SecondHeart />
        </button>

        <BreakHeart />
        <DropdownTrack id={id} />
        <div className="time">03:36</div>
      </div>
    </div>
  );
});
