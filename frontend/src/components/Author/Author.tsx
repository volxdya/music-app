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
import { CarouselScroll } from "../CarouselScroll/CarouselScroll";
import { CarouselItem } from "../ui/carousel";
import { useAllAuthors } from "@/hooks/useAllAuthors";
import { IUser } from "@/types/IUser";

export function Author() {

    const params = useParams();
    const [userData] = useUserData(Number(params.authorId));
    const [authors] = useAllAuthors();

    return (
        <>
            <>
                {userData && (
                    <HeaderMusic
                        whatIs="Исполнитель"
                        author="qwe"
                        title={userData?.login}
                        isCircle={true}
                    />
                )}
            </>

            <div className="mt-5">
                <Link to={`/tracks/get_by_authorId/${userData && userData.id}/true`}>
                    <NavigationText text="Популярные треки" />
                </Link>
            </div >
            <div className="mt-4 row g-0 d-flex">
                <div className="col-8">
                    {userData?.tracks && (
                        <>
                            {userData?.tracks.slice(0, 5).map((item: ITrack) => (
                                <TrackCard
                                    title={item.title}
                                    author={user.userData.login}
                                    id={item.id}
                                    img={item.trackData.fileUrlAvatar}
                                    byFind={user.userData.login}
                                    where={user.userData.login}
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
                    <NavigationText text="Ваши популярные альбомы" />
                    <div className="mt-4">
                        {userData?.albums && (
                            <CarouselScroll content={
                                <>
                                    {userData?.albums.map((item: IAlbum) => (
                                        <CarouselItem className="basis-1/7">
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
                            } />
                        )}
                    </div>

                    <div className="mt-5">
                        <NavigationText text="Похожие исполнители" />

                        <div className="mt-4">
                            <CarouselScroll content={
                                <>
                                    {authors.map((item: IUser) => (
                                        <CarouselItem className="basis-1/7">
                                            <CircleCard title={item.login} otherText="Исполнитель" link={`/author/${item.id}`} />
                                        </CarouselItem>
                                    ))}
                                </>
                            } />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}