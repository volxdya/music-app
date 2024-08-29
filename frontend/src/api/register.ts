import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "@/components/ui/use-toast.ts";

export const register = async (
  login: string,
  password: string,
  firstName: string,
  lastName: string,
  isAuthor: boolean,
) => {
  const response: AxiosResponse = await axios
    .post(`http://localhost:3010/user/create`, {
      login: login,
      password: password,
      firstName: firstName,
      lastName: lastName,
      isUser: !isAuthor,
    })
    .then((resp) => {
      toast({
        title: "Вы успешно зарегистрировались!",
        description: "Success registration",
      });

      return resp.data;
    })
    .catch((err: AxiosError) => {
      if (err.response) {
        toast({
          title: `${err.message}`,
          description: `${err.response.status} HTTP STATUS CODE`,
        });
      }
    });

  return response.status < 300;
};
