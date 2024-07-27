import {IUser} from "@/types/IUser.ts";

export interface ITrack {
    title: string;
    avatarUrl: string;
    trackUrl: string;
    authorId: number;
    isTrack: boolean;
    id: number;
    author: IUser;
}