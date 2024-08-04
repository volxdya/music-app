import {IUser} from "@/types/IUser.ts";

export interface ITrack {
    title: string;
    authorId: number;
    albumId: number;
    isTrack: boolean;
    id: number;
    trackData: {
        accountId: string;
        filePathAvatar: string;
        fileUrlAvatar: string;
        filePathMP3: string;
        fileUrlMP3: string;
    }
    author: IUser;
}