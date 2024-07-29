import axios from "axios";
import {useState} from "react";

export const useAuthorInfo = (id: number) => {
    const [author, setAuthor] = useState();

    const getAuthorInfo = async () => {
        await axios.get(`http://localhost:3010/author/get_by_id/${id}`).then((res) => {
            setAuthor(res.data);
        }).catch((err) => {
            console.log(err);
        });

        return [author];
    }
}