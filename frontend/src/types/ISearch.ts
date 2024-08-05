import { IAlbum } from "./IAlbum";
import { IUser } from "./IUser";

export interface ISearch extends IUser, IAlbum {
    type: string;
};