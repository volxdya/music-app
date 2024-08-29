import { IUser } from "@/types/IUser";
import axios from "axios";
import { useEffect, useState } from "react"

export const useSimilarAuthors = (authorId: number) => {
    const [authors, setAuthors] = useState<IUser[]>([]);

    // Получение похожих авторов по одному (ID)
    useEffect(() => {
        axios.get(`http://localhost:3010/user/get_similar_authors/${authorId}`)
            .then((resp) => {
                setAuthors(resp.data);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return [authors];
}