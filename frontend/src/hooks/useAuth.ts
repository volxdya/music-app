import { FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";
import { getItems, setItem, setItems } from "@/utils/localStorage.ts";
import { stopFormBehavior } from "@/utils/stopFormBehavior.ts";
import { useToast } from "@/components/ui/use-toast.ts";

export const useAuth = (isAuthor: boolean) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (
    e: FormEvent,
    login: string,
    password: string,
  ) => {
    stopFormBehavior(e);

    setIsSuccess(false);
    setIsLoading(true);
    await axios
      .post(`http://localhost:3010/auth/login`, {
        login: login,
        password: password,
        isUser: !isAuthor,
      })
      .then((res) => {
        setIsSuccess(true);
        setIsLoading(false);

        setItem("token", res.data.token);
        const existingTokens = getItems("all_tokens") || [];

        // Добавляем новый токен к существующим
        const allTokens = [...existingTokens, res.data.token];

        // Сохраняем обновленный массив токенов
        setItems("all_tokens", allTokens);


        (e.target as HTMLFormElement).reset();

        toast({
          title: "Вы успешно авторизовались!",
          description: "SUCCESS AUTHORIZATION",
        });

        window.location.replace(`/`);
      })
      .catch((error: AxiosError) => {
        if (error.response && error.response.data) {
          console.log(error.response);

          setIsLoading(false);
          setIsSuccess(false);

          toast({
            title: `${error.response.data.message}`,
            description: `${error.response.status} HTTP STATUS CODE`,
          });
        }
      });
  };

  return { handleSubmit, isSuccess, isLoading };
};
