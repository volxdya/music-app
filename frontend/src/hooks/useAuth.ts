import {FormEvent} from "react";
import axios from "axios";
import {setItem} from "@/utils/localStorage.ts";
import {stopFormBehavior} from "@/utils/stopFormBehavior.ts";
import {useToast} from "@/components/ui/use-toast.ts";

export const useAuth = () => {

    const {toast} = useToast();

    const handleSubmit = async (e: FormEvent, login: string, password: string) => {
        stopFormBehavior(e);

        await axios.post(`http://localhost:3010/auth/login`, {
            login: login,
            password: password,
            isUser: true
        }).then((res) => {
            setItem("token", res.data.token);

            toast({
                title: "Вы успешно авторизовались!",
                description: "Через 5 секунд произойдет редирект на основную страницу",
            });
        }).catch((err) => {
            console.log(err);

            toast({
                title: "ERROR",
                description: "401 HTTP STATUS CODE",
            });
        });
    }

    return {handleSubmit};
}