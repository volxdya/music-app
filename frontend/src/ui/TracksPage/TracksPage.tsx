import {useGetTracks} from "@/hooks/useGetTracks.ts";
import {TrackCard} from "@/ui/Cards/TrackCard/TrackCard.tsx";
import {useParams} from "react-router-dom";
import {onChange} from "@/utils/onChange.ts";
import {Modal} from "@/components/Modal/Modal.tsx";
import {useCreateTrack} from "@/hooks/useCreateTrack.ts";
import {useEffect, useState} from "react";
import user from "@/store/user.ts";

export function TracksPage() {
    const [titleTrack, setTitleTrack] = useState("");

    const {tracks} = useGetTracks();

    const params = useParams();

    const {handleSubmitTrack} = useCreateTrack();

    useEffect(() => {
        user.getUserData();
        user.getMe();
    }, []);

    return (
        <div>
            <h2 className="fs-3">Треки</h2>
            <div className="mt-4">
                {tracks.map((item) => (
                    <TrackCard title={item.title} author={item.author.login} />
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
                            <form className="me-3 mx-3" onSubmit={(e) => handleSubmitTrack(e, titleTrack)}>
                                <input type="text" placeholder="Название" className="mt-2" onChange={onChange(setTitleTrack)}/>

                                <label className="input-file mt-3">
                                    <input type="file" name="file"/>
                                    <span>Выберите картинку</span>
                                </label>

                                <label className="input-file mt-3">
                                    <input type="file" name="file"/>
                                    <span>Выберите трек</span>
                                </label>

                                <button className="add-track w-100 mt-5">Добавить</button>
                            </form>

                        }
                    />
                )}
            </div>
        </div>
    );
}