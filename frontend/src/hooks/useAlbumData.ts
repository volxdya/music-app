import { IAlbum } from "@/types/IAlbum";
import { useEffect, useState } from "react";
import { getAlbumData } from "@/api/albums/getAlbumData.ts";

export const useAlbumData = (albumId: number | undefined) => {
  const [albumData, setAlbumData] = useState<IAlbum>();

  // Получение данных альбома по ID
  useEffect(() => {
    if (albumId) {
      const get = async () => {
        await getAlbumData(albumId).then((resp) => {
          setAlbumData(resp.data);
        })
      };

      get();
    }
  }, []);

  return [albumData];
};
