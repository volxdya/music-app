import user from "@/store/user.ts";
import {AlbumCard} from "@/ui/Cards/AlbumCard/AlbumCard.tsx";
import {getStringDate} from "@/utils/getStringDate.ts";
import {observer} from "mobx-react-lite";

export const LastRelease = observer(() => (
    <div className="col-4 px-5">
        <h1 className="realese">Недавний релиз</h1>
        {user.me?.albums?.length > 0 ? (
            <div className="mt-3">
                <AlbumCard
                    id={user.me.albums[0].id}
                    author={user.userData.login}
                    title={user.me.albums[0].title}
                    year={getStringDate(user.me.albums[0].createdAt, "YYYY")}
                />
            </div>
        ) : (
            <div>Пока что тут ничего нет =D</div>
        )}
    </div>
));