import {useAllAuthors} from "@/hooks/useAllAuthors.ts";
import {NavigationText} from "@/ui/Text/NavigationText/NavgiationText.tsx";
import {CarouselScroll} from "@/components/CarouselScroll/CarouselScroll.tsx";
import {IUser} from "@/types/IUser.ts";
import {CarouselItem} from "@/components/ui/carousel.tsx";
import {CircleCard} from "@/ui/Cards/CircleCard/CircleCard.tsx";

export function SimilarAuthors() {
    const [authors] = useAllAuthors();

    return (
        <div className="mt-5">
            <NavigationText text="Похожие исполнители" />

            <div className="mt-4">
                <CarouselScroll
                    content={
                        <>
                            {authors.map((item: IUser) => (
                                <CarouselItem className="basis-1/7">
                                    <CircleCard
                                        title={item.login}
                                        otherText="Исполнитель"
                                        link={`/author/${item.id}`}
                                    />
                                </CarouselItem>
                            ))}
                        </>
                    }
                />
            </div>
        </div>
    );
}