import {IGenre} from "@/types/IGenre.ts";
import {GenreCard} from "@/ui/Cards/GenreCard/GenreCard.tsx";
import {useGenresData} from "@/hooks/useGenresData.ts";

export function GenresMainScreen() {
    const [genres] = useGenresData();

    return (
        <div className="mt-5">
            <h3 className="fs-4">Исследуйте жанр</h3>
            <p className="music-color">
                Откройте для себя новое
            </p>

            <div className="mt-4 flex gap-4 flex-wrap">
                {genres.map((item: IGenre) => (
                    <GenreCard title={item.title}/>
                ))}
            </div>
        </div>
    )
}