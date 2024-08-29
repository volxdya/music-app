import axios, { AxiosResponse } from "axios";
import { API_PATH } from "@/api";

export const getGenres = async () => {
  const response: AxiosResponse = await axios.get(`${API_PATH}/genre/get_all`);

  return response;
};
