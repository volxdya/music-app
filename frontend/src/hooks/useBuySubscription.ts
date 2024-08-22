import axios from "axios";
import { useToast } from "@/components/ui/use-toast.ts";
import { getItem } from "@/utils/localStorage.ts";

export const useBuySubscription = (userId: number) => {
  const { toast } = useToast();

  const buy = async () => {
    await axios
      .post(
        `http://localhost:3010/user/buy_subscription/userId=${userId}`,
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
      });
  };

  return [buy];
};
