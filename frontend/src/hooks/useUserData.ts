import user from "@/store/user";
import { IUser } from "@/types/IUser";
import { getItem } from "@/utils/localStorage";
import axios from "axios";
import { useEffect, useState } from "react"

export const useUserData = (userId: number) => {
    const [userData, setUserData] = useState<IUser>();

    useEffect(() => {
        if (getItem('token')) {
            axios.get(`http://localhost:3010/user/get_by_id/${userId}`).then((res) => {
                setUserData(res.data);
            }).catch((err) => {
                console.log(err);
            });
        }
    }, []);

    return [userData];
}