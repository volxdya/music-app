import { ChangeEvent, FormEvent, useState } from "react";
import { CollectionCard } from "../../ui/Cards/CollectionCard/CollectionCard.tsx";
import { useSearch } from "@/hooks/useSearch.ts";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import { ISearch } from "@/types/ISearch.ts";
import { CircleCard } from "@/ui/Cards/CircleCard/CircleCard.tsx";
import { TrackCard } from "@/ui/Cards/TrackCard/TrackCard.tsx";
import { AlbumCard } from "@/ui/Cards/AlbumCard/AlbumCard.tsx";
import { getStringDate } from "@/utils/getStringDate.ts";

export function Search() {
    const [value, setValue] = useState("");
    const [search, array] = useSearch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        stopFormBehavior(e);
        console.log(array);
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
                    <div className="d-flex gap-3 mt-4">
                        {array.map((item: ISearch) => (
                            <>
                                {item.source === "author" && (
                                    <CircleCard title={item.login} otherText="Автор" />
                                )}

                                {item.source === "track" && (
                                    <TrackCard
                                        title={item.title}
                                        author="123"
                                        id={item.id}
                                        img={item.trackData.fileUrlAvatar}
                                        where="search"
                                        byFind={item.title}
                                        isAlbum={false}
                                    />
                                )}

                                {item.source === "album" && (
                                    <AlbumCard
                                        title={item.title}
                                        author="qwe"
                                        year={getStringDate(item.createdAt, "YYYY")}
                                        img={item.avatarUrl}
                                        id={item.id}
                                    />
                                )}
                            </>
                        ))}
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