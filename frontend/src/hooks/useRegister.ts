import {FormEvent} from "react";
import {stopFormBehavior} from "@/utils/stopFormBehavior.ts";
import axios from "axios";
import {useToast} from "@/components/ui/use-toast.ts";

export const useRegister = () => {
    const {toast} = useToast();

    const handleSubmit = async (e: FormEvent, login: string, password: string, firstName: string, lastName: string) => {
        stopFormBehavior(e);

        await axios.post(`http://localhost:3010/user/create`, {
            login: login,
            password: password,
            firstName: firstName,
            lastName: lastName,
        }).then((res) => {
            console.log(res.data);

            toast({
                title: "Вы успешно зарегистрировались!",
                description: "Success registration",
            });

            setTimeout(() => {
                window.location.replace("/");
            }, 5000);
        }).catch((err) => {
            console.log(err);

            toast({
                title: "ERROR",
                description: "500 HTTP STATUS CODE",
            });
        });
    }

    return {handleSubmit};
}