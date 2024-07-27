import {ITrack} from "@/store/user.ts";
import {IAlbum} from "@/types/IAlbum.ts";
import {IPlaylist} from "@/types/IPlaylist.ts";

export interface IUser {
    login: string;
    id: number;
    lastName: string;
    firstName: string;
    playlists: Array<IPlaylist>;
    albums: Array<IAlbum>;
    tracks: Array<ITrack>;
    isUser: boolean;
}