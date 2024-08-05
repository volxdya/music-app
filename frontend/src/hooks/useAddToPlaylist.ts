import axios, { AxiosError } from "axios";
import { useToast } from "@/components/ui/use-toast.ts";
import user from "@/store/user.ts";

export const useAddToPlaylist = (trackId: number) => {
    const playlistId: number = user.me.playlists[0].id;;

    const { toast } = useToast();


    const createLike = async () => {
        // if (user.userData.isUser && isLike) {
        //     await axios.delete(`http://localhost:3010/playlist/delete_track/${trackId}/${playlistId}`)
        //         .then((resp) => {
        //             console.log(resp.data);
        //             toast({
        //                 title: `Трек ${trackId} удален из плейлиста "Мне нравится"`,
        //             })
        //         }).catch((err) => {
        //             console.log(err);
        //         });
        // } else {
        //     await axios.post(`http://localhost:3010/playlist/add_track`, {
        //         playlistId: playlistId,
        //         trackId: trackId
        //     }).then((resp) => {
        //         console.log(resp.data);
        //         toast({
        //             title: `Трек ${trackId} добавлен в плейлист "Мне нравится"`,
        //         })
        //     }).catch((err: AxiosError) => {
        //         console.log(err);
        //     });
        // }

        await axios.post(`http://localhost:3010/playlist/add_track`, {
            playlistId: playlistId,
            trackId: trackId
        }).then((resp) => {
            console.log(resp.data);
            toast({
                title: `Трек ${trackId} добавлен в плейлист "Мне нравится"`,
            })
        }).catch((err: AxiosError) => {
            console.log(err);
        });
    };

    return { createLike };


}