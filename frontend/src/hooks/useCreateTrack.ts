import { FormEvent, useEffect } from "react";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import user from "@/store/user.ts";
import { IUploadFile } from "@/types/IUploadFile.ts";
import { createTrack } from "@/api/tracks/createTrack.ts";

export const useCreateTrack = () => {
  useEffect(() => {
    user.getUserData();
  }, []);

  // Создание трека
  const handleSubmitTrack = async (
    e: FormEvent,
    title: string,
    avatarUrl: IUploadFile[],
    trackUrl: IUploadFile[],
    genreId: number,
  ) => {
    stopFormBehavior(e);

    if (!user.userData.isUser) {
      await createTrack(title, genreId);
    }
  };

  return { handleSubmitTrack };
};
