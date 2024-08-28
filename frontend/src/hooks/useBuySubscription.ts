import axios, { AxiosError } from "axios";
import { useToast } from "@/components/ui/use-toast.ts";
import { getItem } from "@/utils/localStorage.ts";
import user from "@/store/user.ts";

export const useBuySubscription = (userId: number, subscriptionId: number) => {
  const { toast } = useToast();

  const buy = async () => {
    await axios
      .post(
        `http://localhost:3010/user/buy_subscription/${userId}/${subscriptionId}`,
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

  return [buy];
};
