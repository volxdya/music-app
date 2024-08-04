import { ISearch } from "@/types/ISearch";
import axios from "axios"
import { useState } from "react"

export const useSearch = () => {
    const [array, setArray] = useState<ISearch[]>([]);

    const fetch = async (paramSearch: string, value: string) => {
        await axios.get(`http://localhost:3010/${paramSearch}/search/${value}`)
            .then((resp) => {
                const dataWithSource = resp.data.map((item: ISearch) => ({ ...item, source: paramSearch }));
                setArray(dataWithSource);
            });
    }

    const search = async (value: string) => {
        fetch("author", value);
        fetch("track", value);
        fetch("album", value);
    }

    return [search, array];
}