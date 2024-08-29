import { FormEvent, useState } from "react";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import { register } from "@/api/account/register.ts";

export const useRegister = (isAuthor: boolean) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Регистрация пользователя
  const handleSubmit = async (
    e: FormEvent,
    login: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => {
    stopFormBehavior(e);

    setIsLoading(true);

    try {
      setIsSuccess(
        await register(login, password, firstName, lastName, !isAuthor),
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isSuccess, isLoading };
};