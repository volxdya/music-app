import {CreatePlaylistCard} from "@/ui/Cards/PlaylistCard/CreatePlaylistCard.tsx";
import {getItem} from "@/utils/localStorage.ts";
import user from "@/store/user.ts";
import {IPlaylist} from "@/types/IPlaylist.ts";
import {PlaylistCard} from "@/ui/Cards/PlaylistCard/PlaylistCard.tsx";
import uniqid from "uniqid";
import {useCreatePlaylist} from "@/hooks/useCreatePlaylist.ts";
import {observer} from "mobx-react-lite";

export const PlaylistsCollection = observer(() => {
    const { createPlaylist } = useCreatePlaylist(user.userData.id);

    return (
        <div className="flex flex-wrap gap-3">
            <div onClick={createPlaylist}>
                <CreatePlaylistCard/>
            </div>
            {getItem("token") && (
                <>
                    {user.me.playlists.map((item: IPlaylist) => (
                        <PlaylistCard
                            title={item.title}
                            imageUrl={item.avatarUrl}
                            key={uniqid()}
                        />
                    ))}
                </>
            )}
        </div>
    );
});