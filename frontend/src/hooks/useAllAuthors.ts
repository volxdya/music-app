import { IUser } from "@/types/IUser"
import axios from "axios";
import { useEffect, useState } from "react"

export const useAllAuthors = () => {
    const [authors, setAuthors] = useState<IUser[]>([]);

    // Получение всех авторов
    useEffect(() => {
        axios.get(`http://localhost:3010/user/get_authors`)
            .then((resp) => {
                setAuthors(resp.data);
            }).catch((err) => {
                console.log(err);
            });
    }, []);

    return [authors];
}