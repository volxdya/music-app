import { ChangeEvent, FormEvent, useState } from "react";
import { CollectionCard } from "../../ui/Cards/CollectionCard/CollectionCard.tsx";
import { useSearch } from "@/hooks/useSearch.ts";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import { ISearch } from "@/types/ISearch.ts";
import { CircleCard } from "@/ui/Cards/CircleCard/CircleCard.tsx";
import { AlbumCard } from "@/ui/Cards/AlbumCard/AlbumCard.tsx";
import { getStringDate } from "@/utils/getStringDate.ts";
import { NoSearch } from "@/icons/NoSearch.tsx";
import { CarouselScroll } from "../CarouselScroll/CarouselScroll.tsx";
import { CarouselItem } from "../ui/carousel.tsx";
import { TrackCard } from "@/ui/Cards/TrackCard/TrackCard.tsx";

export function Search() {
    const [value, setValue] = useState("");
    const [search, searchFn] = useSearch();
    const [isSearched, setIsSearched] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        stopFormBehavior(e);
        setValue("");
        setIsSearched(true);
        searchFn(value);
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

                {search && search.length > 0 && (
                    <div className="mt-3">
                        <h1 className="text-[20px] font-medium mt-5">Лучшие результаты</h1>
                        <div className="mt-5">
                            <CarouselScroll content={
                                <>
                                    {search.map((item: ISearch) => (
                                        <>

                                            {item.type === "user" && !item.isUser && (
                                                <CarouselItem className="basis-1/7">
                                                    <CircleCard title={item.login} otherText="Исполнитель" />
                                                </CarouselItem>

                                            )}

                                            {item.type === "album" && (
                                                <CarouselItem className="basis-1/7">
                                                    <AlbumCard
                                                        title={item.title}
                                                        author={item.author.login}
                                                        year={getStringDate(item.createdAt, "YYYY")}
                                                        img={item.avatarUrl}
                                                        id={item.id}
                                                    />
                                                </CarouselItem>
                                            )}
                                        </>
                                    ))}
                                </>
                            } />

                            <h1 className="mt-5 text-[20px] font-medium">Исполнители</h1>
                            <div className="mt-5">
                                <CarouselScroll content={
                                    <>
                                        {search.map((item: ISearch) => (
                                            <>

                                                {item.type === "user" && !item.isUser && (
                                                    <CarouselItem className="basis-1/7">
                                                        <CircleCard title={item.login} otherText="Исполнитель" />
                                                    </CarouselItem>

                                                )}
                                            </>
                                        ))}
                                    </>
                                } />
                            </div>


                            <h1 className="mt-5 text-[20px] font-medium">Альбомы</h1>

                            <div className="mt-5">
                                <CarouselScroll content={
                                    <>
                                        {search.map((item: ISearch) => (
                                            <>

                                                {item.type === "album" && (
                                                    <CarouselItem className="basis-1/7">
                                                        <AlbumCard
                                                            title={item.title}
                                                            author={item.author.login}
                                                            year={getStringDate(item.createdAt, "YYYY")}
                                                            img={item.avatarUrl}
                                                            id={item.id}
                                                        />
                                                    </CarouselItem>
                                                )}
                                            </>
                                        ))}
                                    </>
                                } />
                            </div>


                            <h1 className="mt-5 text-[20px] font-medium">Треки</h1>

                            <div className="mt-5">
                                <>
                                    {search.map((item: ISearch) => (
                                        <>

                                            {item.type === "track" && (
                                                <TrackCard
                                                    title={item.title}
                                                    author={item.author.login}
                                                    img={item.avatarUrl}
                                                    id={item.id}
                                                    where="search"
                                                    byFind={item.title}
                                                    isAlbum={false}
                                                />
                                            )}
                                        </>
                                    ))}
                                </>
                            </div>

                        </div>
                    </div>
                )}

                {isSearched && search.length === 0 && (
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