import { ITrack } from "@/types/ITrack";
import { useEffect, useState } from "react"

export const useGetIsLike = (playlistTracks: ITrack[] | undefined, trackId: number) => {
    const [isLike, setIsLike] = useState(false);

    useEffect(() => {
        if (playlistTracks) {
            for (let i = 0; i < playlistTracks.length; i++) {
                if (playlistTracks[i].id === trackId) {
                    setIsLike(true);
                } else {
                    setIsLike(false);
                }
            }
        }
    }, []);

    return [isLike];
}