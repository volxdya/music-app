import { useToast } from "@/components/ui/use-toast.ts";
import { FormEvent, useEffect } from "react";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import axios, { AxiosError } from "axios";
import user from "@/store/user.ts";
import { getItem } from "@/utils/localStorage.ts";

export const useCreateAlbum = () => {
  const { toast } = useToast();

  useEffect(() => {
    user.getUserData();
  }, []);

  const handleSubmitAlbum = async (
    e: FormEvent,
    title: string,
    avatarUrl: string,
    genreId: number,
  ) => {
    stopFormBehavior(e);

    if (!user.userData.isUser) {
      await axios
        .post(
          `http://localhost:3010/album/create`,
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
          console.log(resp);

          toast({
            title: "Вы успешно создали альбом",
            description: `${resp.statusText} ${resp.status} HTTP REQUEST`,
          });

          user.getMe();

          (e.target as HTMLFormElement).reset();
        })
        .catch((err: AxiosError) => {
          console.log(err);

          if (err.response) {
            toast({
              title: `${err.message}`,
              description: `${err.message} ${err.status} HTTP REQUEST`,
            });
          }

          (e.target as HTMLFormElement).reset();
        });
    }
  };

  return { handleSubmitAlbum };
};
