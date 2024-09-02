import { FormEvent, useState } from "react";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import { auth } from "@/api/account/auth.ts";

export const useAuth = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // JWT Аутентификация
  const handleSubmit = async (
    e: FormEvent,
    login: string,
    password: string,
  ) => {
    stopFormBehavior(e);

    setIsLoading(true);

    try {
      setIsSuccess(await auth(login, password));

      window.location.replace('/');
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isSuccess, isLoading };
};
