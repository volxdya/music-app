import { useEffect, useState } from "react";
import { ITrack } from "@/types/ITrack.ts";
import { getTrackData } from "@/api/tracks/getTrackData.ts";

export const useTrackInfo = (trackId: number) => {
  const [track, setTrack] = useState<ITrack>();

  // Получение информации о треке по ID
  useEffect(() => {
    if (trackId !== 0) {
      const get = async () => {
        await getTrackData(trackId).then((resp) => {
          setTrack(resp.data);
        });
      };
      get();
    }
  }, [trackId]);

  return [track];
};
