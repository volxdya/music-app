import { FormEvent } from "react";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import axios, { AxiosError } from "axios";
import { useToast } from "@/components/ui/use-toast.ts";
import user from "@/store/user.ts";
import { getItem } from "@/utils/localStorage.ts";

export const useUpdateUser = () => {
  const { toast } = useToast();

  const handleSubmit = async (
    e: FormEvent,
    login: string,
    firstName: string,
    lastName: string,
  ) => {
    stopFormBehavior(e);

    await axios
      .patch(
        `http://localhost:3010/user/update/${user.userData.id}`,
        {
          login: login,
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: {
            Authorization: `Bearer ${getItem("token")}`,
          },
        },
      )
      .then(() => {
        toast({ title: "Успешно" });
      })
      .catch((err: AxiosError) => {
        toast({ title: err.message });
      });
  };

  return [handleSubmit];
};
