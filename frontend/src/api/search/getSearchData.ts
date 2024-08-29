import axios, { AxiosResponse } from "axios";
import { API_PATH } from "@/api";

export const getSearchData = async (value: string) => {
  const response: AxiosResponse = await axios.get(
    `${API_PATH}/search/${value}`,
  );

  return response;
};
