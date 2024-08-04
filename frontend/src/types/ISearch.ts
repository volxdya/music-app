import { IAlbum } from "./IAlbum";
import { ITrack } from "./ITrack";
import { IUser } from "./IUser";

export interface ISearch extends IUser, IAlbum, ITrack {
    source: string;
};