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
            <HeaderMusic
                author={user.userData.login}
                isCircle={false}
                whatIs="Плейлист"
                title="Мне нравится"
            />

            <div className="mt-5">
                {user.me.playlists && playlist && (
                    <>
                        {playlist.tracks.reverse().map((item: ITrack) => (
                            <TrackCard
                                id={item.id} author="test"
                                title={item.title}
                                img={item.trackData.fileUrlAvatar}
                                key={uniqid()}
                                where="playlist"
                                byFind={user.me.playlists[0].id}
                            />
                        ))}
                    </>
                )}
            </div>
        </>
    );
}