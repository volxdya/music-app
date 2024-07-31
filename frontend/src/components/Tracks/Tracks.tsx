import {observer} from "mobx-react-lite";
import {useEffect} from "react";
import track from "@/store/track.ts";
import {ITrack} from "@/types/ITrack.ts";
import {TrackCard} from "@/ui/Cards/TrackCard/TrackCard.tsx";

export const Tracks = observer(() => {
    useEffect(() => {
        track.getAllTracks();
    }, []);

    return (
        <>
            {track.tracks.map((item: ITrack) => (
                <>
                    {item.author && (
                        <TrackCard
                            author={item.author.login}
                            title={item.title} id={item.id}
                            img={item.avatarUrl}
                            where="track"
                            byFind="all"
                        />
                    )}
                </>
            ))}
        </>
    );
});