import axios, {AxiosResponse} from "axios";
import {API_PATH} from "@/api";

export const getAll = async () => {
  const response: AxiosResponse = await axios.get(
    `${API_PATH}/track/get_all`,
  );
  return response;
};
