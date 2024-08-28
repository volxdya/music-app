import { useEffect, useState } from "react";
import axios from "axios";
import { ISubscription } from "@/types/ISubscription.ts";

export const useSubscriptionsData = () => {
  const [subscriptionData, setSubscriptionData] = useState<ISubscription[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3010/subscription/get_all`)
      .then((resp) => {
        setSubscriptionData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return [subscriptionData];
};
