import axios, { AxiosResponse } from "axios";
import user from "@/store/user.ts";
import { API_PATH } from "@/api";

export const getPlaylistData = async () => {
  const response: AxiosResponse = await axios.get(
    `${API_PATH}/playlist/get_by_id/${user.me.playlists[0].id}`,
  );

  return response;
};
