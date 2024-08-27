import {ChangeEvent, FormEvent, useState} from "react";
import {CollectionCard} from "../../ui/Cards/CollectionCard/CollectionCard.tsx";
import {useSearch} from "@/hooks/useSearch.ts";
import {stopFormBehavior} from "@/utils/stopFormBehavior.ts";
import {NoResults} from "@/ui/NoResults/NoResults.tsx";
import {BestResults} from "@/components/Search/BestResults/BestResults.tsx";
import {AuthorsSearch} from "@/components/Search/Authors/AuthorsSearch.tsx";
import {AlbumsSearch} from "@/components/Search/Albums/AlbumsSearch.tsx";
import {TracksSearch} from "@/components/Search/Tracks/TracksSearch.tsx";

export default function Search() {
    const [value, setValue] = useState("");
    const [search, searchFn] = useSearch();
    const [isSearched, setIsSearched] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        stopFormBehavior(e);
        setValue("");
        setIsSearched(true);

        searchFn(value);
    };

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
                            <BestResults search={search}/>
                            <AuthorsSearch search={search}/>
                            <AlbumsSearch search={search}/>
                            <TracksSearch search={search}/>
                        </div>
                    </div>
                    )}

                {isSearched && search.length === 0 && <NoResults/>}
            </form>

            <div className="mt-5">
                <h4>Подборки</h4>
                <div className="flex gap-4 flex-wrap  mt-4">
                    <CollectionCard/>
                </div>
            </div>
        </>
    );
}
