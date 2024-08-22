import axios from "axios";
import { getItem } from "@/utils/localStorage.ts";

export const useDeleteSubscription = (userId: number) => {
  const deleteSubscription = async () => {
    await axios.post(
      `http://localhost:3010/user/delete_subscription/userId=${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      },
    );
  };

  return [deleteSubscription];
};
