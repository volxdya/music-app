import axios, {AxiosResponse} from "axios";
import { API_PATH } from "@/api";

export const getSimilar = async (authorId: number) => {
  const response: AxiosResponse = await axios.get(
    `${API_PATH}/user/get_similar_authors/${authorId}`,
  );

  return response;
};
