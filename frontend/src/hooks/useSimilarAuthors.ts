import { IUser } from "@/types/IUser";
import { useEffect, useState } from "react";
import { getSimilar } from "@/api/authors/getSimilar.ts";

export const useSimilarAuthors = (authorId: number) => {
  const [authors, setAuthors] = useState<IUser[]>([]);

  // Получение похожих авторов по одному (ID)
  useEffect(() => {
    const get = async () => {
      getSimilar(authorId).then((resp) => {
        setAuthors(resp.data);
      });
    };

    get();
  }, []);

  return [authors];
};
