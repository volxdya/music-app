import {HeaderMusic} from "@/ui/HeaderMusic/HeaderMusic.tsx";
import {useEffect} from "react";
import user from "@/store/user.ts";
import {usePlaylistInfo} from "@/hooks/usePlaylistInfo.ts";
import {ITrack} from "@/types/ITrack.ts";
import {TrackCard} from "@/ui/Cards/TrackCard/TrackCard.tsx";
import uniqid from "uniqid";

export function Playlist() {
    useEffect(() => {
        user.getMe();
        console.log("use");
    }, []);

    const {playlist} = usePlaylistInfo();


    return (
        <>
            <HeaderMusic whatIs="Плейлист" author={user.userData.login} title="Мне нравится"/>

            <div className="mt-5">
                {user.me.playlists && playlist && (
                    <>
                        {playlist.tracks.reverse().map((item: ITrack) => (
                            <>
                                <TrackCard
                                    id={item.id} author="test"
                                    title={item.title}
                                    img={item.avatarUrl}
                                    key={uniqid()}
                                />
                            </>
                        ))}
                    </>
                )}
            </div>
        </>
    );
}