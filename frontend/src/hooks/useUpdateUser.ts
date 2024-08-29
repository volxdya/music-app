import { FormEvent } from "react";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import { update } from "@/api/account/update.ts";

export const useUpdateUser = () => {
  // Обновление пользователя
  const handleSubmit = async (
    e: FormEvent,
    login: string,
    firstName: string,
    lastName: string,
  ) => {
    stopFormBehavior(e);

    await update(login, firstName, lastName);
  };

  return [handleSubmit];
};
