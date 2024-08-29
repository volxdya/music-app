import axios from "axios";
import { getItem } from "@/utils/localStorage.ts";
import user from "@/store/user.ts";
import { toast } from "@/components/ui/use-toast.ts";
import { API_PATH } from "@/api";

export const deleteSubscriptionUser = async (userId: number) => {
  await axios
    .post(
      `${API_PATH}/user/delete_subscription/userId=${userId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      },
    )
    .then(() => {
      toast({ title: "Вы успешно отменили подписку" });
      user.getMe();
    });
};
