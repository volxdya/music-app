import { useToast } from "@/components/ui/use-toast.ts";
import { FormEvent, useEffect } from "react";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import axios, { AxiosError } from "axios";
import user from "@/store/user.ts";
import { IUploadFile } from "@/types/IUploadFile.ts";
import { getItem } from "@/utils/localStorage.ts";

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
        .post(
          `http://localhost:3010/track/create`,
          {
            title: title,
            userId: user.userData.id,
            isTrack: true,
            trackData: {
              accountId: "avatarUrl[0].accountId",
              filePathAvatar: "avatarUrl[0].filePath",
              fileUrlAvatar:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl0Ftd_hF5Cyemo6wzLip7RMRK4ov97mKLA&s",
              filePathMP3: "trackUrl[0].filePath",
              fileUrlMP3:
                "https://elmanana.ru/stream/mym/aHR0cHM6Ly9tb29zaWMubXkubWFpbC5ydS9maWxlLzE1YzE4OTk5YTY4MTZkNTZjZmRlNzU2MDhlNzBiMzNiLm1wMw==z ",
            },
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
