import axios, {AxiosError} from "axios";
import {useCheckLike} from "@/hooks/useCheckLike.ts";
import {useToast} from "@/components/ui/use-toast.ts";

export const useAddToPlaylist = (trackId: number, playlistId: number) => {

    const {checkLike, isLike} = useCheckLike(playlistId, trackId);
    const {toast} = useToast();

    const createLike = async () => {
        if (isLike) {
            await axios.delete(`http://localhost:3010/playlist/delete_track/${trackId}/${playlistId}`)
                .then((resp) => {
                    console.log(resp.data);
                    checkLike();
                    toast({
                        title: `Трек ${trackId} удален из плейлиста "Мне нравится"`,
                    })
                }).catch((err) => {
                    console.log(err);
                });
        } else {
            await axios.post(`http://localhost:3010/playlist/add_track`, {
                playlistId: playlistId,
                trackId: trackId
            }).then((resp) => {
                console.log(resp.data);
                checkLike();
                toast({
                    title: `Трек ${trackId} добавлен в плейлист "Мне нравится"`,
                })
            }).catch((err: AxiosError) => {
                console.log(err);
            });
        }
    };

    return {createLike};
}