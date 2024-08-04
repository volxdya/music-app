import { ITrack } from "./ITrack";
import { IUser } from "./IUser";

export interface IAlbum {
    title: string;
    avatarUrl: string;
    likes: number;
    authorId: number;
    id: number;
    createdAt: Date;
    tracks: ITrack[];
    author: IUser;

}