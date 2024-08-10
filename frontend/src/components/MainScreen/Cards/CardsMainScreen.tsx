import { MainCard } from "@/ui/Cards/MainCard/MainCard.tsx";
import { usePlaylistInfo } from "@/hooks/usePlaylistInfo.ts";

export function CardsMainScreen() {
  const { playlist } = usePlaylistInfo();
  let title = "треков";

  function getTitle(charAt: number, end: number, result: string) {
    if (playlist) {
      for (let i = charAt; i < end; i++) {
        if (
          playlist.tracks.length === charAt ||
          playlist.tracks.length.toString().charAt(i) === charAt.toString()
        ) {
          title = result;
        }
      }

      return "треков";
    }
  }

  getTitle(1, 10, "трек");
  getTitle(2, 5, "трека");

  return (
    <div className="container-playlists d-flex gap-3 mt-5">
      {playlist && (
        <>
          <div className="w-50">
            <MainCard
              title="Мне нравится"
              info={`${playlist?.tracks.length} ${title}`}
              link="/like"
            />
          </div>

          <div className="w-50">
            <MainCard
              title="Мне нравится"
              info={`${playlist?.tracks.length} ${title}`}
              link="/like"
            />
          </div>
        </>
      )}
    </div>
  );
}
