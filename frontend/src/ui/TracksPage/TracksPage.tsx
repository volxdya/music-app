import {useGetTracks} from "@/hooks/useGetTracks.ts";
import {TrackCard} from "@/ui/Cards/TrackCard/TrackCard.tsx";

export function TracksPage() {


    const {tracks} = useGetTracks();

    return (
        <div>
            <h2 className="fs-3">Треки</h2>
            <div className="mt-4">
                {tracks.map((item) => (
                    <TrackCard title={item.title} author={item.author.login} />
                ))}
            </div>
        </div>
    );
}