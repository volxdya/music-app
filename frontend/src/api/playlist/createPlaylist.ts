import axios from "axios";
import user from "@/store/user.ts";
import {getItem} from "@/utils/localStorage.ts";

export const createPlaylistUser = async () => {
    await axios.post(`http://localhost:3010/playlist/create`, {
        title: "Новый плейлист",
        userId: user.userData.id,
    }, {
        headers: {
            Authorization: `Bearer ${getItem("token")}`,
        }
    }).then(() => {
        user.getMe();
    }).catch((err) => {
        console.log(err);
    });
}