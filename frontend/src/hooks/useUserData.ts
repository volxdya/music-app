import { IUser } from "@/types/IUser";
import { getItem } from "@/utils/localStorage";
import { useEffect, useState } from "react";
import { getUserData } from "@/api/account/getUserData.ts";

export const useUserData = (userId: number) => {
  const [userData, setUserData] = useState<IUser>();

  // Получение инфы об одном пользователе по ID
  useEffect(() => {
    if (getItem("token")) {
      const get = async () => {
        await getUserData(userId).then((resp) => {
          setUserData(resp.data);
        });
      };

      get();
    }
  }, [userId]);

  return [userData];
};
