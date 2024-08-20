import { useAlbumData } from "@/hooks/useAlbumData";
import { ITrack } from "@/types/ITrack";
import { TrackCard } from "@/ui/Cards/TrackCard/TrackCard";
import { HeaderMusic } from "@/ui/HeaderMusic/HeaderMusic";
import { useParams } from "react-router-dom";

export default function Album() {
    const params = useParams();
    let albumId;

    if (params.albumId) {
        albumId = Number(params.albumId);
    }

    const [albumData] = useAlbumData(albumId);

    return (
        <>
            {albumData && (
                <>
                    <HeaderMusic
                        whatIs="Альбом"
                        author={albumData.author.login}
                        title={albumData.title}
                        isCircle={false}
                        img={albumData.avatarUrl}
                    />

                    <div className="mt-5">
                        {albumData.author && albumData.tracks && (
                            <>
                                {albumData.tracks.map((item: ITrack, index: number) => (
                                    <TrackCard
                                        title={item.title}
                                        author={albumData.author.login}
                                        where="album"
                                        id={item.id}
                                        index={index + 1}
                                        byFind={item.albumId}
                                        isAlbum={true}
                                    />
                                ))}
                            </>
                        )}

                    </div>
                </>
            )}

        </>
    );
}