import { ISearch } from "@/types/ISearch.ts";
import { TrackCard } from "@/ui/Cards/TrackCard/TrackCard.tsx";
import uniqid from "uniqid";

interface Props {
  search: ISearch[];
}

export function TracksSearch({ search }: Props) {
  return (
    <>
      <h1 className="mt-5 text-[20px] font-medium">Треки</h1>

      <div className="mt-5">
        <>
          {search.map((item: ISearch) => (
            <>
              {item.login && (
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
                      key={uniqid()}
                    />
                  )}
                </>
              )}
            </>
          ))}
        </>
      </div>
    </>
  );
}
