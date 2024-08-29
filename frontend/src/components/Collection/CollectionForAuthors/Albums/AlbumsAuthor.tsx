import {NavigationText} from "@/ui/Text/NavigationText/NavgiationText.tsx";
import user from "@/store/user.ts";
import {CarouselScroll} from "@/ui/CarouselScroll/CarouselScroll.tsx";
import {IAlbum} from "@/types/IAlbum.ts";
import {CarouselItem} from "@/components/ui/carousel.tsx";
import {AlbumCard} from "@/ui/Cards/AlbumCard/AlbumCard.tsx";
import {getStringDate} from "@/utils/getStringDate.ts";
import {observer} from "mobx-react-lite";

export const AlbumsAuthor = observer(() => (
    <>
        <NavigationText text="Ваши популярные альбомы"/>
        <div className="mt-4">
            {user.me.albums && (
                <CarouselScroll
                    content={
                        <>
                            {user.me.albums.map((item: IAlbum) => (
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
                    }
                />
            )}
        </div>
    </>
));