import { useGetTracks } from "@/hooks/useGetTracks.ts";
import { TrackCard } from "@/ui/Cards/TrackCard/TrackCard.tsx";
import { useParams } from "react-router-dom";
import { onChange } from "@/utils/onChange.ts";
import { Modal } from "@/components/Modal/Modal.tsx";
import { useCreateTrack } from "@/hooks/useCreateTrack.ts";
import { useEffect, useState } from "react";
import user from "@/store/user.ts";
import { UploadFiles } from "@/components/UploadFiles/UploadFiles.tsx";
import { IUploadFile } from "@/types/IUploadFile";

export function TracksPage() {
    const [titleTrack, setTitleTrack] = useState("");
    const [avatarUrlTrack, setAvatarUrlTrack] = useState<IUploadFile[]>([]);
    const [trackUrl, setTrackUrl] = useState<IUploadFile[]>([]);

    const { handleSubmitTrack } = useCreateTrack();
    const { tracks } = useGetTracks();

    const params = useParams();

    useEffect(() => {
        user.getUserData();
        user.getMe();
    }, []);

    return (
        <div>
            <h2 className="fs-3">Треки</h2>
            <div className="mt-4">
                {tracks.map((item) => (
                    <TrackCard
                        title={item.title}
                        author={item.author.login}
                        img={item.trackData.fileUrlAvatar}
                        id={item.id}
                        isAlbum={false}
                        where="all"
                        byFind="all"
                    />
                ))}
            </div>
            <div className="mt-4">
                {params.isAuthor === "true" && (
                    <Modal
                        trigger={
                            <div className="d-flex justify-content-center">
                                <button className="add-track mb-20 mt-20 w-25">Добавить трек</button>
                            </div>
                        }
                        content={
                            <form className="me-3 mx-3"
                                onSubmit={(e) => handleSubmitTrack(e, titleTrack, avatarUrlTrack, trackUrl)}>
                                <input type="text" placeholder="Название" className="mt-2"
                                    onChange={onChange(setTitleTrack)} />

                                <UploadFiles setFn={setAvatarUrlTrack} />
                                <UploadFiles setFn={setTrackUrl} />

                                <button className="add-track w-100 mt-5">Добавить</button>
                            </form>
                        }
                    />
                )}
            </div>
        </div>
    );
}