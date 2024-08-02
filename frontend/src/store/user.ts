import {makeAutoObservable} from "mobx";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {getItem} from "@/utils/localStorage.ts";
import {dfMe, dfUser} from "@/store/defaultValues/dfUser.ts";
import axios from "axios";
import {IUser} from "@/types/IUser.ts";

interface loginJwt extends JwtPayload {
    login: string;
    id: number;
    lastName: string;
    firstName: string;
    isUser: boolean;
}



class User {
    constructor() {
        makeAutoObservable(this);
    }

    userData: loginJwt = dfUser;
    me: IUser = dfMe;


    getUserData() {
        let decoded: loginJwt;

        const token = getItem("token");

        if (token) {
            decoded = jwtDecode(token);
            Object.assign(this.userData, decoded);
        }
    }

    getMe() {
        if (getItem("token")) {
            this.getUserData();

            axios.get(`http://localhost:3010/${this.userData.isUser ? "user" : "author"}/get_one/${this.userData.login}`).then((res) => {
                this.me = res.data;
            }).catch((err) => {
                console.log(err);
            });

        }
    }
}

export default new User();