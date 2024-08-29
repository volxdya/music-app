import { makeAutoObservable } from "mobx";
import { jwtDecode } from "jwt-decode";
import { getItem, getItems } from "@/utils/localStorage.ts";
import { dfMe, dfUser } from "@/store/defaultValues/dfUser.ts";
import { IUser } from "@/types/IUser.ts";
import { IJwt } from "@/types/IJwt.ts";
import { getUserData } from "@/api/account/getUserData.ts";

class User {
  constructor() {
    makeAutoObservable(this);
  }

  userData: IJwt = dfUser;
  users: IJwt[] = [];
  me: IUser = dfMe;

  getUserData() {
    let decoded: IJwt;

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
          const decoded: IJwt = jwtDecode(token);
          this.users.push(decoded);
        } catch (error) {
          console.error(`Ошибка декодирования токена: ${token}`, error);
        }
      });
    }
  }

  async getMe() {
    if (getItem("token")) {
      this.getUserData();

      await getUserData(this.userData.id).then((resp) => {
        this.me = resp.data;
      });
    }
  }
}

export default new User();
