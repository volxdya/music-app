import {HeaderMusic} from "@/ui/HeaderMusic/HeaderMusic.tsx";
import {TrackCard} from "@/ui/Cards/TrackCard/TrackCard.tsx";

export function Playlist() {
    return (
        <>
            <HeaderMusic/>

            <div className="mt-5">
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
                <TrackCard title="test" author="Heronwater"/>
            </div>
        </>
    );
}