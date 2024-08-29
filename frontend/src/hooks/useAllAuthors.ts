import { IUser } from "@/types/IUser";
import { useEffect, useState } from "react";
import { getAuthors } from "@/api/authors/getAuthors.ts";

export const useAllAuthors = () => {
  const [authors, setAuthors] = useState<IUser[]>([]);

  // Получение всех авторов
  useEffect(() => {
    getAuthors().then((resp) => {
      setAuthors(resp.data);
    });
  }, []);

  return [authors];
};
