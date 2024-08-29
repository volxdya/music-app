import { deleteSubscriptionUser } from "@/api/subscription/deleteSubscription.ts";

export const useDeleteSubscription = (userId: number) => {
  // Отказ от подписки
  const deleteSubscription = async () => {
    deleteSubscriptionUser(userId);
  };

  return [deleteSubscription];
};
