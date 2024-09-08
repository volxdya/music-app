import {IUser} from "@/types/IUser.ts";
import {IGenre} from "@/types/IGenre.ts";

export interface ITrack {
    title: string;
    userId: number;
    albumId: number;
    isTrack: boolean;
    id: number;
    type: string;
    genre: IGenre;
    auditions: number;
    trackData: {
        accountId: string;
        filePathAvatar: string;
        fileUrlAvatar: string;
        filePathMP3: string;
        fileUrlMP3: string;
    }
    author: IUser;
}