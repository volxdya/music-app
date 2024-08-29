import axios, { AxiosResponse } from "axios";
import { getItem } from "@/utils/localStorage.ts";
import { toast } from "@/components/ui/use-toast.ts";
import { API_PATH } from "@/api";

export const addToPlaylist = async (trackId: number, playlistId: number) => {
  const response: AxiosResponse = await axios
    .post(
      `${API_PATH}/playlist/add_track`,
      {
        playlistId: playlistId,
        trackId: trackId,
      },
      {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      },
    )
    .then((resp) => {
      toast({
        title: `Трек ${trackId} добавлен в плейлист "Мне нравится"`,
      });

      return resp.data;
    })
    .catch(() => {
      toast({
        title: `Трек ${trackId} уже добавлен в плейлист "Мне нравится"`,
      });
    });

  return response.status < 300;
};
