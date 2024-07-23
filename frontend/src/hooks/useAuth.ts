/*
import {useEffect} from "react";
import axios from "axios";
import {getItem, setItem} from "@/utils/localStorage.ts";

export function useAuth(login: string, password: string) {
    useEffect(() => {

        axios.post(`http://localhost:3010/auth/login`, {
            login: login,
            password: password,
            isUser: true
        }).then((res) => {
            setItem("token", res.data.token);

            console.log(getItem("token"));
        }).catch((err) => {
            console.log(err);
        });
    }, [login, password]);

    return [getItem("token")];
}*/
