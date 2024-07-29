import axios from "axios";
import {useState} from "react";

export const useCheckLike = (trackId: number, playlistId: number) => {
    const [isLike, setIsLike] = useState(false);

    const checkLike = async() => {
        axios.post(`http://localhost:3010/playlist/check_like`, {
            playlistId: trackId,
            trackId: playlistId
        }).then((resp) => {
            setIsLike(resp.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return {isLike, checkLike};
}