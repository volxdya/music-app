import { FormEvent, useEffect } from "react";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import user from "@/store/user.ts";
import { createAlbum } from "@/api/albums/createAlbum.ts";

export const useCreateAlbum = () => {
  useEffect(() => {
    user.getUserData();
  }, []);

  // Создание альбома
  const handleSubmitAlbum = async (
    e: FormEvent,
    title: string,
    avatarUrl: string,
    genreId: number,
  ) => {
    stopFormBehavior(e);

    if (!user.userData.isUser) {
      createAlbum(title, avatarUrl, genreId);
    }
  };

  return { handleSubmitAlbum };
};
