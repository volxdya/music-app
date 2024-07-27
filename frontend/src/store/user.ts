import {makeAutoObservable} from "mobx";
import {jwtDecode, JwtPayload} from "jwt-decode";
import {getItem} from "@/utils/localStorage.ts";
import {defaultValueMe, defaultValueUser} from "@/store/defaultValues/defaultValueUser.ts";
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

    userData: loginJwt = defaultValueUser;
    me: IUser = defaultValueMe;


    getUserData() {
        let decoded: loginJwt;

        const token = getItem("token");

        if (token) {

            decoded = jwtDecode(token);

            this.userData.id = decoded.id;
            this.userData.login = decoded.login;
            this.userData.firstName = decoded.firstName;
            this.userData.lastName = decoded.lastName;
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