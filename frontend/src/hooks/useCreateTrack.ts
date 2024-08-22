import { useToast } from "@/components/ui/use-toast.ts";
import { FormEvent, useEffect } from "react";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import axios, { AxiosError } from "axios";
import user from "@/store/user.ts";
import { IUploadFile } from "@/types/IUploadFile.ts";
import {getItem} from "@/utils/localStorage.ts";

export const useCreateTrack = () => {
  const { toast } = useToast();

  useEffect(() => {
    user.getUserData();

  }, []);

  const handleSubmitTrack = async (
    e: FormEvent,
    title: string,
    avatarUrl: IUploadFile[],
    trackUrl: IUploadFile[],
    genreId: number,
  ) => {
    stopFormBehavior(e);

    if (!user.userData.isUser) {
      await axios
        .post(`http://localhost:3010/track/create`, {
          title: title,
          authorId: user.userData.id,
          isTrack: true,
          trackData: {
            accountId: avatarUrl[0].accountId,
            filePathAvatar: avatarUrl[0].filePath,
            fileUrlAvatar: avatarUrl[0].fileUrl,
            filePathMP3: trackUrl[0].filePath,
            fileUrlMP3: trackUrl[0].fileUrl,
          },
          genreId: genreId,
        }, {
          headers: {
            Authorization: `Bearer ${getItem("token")}`
          }
        })
        .then((resp) => {

          toast({
            title: "Вы успешно создали трек",
            description: `${resp.statusText} ${resp.status} HTTP REQUEST`,
          });

          (e.target as HTMLFormElement).reset();

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

          (e.target as HTMLFormElement).reset();
        });
    }
  };

  return { handleSubmitTrack };
};
