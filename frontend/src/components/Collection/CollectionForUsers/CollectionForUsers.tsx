import {MainCard} from "@/ui/Cards/MainCard/MainCard.tsx";
import {TrackCard} from "@/ui/Cards/TrackCard/TrackCard.tsx";
import {NavigationText} from "@/ui/Text/NavigationText/NavgiationText.tsx";
import {CreatePlaylistCard} from "@/ui/Cards/PlaylistCard/CreatePlaylistCard.tsx";
import {getItem} from "@/utils/localStorage.ts";
import user from "@/store/user.ts";
import {PlaylistCard} from "@/ui/Cards/PlaylistCard/PlaylistCard.tsx";
import axios from "axios";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {IPlaylist} from "@/types/IPlaylist.ts";
import uniqid from "uniqid";

export const CollectionForUsers = observer(() => {

    useEffect(() => {
        user.getUserData();
        user.getMe();
    }, []);

    async function createPlaylist() {
        await axios.post(`http://localhost:3010/playlist/create`, {
            title: "Новый плейлист",
            userId: user.userData.id,
        }).then((resp) => {
            console.log(resp.data);
            user.getMe();
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <h3 className="fs-5">Коллекция</h3>
            <p className="music-color">
                У вашей музыки есть
                <span className="mx-1">цвет</span>
            </p>

            <div className="mt-4">
                <MainCard/>
            </div>

            <div className="mt-4 d-flex flex-wrap gap-1 track-cards">
                <TrackCard id={1} title="qwe" author="123"/>
                <TrackCard id={1} title="qwe" author="123"/>
                <TrackCard id={1} title="qwe" author="123"/>
                <TrackCard id={1} title="qwe" author="123"/>
                <TrackCard id={1} title="qwe" author="123"/>
            </div>

            <div className="mt-4">
                <NavigationText text="Мои плейлисты"/>

                <nav className="nav-playlists d-flex gap-3 mt-4 align-items-center">
                    <p className="nav-playlist-item nav-playlist-active">Вы собрали</p>
                    <p className="nav-playlist-item">Вам понравилось</p>
                </nav>

                <div className="d-flex flex-wrap gap-3">
                    <div onClick={createPlaylist}>
                        <CreatePlaylistCard/>
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