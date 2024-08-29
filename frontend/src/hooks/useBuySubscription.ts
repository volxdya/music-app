import { buySubscription } from "@/api/subscription/buySubscription.ts";

export const useBuySubscription = (userId: number, subscriptionId: number) => {

  // Покупка подписки
  const buy = async () => {
    await buySubscription(userId, subscriptionId);
  };

  return [buy];
};
