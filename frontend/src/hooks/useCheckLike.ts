import { usePlaylistInfo } from "@/hooks/usePlaylistInfo.ts";
import { ITrack } from "@/types/ITrack.ts";
import { useEffect, useState } from "react";
import { validateFn } from "@/utils/validate.ts";

export const useCheckLike = (trackId: number) => {
  const { playlist } = usePlaylistInfo();
  const playlistTracks = playlist?.tracks;
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    const arrayIds = playlistTracks?.map((item: ITrack) => item.id);

    if (arrayIds) {
      validateFn<number>(arrayIds, trackId);
    }
  }, []);

  return [isLike];
};
