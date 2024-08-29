import user from "@/store/user.ts";
import {addToPlaylist} from "@/api/playlist/addToPlaylist.ts";

export const useAddToPlaylist = (trackId: number) => {
  const playlistId: number = user.me.playlists[0].id;

  // Создание лайка в основной плейлист
  const createLike = async () => {
    await addToPlaylist(trackId, playlistId);
  };

  return { createLike };
};
