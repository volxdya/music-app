import { useEffect, useState } from "react";
import { IGenre } from "@/types/IGenre.ts";
import axios from "axios";

export const useGenresData = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3010/genre/get_all`)
      .then((resp) => {
        setGenres(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [genres];
};
