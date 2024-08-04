import { ChangeEvent, FormEvent, useState } from "react";
import { CollectionCard } from "../../ui/Cards/CollectionCard/CollectionCard.tsx";
import { useSearch } from "@/hooks/useSearch.ts";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import { ISearch } from "@/types/ISearch.ts";
import { CircleCard } from "@/ui/Cards/CircleCard/CircleCard.tsx";
import { TrackCard } from "@/ui/Cards/TrackCard/TrackCard.tsx";
import { AlbumCard } from "@/ui/Cards/AlbumCard/AlbumCard.tsx";
import { getStringDate } from "@/utils/getStringDate.ts";
import { NoSearch } from "@/icons/NoSearch.tsx";

export function Search() {
    const [value, setValue] = useState("");
    const [search, array] = useSearch();
    const [isSearched, setIsSearched] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        stopFormBehavior(e);
        console.log(array);
        setIsSearched(true);
        search(value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Трек, альбом, исполнитель"
                    onChange={handleChange}
                    value={value}
                />

                {array && (
                    <div className="d-flex gap-2 mt-4 flex-wrap">
                        {array.map((item: ISearch) => (
                            <>

                                {item.source === "author" && item.executor && (
                                    <CircleCard title={item.executor.login} otherText="Исполнитель" />
                                )}

                                {item.source === "album" && item.album && (
                                    <AlbumCard
                                        title={item.album.title}
                                        author={item.album.author.login}
                                        year={getStringDate(item.createdAt, "YYYY")}
                                        img={item.album.avatarUrl}
                                        id={item.album.id}
                                    />
                                )}

                                {item.source === "track" && item.track && (
                                    <TrackCard
                                        title={item.track.title}
                                        author={"СУКО НЕ РАБОТАЕТ НАХУЙ SEARCH.TSX"}
                                        id={item.track.id}
                                        img={item.track.trackData.fileUrlAvatar}
                                        where="search"
                                        byFind={item.title}
                                        isAlbum={false}
                                    />
                                )}
                            </>
                        ))}
                    </div>
                )}

                {isSearched && array.length === 0 && (
                    <div className="d-flex justify-content-center mt-5">
                        <div>
                            <div className="d-flex justify-content-center">
                                <NoSearch />
                            </div>
                            <h2 className="fs-3 mt-4 text-center font-medium    ">Ничего не нашли</h2>
                            <p className="mt-3 text-[16px] text-center text-neutral-500 font-medium">Попробуйте написать по-другому</p>
                        </div>
                    </div>
                )}
            </form>

            <div className="mt-5">
                <h4>Подборки</h4>
                <div className="d-flex gap-4 flex-wrap  mt-4">
                    <CollectionCard />
                </div>
            </div>
        </>
    );
}