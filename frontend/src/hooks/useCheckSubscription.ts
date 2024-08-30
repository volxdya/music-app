import { check } from "@/api/subscription/checkSubscription";
import { useEffect, useState } from "react";

export const useCheckSubscription = (userId: number) => {
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    const get = async () => {
      check(userId).then((resp) => {
        setIsFinish(resp.data);
      });
    };
    get();
  });

  return [isFinish];
};
