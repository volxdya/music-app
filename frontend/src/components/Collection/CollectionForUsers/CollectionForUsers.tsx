import { MainCard } from "@/ui/Cards/MainCard/MainCard.tsx";
import { observer } from "mobx-react-lite";
import { usePlaylistInfo } from "@/hooks/usePlaylistInfo";
import { NavigationCollection } from "@/components/Collection/CollectionForUsers/Nivagtion/NavigationCollection.tsx";
import { PlaylistsCollection } from "@/components/Collection/CollectionForUsers/Playlists/PlaylistsCollection.tsx";

export const CollectionForUsers = observer(() => {
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
    <>
      <h3 className="fs-5">Коллекция</h3>
      <p className="music-color">
        У вашей музыки есть
        <span className="mx-1">цвет</span>
      </p>

      <div className="mt-4">
        <MainCard
          title="Мне нравится"
          info={playlist ? `${playlist?.tracks.length} ${title}` : `=D`}
          link="/like"
        />
      </div>

      <div className="mt-4">
        <NavigationCollection />
        <PlaylistsCollection />
      </div>
    </>
  );
});
