import axios, { AxiosResponse } from "axios";
import { API_PATH } from "@/api";

export const getUserData = async (userId: number) => {
  const response: AxiosResponse = await axios.get(
    `${API_PATH}/user/get_by_id/${userId}`,
  );

  return response;
};
