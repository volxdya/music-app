import { CarouselScroll } from "@/ui/CarouselScroll/CarouselScroll.tsx";
import { ISearch } from "@/types/ISearch.ts";
import { CarouselItem } from "@/components/ui/carousel.tsx";
import { AlbumCard } from "@/ui/Cards/AlbumCard/AlbumCard.tsx";
import { getStringDate } from "@/utils/getStringDate.ts";

interface Props {
  search: ISearch[];
}

export function AlbumsSearch({ search }: Props) {
  return (
    <>
      <h1 className="mt-5 text-[20px] font-medium">Альбомы</h1>
      <div className="mt-5">
        <CarouselScroll
          content={
            <>
              {search.map((item: ISearch) => (
                <>
                  {item.login && (
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
                  )}
                </>
              ))}
            </>
          }
        />
      </div>
    </>
  );
}
