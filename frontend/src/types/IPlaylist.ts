import {ITrack} from "@/types/ITrack.ts";

export interface IPlaylist {
    description: string;
    title: string;
    userId: number;
    avatarUrl: string;
    likes: number;
    id: number;
    tracks: ITrack[]
}