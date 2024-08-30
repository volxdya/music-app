import axios, { AxiosResponse } from "axios"
import { API_PATH } from ".."

export const check = async (userId: number) => {
    const response: AxiosResponse = await axios.get(`${API_PATH}/user/check/${userId}`);

    return response;
}