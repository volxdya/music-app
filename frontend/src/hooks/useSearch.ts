import { ISearch } from "@/types/ISearch";
import { useState } from "react";
import { getSearchData } from "@/api/search/getSearchData.ts";

export const useSearch = () => {
  const [search, setSearch] = useState<ISearch[]>([]);

  // Поиск
  const searchFn = async (value: string) => {
    await getSearchData(value).then((resp) => {
      setSearch(resp.data);
    });
  };

  return [search, searchFn];
};
