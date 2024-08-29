import axios from "axios";
import { getItem } from "@/utils/localStorage.ts";
import user from "@/store/user.ts";
import { useToast } from "@/components/ui/use-toast.ts";

export const useDeleteSubscription = (userId: number) => {
  const { toast } = useToast();

  // Отказ от подписки
  const deleteSubscription = async () => {
    await axios
      .post(
        `http://localhost:3010/user/delete_subscription/userId=${userId}`,
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

  return [deleteSubscription];
};
