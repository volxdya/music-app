import {TrackCard} from "../../ui/Cards/TrackCard/TrackCard.tsx";

export function Search() {
    return (
        <>
            <form>
                <input type="text" placeholder="Трек, альбом, исполнитель"/>
            </form>

            <div className="mt-4 d-flex flex-wrap gap-1">
                <TrackCard/>
            </div>
        </>
    );
}