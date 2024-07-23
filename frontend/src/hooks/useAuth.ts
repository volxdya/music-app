import {FormEvent} from "react";
import axios from "axios";
import {getItem, setItem} from "@/utils/localStorage.ts";
import {stopFormBehavior} from "@/utils/stopFormBehavior.ts";

export const useAuth = () => {
    const handleSubmit = async (e: FormEvent, login: string, password: string) => {
        stopFormBehavior(e);

        await axios.post(`http://localhost:3010/auth/login`, {
            login: login,
            password: password,
            isUser: true
        }).then((res) => {
            setItem("token", res.data.token);

            console.log(getItem("token"));
        }).catch((err) => {
            console.log(err);
        });
    }

    return {handleSubmit};
}