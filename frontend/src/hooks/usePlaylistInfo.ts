import { useEffect, useState } from "react";
import { IPlaylist } from "@/types/IPlaylist.ts";
import user from "@/store/user.ts";
import { getPlaylistData } from "@/api/playlist/getPlaylistData.ts";

export const usePlaylistInfo = () => {
  const [playlist, setPlaylist] = useState<IPlaylist>();

  useEffect(() => {
    user.getMe();
  }, []);

  // Получение инфы о плейлисте
  useEffect(() => {
    if (user.me.playlists[0]) {
      getPlaylistData().then((resp) => {
        setPlaylist(resp.data);
      });
    }
  }, []);

  return { playlist };
};
