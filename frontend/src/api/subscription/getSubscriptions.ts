import axios, { AxiosResponse } from "axios";

export const getSubscriptions = async () => {
  const response: AxiosResponse = await axios.get(
    `http://localhost:3010/subscription/get_all`,
  );

  return response;
};
