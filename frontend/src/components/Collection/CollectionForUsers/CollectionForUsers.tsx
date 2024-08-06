import { MainCard } from "@/ui/Cards/MainCard/MainCard.tsx";
import { NavigationText } from "@/ui/Text/NavigationText/NavgiationText.tsx";
import { CreatePlaylistCard } from "@/ui/Cards/PlaylistCard/CreatePlaylistCard.tsx";
import { getItem } from "@/utils/localStorage.ts";
import user from "@/store/user.ts";
import { PlaylistCard } from "@/ui/Cards/PlaylistCard/PlaylistCard.tsx";

import { observer } from "mobx-react-lite";
import { IPlaylist } from "@/types/IPlaylist.ts";
import uniqid from "uniqid";
import { usePlaylistInfo } from "@/hooks/usePlaylistInfo";
import { useCreatePlaylist } from "@/hooks/useCreatePlaylist";

export const CollectionForUsers = observer(() => {
    const { createPlaylist } = useCreatePlaylist(user.userData.id);
    const { playlist } = usePlaylistInfo();
    let title = "треков";


    function getTitle(charAt: number, end: number, result: string) {
        if (playlist) {
            for (let i = charAt; i < end; i++) {
                if (playlist.tracks.length === charAt ||
                    playlist.tracks.length.toString().charAt(i) === charAt.toString()
                ) {
                    title = result
                }
            }

            return "треков";
        }
    }

    getTitle(1, 10, "трек");
    getTitle(2, 5, "трека");


    return (
        <>
            <h3 className="fs-5">Коллекция</h3>
            <p className="music-color">
                У вашей музыки есть
                <span className="mx-1">цвет</span>
            </p>

            <div className="mt-4">
                <MainCard
                    title="Мне нравится"
                    info={playlist ? `${playlist?.tracks.length} ${title}` : `=D`}
                    link="/like"
                />
            </div>

            <div className="mt-4">
                <NavigationText text="Мои плейлисты" />

                <nav className="nav-playlists d-flex gap-3 mt-4 align-items-center">
                    <p className="nav-playlist-item nav-playlist-active">Вы собрали</p>
                    <p className="nav-playlist-item">Вам понравилось</p>
                </nav>

                <div className="d-flex flex-wrap gap-3">
                    <div onClick={createPlaylist}>
                        <CreatePlaylistCard />
                    </div>
                    {getItem("token") && (
                        <>
                            {user.me.playlists.map((item: IPlaylist) => (
                                <PlaylistCard
                                    title={item.title}
                                    imageUrl={item.avatarUrl}
                                    key={uniqid()}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </>
    )
});