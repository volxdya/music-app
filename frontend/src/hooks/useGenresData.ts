import { useEffect, useState } from "react";
import { IGenre } from "@/types/IGenre.ts";
import { getGenres } from "@/api/genres/getGenres.ts";

export const useGenresData = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  // Получение всех жанров
  useEffect(() => {
    const get = async () => {
      await getGenres().then((resp) => {
        setGenres(resp.data);
      });
    };

    get();
  }, []);

  return [genres];
};
