import user from "@/store/user.ts";
import { deleteFromPlaylist } from "@/api/playlist/deleteFromPlaylist";

export const useDeleteFromPlaylist = (trackId: number) => {
    const playlistId: number = user.me.playlists[0].id;

    // Создание лайка в основной плейлист
    const deleteLike = async () => {
        await deleteFromPlaylist(trackId, playlistId);
    };

    return { deleteLike };
};
