import axios, { AxiosResponse } from "axios";
import { API_PATH } from "@/api";

export const getAuthors = async () => {
  const response: AxiosResponse = await axios.get(
    `${API_PATH}/user/get_authors`,
  );

  return response;
};
