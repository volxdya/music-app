import { onChange } from "@/utils/onChange.ts";
import { UploadFiles } from "@/components/UploadFiles/UploadFiles.tsx";
import { Modal } from "@/components/Modal/Modal.tsx";
import { useState } from "react";
import { IUploadFile } from "@/types/IUploadFile.ts";
import { useCreateAlbum } from "@/hooks/useCreateAlbum.ts";
import { useGenresData } from "@/hooks/useGenresData.ts";
import { IGenre } from "@/types/IGenre.ts";

export function AddAlbum() {
  const [titleAlbum, setTitleAlbum] = useState("");
  const [avatarUrlAlbum, setAvatarUrlAlbum] = useState<IUploadFile[]>([]);
  const [genre, setGenre] = useState("");

  const { handleSubmitAlbum } = useCreateAlbum();
  const [genres] = useGenresData();

  return (
    <Modal
      trigger={
        <button className="add-track mt-20 mb-20 w-25">Добавить альбом</button>
      }
      content={
        <form
          className="me-3 mx-3"
          onSubmit={(e) => {
            setAvatarUrlAlbum([]);
            handleSubmitAlbum(
              e,
              titleAlbum,
              avatarUrlAlbum[0].fileUrl,
              Number(genre),
            );
          }}
        >
          <input
            type="text"
            placeholder="Название"
            className="mt-2"
            onChange={onChange(setTitleAlbum)}
            title={titleAlbum}
          />

          <h1 className="fs-5 text-center mt-3">Обложка</h1>
          <p className="text-center text-[12px] text-neutral-300">
            GIF, JPG, PNG
          </p>

          <UploadFiles setFn={setAvatarUrlAlbum} />

          <select
            className="form-select"
            aria-label="Default select example"
            onChange={onChange(setGenre)}
          >
            {genres.map((item: IGenre) => (
              <option value={item.id}>{item.title}</option>
            ))}
          </select>

          <button className="add-track w-100 mt-5">Добавить</button>
        </form>
      }
    />
  );
}
