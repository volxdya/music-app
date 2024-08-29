import axios, { AxiosResponse } from "axios";
import { API_PATH } from "@/api";

export const getAlbumData = async (albumId: number) => {
  const response: AxiosResponse = await axios.get(
    `${API_PATH}/album/get_by_id/${albumId}`,
  );

  return response;
};
