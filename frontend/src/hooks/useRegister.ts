import {FormEvent, useState} from "react";
import {stopFormBehavior} from "@/utils/stopFormBehavior.ts";
import axios, {AxiosError} from "axios";
import {useToast} from "@/components/ui/use-toast.ts";

export const useRegister = (isAuthor: boolean) => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {toast} = useToast();

    const handleSubmit = async (e: FormEvent, login: string, password: string, firstName: string, lastName: string) => {
        stopFormBehavior(e);

        setIsLoading(true);
        setIsSuccess(false);
        await axios.post(`http://localhost:3010/${isAuthor ? "author" : "user"}/create`, {
            login: login,
            password: password,
            firstName: firstName,
            lastName: lastName,
            isUser: !isAuthor
        }).then(() => {
            setIsSuccess(true);
            setIsLoading(false);

            toast({
                title: "Вы успешно зарегистрировались!",
                description: "Success registration",
            });

            setTimeout(() => {
                (e.target as HTMLFormElement).reset();

                setIsSuccess(false);
            }, 1500);

        }).catch((err: AxiosError) => {
            setIsSuccess(false);
            setIsLoading(false);

            console.log(err);

            if (err.response) {
                toast({
                    title: `${err.message}`,
                    description: `${err.response.status} HTTP STATUS CODE`,
                });
            }
        });
    }

    return {handleSubmit, isSuccess, isLoading};
}