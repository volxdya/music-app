import {FormEvent, useState} from "react";
import axios from "axios";
import {setItem} from "@/utils/localStorage.ts";
import {stopFormBehavior} from "@/utils/stopFormBehavior.ts";
import {useToast} from "@/components/ui/use-toast.ts";

export const useAuth = (isAuthor: boolean) => {

    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {toast} = useToast();

    const handleSubmit = async (e: FormEvent, login: string, password: string) => {
        stopFormBehavior(e);

        setIsSuccess(false);
        setIsLoading(true);
        await axios.post(`http://localhost:3010/auth/login`, {
            login: login,
            password: password,
            isUser: !isAuthor
        }).then((res) => {
            setIsSuccess(true);
            setIsLoading(false);

            setItem("token", res.data.token);

            (e.target as HTMLFormElement).reset();

            toast({
                title: "Вы успешно авторизовались!",
                description: "SUCCESS AUTHORIZATION",
            });

            setInterval(() => {
                window.location.replace("/");
            }, 1500);
        }).catch((err) => {
            console.log(err);
            setIsLoading(false);
            setIsSuccess(false);

            toast({
                title: "ERROR",
                description: "401 HTTP STATUS CODE",
            });
        });
    }

    return {handleSubmit, isSuccess, isLoading};
}