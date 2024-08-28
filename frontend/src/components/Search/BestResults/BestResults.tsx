import { ISearch } from "@/types/ISearch.ts";
import { CarouselItem } from "@/components/ui/carousel.tsx";
import { CircleCard } from "@/ui/Cards/CircleCard/CircleCard.tsx";
import { AlbumCard } from "@/ui/Cards/AlbumCard/AlbumCard.tsx";
import { getStringDate } from "@/utils/getStringDate.ts";
import { CarouselScroll } from "@/components/CarouselScroll/CarouselScroll.tsx";

interface Props {
  search: ISearch[];
}

export function BestResults({ search }: Props) {
  return (
    <CarouselScroll
      content={
        <>
          {search.map((item: ISearch) => (
            <>
              {item.login && (
                <>
                  {item.type === "user" && !item.isUser && (
                    <CarouselItem className="basis-1/7">
                      <CircleCard
                        title={item.login}
                        otherText="Исполнитель"
                        link={`/author/${item.id}`}
                      />
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
              )}
            </>
          ))}
        </>
      }
    />
  );
}
