import { ISearch } from "@/types/ISearch";
import axios from "axios"
import { useState } from "react"

export const useSearch = () => {
    const [search, setSearch] = useState<ISearch[]>([]);

    const searchFn = async (value: string) => {
        axios.get(`http://localhost:3010/search/${value}`)
            .then((resp) => {
                setSearch(resp.data);
            });
    }

    return [search, searchFn];
}