import axios, {AxiosResponse} from "axios";

export const getTrackData = async (trackId: number) => {
  const response: AxiosResponse = await axios.get(
    `http://localhost:3010/track/get_by_id/${trackId}`,
  );

  return response;
};
