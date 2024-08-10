import {Link} from "react-router-dom";
import user from "@/store/user.ts";
import {NavigationText} from "@/ui/Text/NavigationText/NavgiationText.tsx";
import {ITrack} from "@/types/ITrack.ts";
import {TrackCard} from "@/ui/Cards/TrackCard/TrackCard.tsx";
import {observer} from "mobx-react-lite";

export const TracksAuthor = observer(() => (
    <>
        <Link to={`/tracks/get_by_authorId/${user.userData.id}/true`}>
            <NavigationText text="Ваши популярные треки"/>
        </Link>
        <div className="col-8 mt-4">
            {user.me.tracks && (
                <>
                    {user.me?.tracks
                        .slice(0, 5)
                        .map((item: ITrack) => (
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
    </>
));