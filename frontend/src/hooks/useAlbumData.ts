import { IAlbum } from "@/types/IAlbum";
import axios from "axios";
import { useEffect, useState } from "react"

export const useAlbumData = (albumId: number | undefined) => {
    const [albumData, setAlbumData] = useState<IAlbum>();

    // Получение даты альбома по ID
    useEffect(() => {
        if (albumId) {
            axios.get(`http://localhost:3010/album/get_by_id/${albumId}`)
                .then((resp) => {
                    setAlbumData(resp.data);
                }).catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return [albumData];
}