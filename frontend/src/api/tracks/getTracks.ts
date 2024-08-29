import axios, { AxiosResponse } from "axios";
import { API_PATH } from "@/api";

export const getTracks = async (
  search: string | undefined,
  bySearch: string | undefined,
) => {
  const response: AxiosResponse = await axios.get(
    `${API_PATH}/track/${search}/${bySearch}`,
  );
  return response;
};
