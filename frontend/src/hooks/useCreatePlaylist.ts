import user from "@/store/user";
import axios from "axios";
import {getItem} from "@/utils/localStorage.ts";

export const useCreatePlaylist = () => {

    // Создание плейлиста
    const createPlaylist = async () => {
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

    return { createPlaylist };
}