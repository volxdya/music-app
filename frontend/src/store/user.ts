import { makeAutoObservable } from "mobx";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { getItem, getItems } from "@/utils/localStorage.ts";
import { dfMe, dfUser } from "@/store/defaultValues/dfUser.ts";
import axios from "axios";
import { IUser } from "@/types/IUser.ts";

export interface loginJwt extends JwtPayload {
  login: string;
  id: number;
  lastName: string;
  firstName: string;
  isUser: boolean;
  isSubscribed: boolean;
  finishSubscribe: {
    date: Date;
    indexMonth: number;
  };
}

class User {
  constructor() {
    makeAutoObservable(this);
  }

  userData: loginJwt = dfUser;
  users: loginJwt[] = [];
  me: IUser = dfMe;

  getUserData() {
    let decoded: loginJwt;

    const token = getItem("token");

    if (token) {
      decoded = jwtDecode(token);
      Object.assign(this.userData, decoded);
    }
  }

  getAllUsers() {
    const tokens: string[] = getItems("all_tokens");

    if (tokens && tokens.length > 0) {
      tokens.forEach((token: string) => {
        try {
          const decoded: loginJwt = jwtDecode(token);
          this.users.push(decoded);
        } catch (error) {
          console.error(`Ошибка декодирования токена: ${token}`, error);
        }
      });
    }
  }

  getMe() {
    if (getItem("token")) {
      this.getUserData();

      axios
        .get(`http://localhost:3010/user/get_by_id/${this.userData.id}`)
        .then((res) => {
          this.me = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
}

export default new User();
