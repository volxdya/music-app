import axios from "axios";
import {useEffect, useState} from "react";
import {ITrack} from "@/types/ITrack.ts";
import {useParams} from "react-router-dom";

export const useGetTracks = () => {

    const [tracks, setTracks] = useState<ITrack[]>([]);
    const params = useParams();

    useEffect(() => {
        if (params) {
            axios.get(`http://localhost:3010/track/${params.search}/${params.bySearch}`)
                .then((resp) => {
                    setTracks(resp.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return { tracks, params };

}