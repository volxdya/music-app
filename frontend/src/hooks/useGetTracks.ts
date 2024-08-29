import { useEffect, useState } from "react";
import { ITrack } from "@/types/ITrack.ts";
import { useParams } from "react-router-dom";
import { getTracks } from "@/api/tracks/getTracks.ts";

export const useGetTracks = () => {
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const params = useParams();

  // Получение треков по определенным параметрам
  useEffect(() => {
    if (params) {
      const get = async () => {
        await getTracks(params.search, params.bySearch).then((resp) => {
          setTracks(resp.data);
        });
      };

      get();
    }
  }, []);

  return { tracks, params };
};
