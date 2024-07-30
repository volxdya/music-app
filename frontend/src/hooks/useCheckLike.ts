import axios from "axios";
import {useEffect, useState} from "react";
import user from "@/store/user.ts";

export const useCheckLike = (trackId: number) => {
    useEffect(() => {
        if (user.userData.isUser) {
            user.getMe();
            user.getUserData();
        }
    }, []);

    const [isLike, setIsLike] = useState(false);
    let playlistId: number;

    if (user.userData.isUser) {
        playlistId = user.me.playlists[0].id;
    }

    const checkLike = async () => {
        if (user.userData.isUser) {
            axios.post(`http://localhost:3010/playlist/check_like`, {
                playlistId: playlistId,
                trackId: trackId
            }).then((resp) => {
                setIsLike(resp.data);
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    return {isLike, checkLike};
}