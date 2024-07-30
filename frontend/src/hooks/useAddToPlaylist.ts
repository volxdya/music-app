import axios, {AxiosError} from "axios";
import {useCheckLike} from "@/hooks/useCheckLike.ts";
import {useToast} from "@/components/ui/use-toast.ts";
import {useEffect} from "react";
import user from "@/store/user.ts";

export const useAddToPlaylist = (trackId: number) => {

    useEffect(() => {
        user.getMe();
    }, []);

    let playlistId: number;

    if (user.userData.isUser) {
        playlistId = user.me.playlists[0].id;
    }

    const {checkLike, isLike} = useCheckLike(trackId);
    const {toast} = useToast();


    const createLike = async () => {
        if (isLike && user.userData.isUser) {
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