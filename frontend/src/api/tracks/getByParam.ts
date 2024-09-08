import axios, { AxiosResponse } from "axios";
import { API_PATH } from "@/api";

export const getTracksByParam = async (
    whatIs: string,
    by: number | string,
) => {
    const response: AxiosResponse = await axios.get(
        `${API_PATH}/${whatIs === "author" ? "user" : "playlist"}/get_by_id/${by}`,
    );
    return response;
};
