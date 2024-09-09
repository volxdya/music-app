import axios, { AxiosResponse } from "axios";
import { getItem } from "@/utils/localStorage.ts";
import { toast } from "@/components/ui/use-toast.ts";
import { API_PATH } from "@/api";

export const deleteFromPlaylist = async (trackId: number, playlistId: number) => {
    const response: AxiosResponse = await axios
        .delete(
            `${API_PATH}/playlist/delete_track/${trackId}/${playlistId}`, {
            headers: {
                Authorization: `Bearer ${getItem('token')}`
            }
        }
        )
        .then((resp) => {
            toast({
                title: `Трек ${trackId} удален из плейлист "Мне нравится"`,
            });
            
            return resp.data;
        })
        .catch(() => {
            toast({
                title: `Трека ${trackId} нет в плейлисте "Мне нравится"`,
            });
        });

    return response.status < 300;
};
