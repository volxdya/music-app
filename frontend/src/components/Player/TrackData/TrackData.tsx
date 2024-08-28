import { Link } from "react-router-dom";
import { useTrackInfo } from "@/hooks/useTrackInfo.ts";
import player from "@/store/player.ts";
import { observer } from "mobx-react-lite";

export const TrackData = observer(() => {
  const [track] = useTrackInfo(player.current.trackId);

  return (
    <>
      {track && (
        <img
          src={track.trackData.fileUrlAvatar}
          alt="Картинка трека"
          className="player-img"
        />
      )}

      <div className="d-flex align-items-center mx-2">
        {track && (
          <div>
            <p className="m-0 player-title">{track.title}</p>
            <Link to={`/author/${track.author.id}`}>
              <p className="m-0 player-author">{track.author.login}</p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
});
