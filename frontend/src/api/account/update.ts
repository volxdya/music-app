import axios, { AxiosError } from "axios";
import user from "@/store/user.ts";
import { getItem } from "@/utils/localStorage.ts";
import { toast } from "@/components/ui/use-toast.ts";
import { API_PATH } from "@/api";

export const update = async (
  login: string,
  firstName: string,
  lastName: string,
) => {
  await axios
    .patch(
      `${API_PATH}/user/update/${user.userData.id}`,
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
