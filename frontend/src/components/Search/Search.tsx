import { CollectionCard } from "../../ui/Cards/CollectionCard/CollectionCard.tsx";
import { TrackCard } from "../../ui/Cards/TrackCard/TrackCard.tsx";

export function Search() {
    return (
        <>
            <form>
                <input type="text" placeholder="Трек, альбом, исполнитель" />
            </form>

            <div className="mt-4 d-flex flex-wrap gap-1">
                <TrackCard title={"qwe"} author="123" id={1}/>
            </div>

            <div className="mt-5">
                <h4>Подборки</h4>
                <div className="d-flex gap-4 flex-wrap  mt-4">
                    <CollectionCard />
                </div>
            </div>
        </>
    );
}