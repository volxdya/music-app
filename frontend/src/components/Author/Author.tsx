import { useUserData } from "@/hooks/useUserData";
import user from "@/store/user";
import { IAlbum } from "@/types/IAlbum";
import { ITrack } from "@/types/ITrack";
import { AlbumCard } from "@/ui/Cards/AlbumCard/AlbumCard";
import { CircleCard } from "@/ui/Cards/CircleCard/CircleCard";
import { TrackCard } from "@/ui/Cards/TrackCard/TrackCard";
import { HeaderMusic } from "@/ui/HeaderMusic/HeaderMusic";
import { NavigationText } from "@/ui/Text/NavigationText/NavgiationText";
import { getStringDate } from "@/utils/getStringDate";
import { Link, useParams } from "react-router-dom";
import { CarouselScroll } from "@/ui/CarouselScroll/CarouselScroll";
import { CarouselItem } from "../ui/carousel";
import { IUser } from "@/types/IUser";
import { useSimilarAuthors } from "@/hooks/useSimilarAuthors";
import { getAuditions } from "@/utils/getAuditions.ts";
import uniqid from "uniqid";

export default function Author() {
  const params = useParams();
  const [userData] = useUserData(Number(params.authorId));
  const [authors] = useSimilarAuthors(Number(params.authorId));
  const auditions = getAuditions(userData);

  return (
    <>
      <>
        {userData && (
          <HeaderMusic
            whatIs="Исполнитель"
            author={`${auditions} прослушиваний`}
            title={userData?.login}
            isCircle={true}
          />
        )}
      </>

      <div className="mt-5">
        <Link to={`/tracks/get_by_authorId/${userData && userData.id}/false`}>
          <NavigationText text="Популярные треки" />
        </Link>
      </div>
      <div className="mt-4 row g-0 flex">
        <div className="col-8">
          {userData?.tracks &&  (
            <>
              {userData?.tracks
                .slice(0, 5)
                .map((item: ITrack, index: number) => (
                  <TrackCard
                    key={uniqid()}
                    title={item.title}
                    author={userData.login}
                    id={item.id}
                    index={index}
                    img={item.trackData.fileUrlAvatar}
                    byFind={userData.id}
                    where="author"
                    isAlbum={false}
                  />
                ))}
            </>
          )}
        </div>
        <div className="col-4 px-5">
          <h1 className="realese">Недавний релиз</h1>
          {userData && userData?.albums[0] ? (
            <div className="mt-3">
              <AlbumCard
                id={userData.albums[0].id}
                author={userData.login}
                title={userData.albums[0].title}
                year={getStringDate(userData.albums[0].createdAt, "YYYY")}
              />
            </div>
          ) : (
            <div>Пока что тут ничего нет =D</div>
          )}
        </div>

        <div className="mt-5">
          <NavigationText text="Популярные альбомы" />
          <div className="mt-4">
            {userData?.albums && (
              <CarouselScroll
                content={
                  <>
                    {userData?.albums.map((item: IAlbum) => (
                      <CarouselItem className="basis-1/7" key={uniqid()}>
                        <AlbumCard
                          id={item.id}
                          title={item.title}
                          author={user.userData.login}
                          year={getStringDate(item.createdAt, "YYYY")}
                          img={item.avatarUrl}
                        />
                      </CarouselItem>
                    ))}
                  </>
                }
              />
            )}
          </div>

          <div className="mt-5">
            <NavigationText text="Похожие исполнители" />

            <div className="mt-4">
              <CarouselScroll
                content={
                  <>
                    {authors.map((item: IUser) => (
                      <CarouselItem className="basis-1/7" key={uniqid()}>
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
        </div>
      </div>
    </>
  );
}
