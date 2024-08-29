import {createPlaylistUser} from "@/api/playlist/createPlaylist.ts";

export const useCreatePlaylist = () => {
  // Создание плейлиста
  const createPlaylist = async () => {
    await createPlaylistUser();
  };

  return { createPlaylist };
};
