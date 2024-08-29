import axios, { AxiosError, AxiosResponse } from "axios";
import { getItems, setItem, setItems } from "@/utils/localStorage.ts";
import { toast } from "@/components/ui/use-toast.ts";
import { API_PATH } from "@/api";
import user from "@/store/user.ts";

export const auth = async (login: string, password: string) => {
  const response: AxiosResponse = await axios
    .post(`${API_PATH}/auth/login`, {
      login: login,
      password: password,
    })
    .then((resp) => {
      const isHaveThisUser: boolean = user.users.some(
        (item) => item.login === login,
      );

      if (isHaveThisUser) {
        toast({ title: "Вы уже авторизованы" });

        return resp.data;
      }

      setItem("token", resp.data.token);
      const existingTokens = getItems("all_tokens") || [];

      // Добавляем новый токен к существующим
      const allTokens = [...existingTokens, resp.data.token];

      // Сохраняем обновленный массив токенов
      setItems("all_tokens", allTokens);

      toast({
        title: "Вы успешно авторизовались!",
        description: "SUCCESS AUTHORIZATION",
      });

      return resp.data;
    })
    .catch((error: AxiosError) => {
      if (error.response && error.response.data) {
        console.log(error.response);

        toast({
          title: `${error.response.data.message}`,
          description: `${error.response.status} HTTP STATUS CODE`,
        });
      }
    });

  return response.status < 300;
};
