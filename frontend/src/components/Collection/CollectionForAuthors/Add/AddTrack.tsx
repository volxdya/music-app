import {onChange} from "@/utils/onChange.ts";
import {UploadFiles} from "@/components/UploadFiles/UploadFiles.tsx";
import {IGenre} from "@/types/IGenre.ts";
import {Modal} from "@/components/Modal/Modal.tsx";
import {useCreateTrack} from "@/hooks/useCreateTrack.ts";
import {useState} from "react";
import {IUploadFile} from "@/types/IUploadFile.ts";
import {useGenresData} from "@/hooks/useGenresData.ts";

export function AddTrack() {
    const [trackUrl, setTrackUrl] = useState<IUploadFile[]>([]);
    const [avatarUrlTrack, setAvatarUrlTrack] = useState<IUploadFile[]>([]);
    const [genre, setGenre] = useState("");
    const [titleTrack, setTitleTrack] = useState("");

    const { handleSubmitTrack } = useCreateTrack();
    const [genres] = useGenresData();

    return (
        <Modal
            trigger={
                <button className="add-track mb-20 mt-20 w-25">Добавить трек</button>
            }
            content={
                <form
                    className="mx-3 me-3"
                    onSubmit={(e) => {
                        handleSubmitTrack(
                            e,
                            titleTrack,
                            Number(genre),
                        );
                        setAvatarUrlTrack([]);
                    }}
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Название"
                            className="mt-2"
                            onChange={onChange(setTitleTrack)}
                        />

                        <h1 className="fs-5 text-center mt-3">Обложка</h1>
                        <p className="text-center text-[12px] text-neutral-300">GIF, JPG, PNG</p>
                        <UploadFiles setFn={setAvatarUrlTrack}/>

                        <h1 className="fs-5 text-center">Запись</h1>
                        <p className="text-center text-[12px] text-neutral-300">MP3, DEM</p>
                        <UploadFiles setFn={setTrackUrl}/>

                        <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={onChange(setGenre)}
                        >
                            {genres.map((item: IGenre) => (
                                <option value={item.id}>{item.title}</option>
                            ))}
                        </select>

                        <button className="add-track w-100 mt-1">Добавить</button>
                    </div>
                </form>
            }
        />
    )
}