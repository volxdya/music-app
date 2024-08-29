import axios from "axios";
import {useEffect, useState} from "react";
import {IPlaylist} from "@/types/IPlaylist.ts";
import user from "@/store/user.ts";

export const usePlaylistInfo = () => {
    const [playlist, setPlaylist] = useState<IPlaylist>();
    
    useEffect(() => {
        user.getMe();
    }, []);

    // Получение инфы о плейлисте
    useEffect(() => {
        if (user.me.playlists[0]) {
            axios.get(`http://localhost:3010/playlist/get_by_id/${user.me.playlists[0].id}`).then((resp) => {
                setPlaylist(resp.data);
            }).catch((err) => {
                console.log(err);
            });
        }
    }, []);

    return {playlist}
}