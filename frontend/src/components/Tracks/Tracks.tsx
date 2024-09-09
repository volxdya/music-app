import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import track from "@/store/track.ts";
import { ITrack } from "@/types/ITrack.ts";
import { TrackCard } from "@/ui/Cards/TrackCard/TrackCard.tsx";

const Tracks = observer(() => {
    useEffect(() => {
        track.getAllTracks();
    }, []);

    return (
        <>
            {track.tracks.map((item: ITrack) => (
                <>
                    {item.author && (
                        <TrackCard
                            author="qwe"
                            title={item.title}
                            id={item.id}
                            img={item.trackData.fileUrlAvatar}
                            where="track"
                            byFind="all"
                            isAlbum={false}
                        />
                    )}
                </>
            ))}
        </>
    );
});

export default Tracks;