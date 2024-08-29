import axios, { AxiosError } from "axios";
import { getItem } from "@/utils/localStorage.ts";
import user from "@/store/user.ts";
import { toast } from "@/components/ui/use-toast.ts";
import {API_PATH} from "@/api";

export const buySubscription = async (
  userId: number,
  subscriptionId: number,
) => {
  await axios
    .post(
      `${API_PATH}/user/buy_subscription/${userId}/${subscriptionId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      },
    )
    .then(() => {
      toast({
        title: "Вы успешно купили подписку",
      });

      user.getMe();
    })
    .catch((err: AxiosError) => {
      toast({
        title: err.message,
      });
    });
};
