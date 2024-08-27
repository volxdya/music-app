import { useEffect, useState } from "react";
import { ITrack } from "@/types/ITrack.ts";
import axios from "axios";

export const useTrackInfo = (trackId: number) => {
  const [track, setTrack] = useState<ITrack>();

  useEffect(() => {
    if (trackId !== 0) {
      axios
        .get(`http://localhost:3010/track/get_by_id/${trackId}`)
        .then((res) => {
          setTrack(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [trackId]);

  return [track];
};
