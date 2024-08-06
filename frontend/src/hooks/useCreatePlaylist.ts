import user from "@/store/user";
import axios from "axios";

export const useCreatePlaylist = (userId: number) => {
    const createPlaylist = async () => {
        await axios.post(`http://localhost:3010/playlist/create`, {
            title: "Новый плейлист",
            userId: user.userData.id,
        }).then(() => {
            user.getMe();
        }).catch((err) => {
            console.log(err);
        });
    }

    return { createPlaylist };
}