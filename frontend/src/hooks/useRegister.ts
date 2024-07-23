import {FormEvent} from "react";
import {stopFormBehavior} from "@/utils/stopFormBehavior.ts";
import axios from "axios";

export const useRegister = () => {
    const handleSubmit = async (e: FormEvent, login: string, password: string, firstName: string, lastName: string) => {
        stopFormBehavior(e);

        await axios.post(`http://localhost:3010/user/create`, {
            login: login,
            password: password,
            firstName: firstName,
            lastName: lastName,
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return {handleSubmit};
}