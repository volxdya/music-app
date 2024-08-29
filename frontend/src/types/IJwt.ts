import { JwtPayload } from "jwt-decode";

export interface IJwt extends JwtPayload {
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
