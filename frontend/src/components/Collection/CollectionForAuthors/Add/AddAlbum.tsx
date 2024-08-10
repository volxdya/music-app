import {onChange} from "@/utils/onChange.ts";
import {UploadFiles} from "@/components/UploadFiles/UploadFiles.tsx";
import {Modal} from "@/components/Modal/Modal.tsx";
import {useState} from "react";
import {IUploadFile} from "@/types/IUploadFile.ts";
import {useCreateAlbum} from "@/hooks/useCreateAlbum.ts";

export function AddAlbum() {
    const [titleAlbum, setTitleAlbum] = useState("");
    const [avatarUrlAlbum, setAvatarUrlAlbum] = useState<IUploadFile[]>([]);

    const { handleSubmitAlbum } = useCreateAlbum();

    return (
        <Modal
            trigger={
                <button className="add-track mt-20 mb-20 w-25">
                    Добавить альбом
                </button>
            }
            content={
                <form
                    className="me-3 mx-3"
                    onSubmit={(e) => {
                        setAvatarUrlAlbum([]);
                        handleSubmitAlbum(e, titleAlbum, avatarUrlAlbum[0].fileUrl);
                    }}
                >
                    <input
                        type="text"
                        placeholder="Название"
                        className="mt-2"
                        onChange={onChange(setTitleAlbum)}
                        title={titleAlbum}
                    />

                    <UploadFiles setFn={setAvatarUrlAlbum} />

                    <label className="input-file mt-3">
                        <input type="file" name="file" />
                        <span>Выберите треки</span>
                    </label>

                    <button className="add-track w-100 mt-5">Добавить</button>
                </form>
            }
        />
    );
}