import { CarouselScroll } from "@/ui/CarouselScroll/CarouselScroll.tsx";
import { ISearch } from "@/types/ISearch.ts";
import { CarouselItem } from "@/components/ui/carousel.tsx";
import { CircleCard } from "@/ui/Cards/CircleCard/CircleCard.tsx";

interface Props {
  search: ISearch[];
}

export function AuthorsSearch({ search }: Props) {
  return (
    <>
      <h1 className="mt-5 text-[20px] font-medium">Исполнители</h1>
      <div className="mt-5">
        <CarouselScroll
          content={
            <>
              {search.map((item: ISearch) => (
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
                </>
              ))}
            </>
          }
        />
      </div>
    </>
  );
}
