import { useEffect, useState } from "react";
import { ISubscription } from "@/types/ISubscription.ts";
import { getSubscriptions } from "@/api/subscription/getSubscriptions.ts";

export const useSubscriptionsData = () => {
  const [subscriptionData, setSubscriptionData] = useState<ISubscription[]>([]);

  // Получение информации о подписках
  useEffect(() => {
    const get = async () => {
      await getSubscriptions().then((resp) => {
        setSubscriptionData(resp.data);
      });
    };

    get();
  }, []);

  return [subscriptionData];
};
