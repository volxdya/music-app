import axios, { AxiosError } from "axios";
import user from "@/store/user.ts";
import { getItem } from "@/utils/localStorage.ts";
import { API_PATH } from "@/api";
import {toast} from "@/components/ui/use-toast.ts";

export const createAlbum = async (
  title: string,
  avatarUrl: string,
  genreId: number,
) => {
  await axios
    .post(
      `${API_PATH}}/album/create`,
      {
        title: title,
        avatarUrl: avatarUrl,
        authorId: user.userData.id,
        genreId: genreId,
      },
      {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      },
    )
    .then((resp) => {
      toast({
        title: "Вы успешно создали альбом",
        description: `${resp.statusText} ${resp.status} HTTP REQUEST`,
      });

      user.getMe();
    })
    .catch((err: AxiosError) => {
      console.log(err);

      if (err.response) {
        toast({
          title: `${err.message}`,
          description: `${err.message} ${err.status} HTTP REQUEST`,
        });
      }
    });
};
