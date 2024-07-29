import {HeaderMusic} from "@/ui/HeaderMusic/HeaderMusic.tsx";
import {useEffect} from "react";
import user from "@/store/user.ts";
import {usePlaylistInfo} from "@/hooks/usePlaylistInfo.ts";
import {ITrack} from "@/types/ITrack.ts";
import {TrackCard} from "@/ui/Cards/TrackCard/TrackCard.tsx";

export function Playlist() {
    useEffect(() => {
        user.getMe();
    }, []);

    const {playlist} = usePlaylistInfo();

    return (
        <>
            <HeaderMusic whatIs="Плейлист" author={user.userData.login} title="Мне нравится"/>

            <div className="mt-5">
                {user.me.playlists && playlist && (
                    <>
                        {playlist.tracks.map((item: ITrack) => (
                            <>
                                <TrackCard id={item.id} author="test" title={item.title}/>
                            </>
                        ))}
                    </>
                )}
            </div>
        </>
    );
}