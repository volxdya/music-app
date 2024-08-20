import axios from "axios";
import { useToast } from "@/components/ui/use-toast.ts";

export const useBuySubscription = (userId: number) => {
  const { toast } = useToast();

  const buy = async () => {
    await axios
      .post(`http://localhost:3010/user/buy_subscription/userId=${userId}`)
      .then(() => {
        toast({
          title: "Вы успешно купили подписку",
        })
      });
  };

  return [buy];
};
