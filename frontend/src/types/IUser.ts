import { IAlbum } from "@/types/IAlbum.ts";
import { IPlaylist } from "@/types/IPlaylist.ts";
import { ITrack } from "./ITrack";
import { ISubscription } from "@/types/ISubscription.ts";

export interface IUser {
  login: string;
  id: number;
  lastName: string;
  firstName: string;
  playlists: Array<IPlaylist>;
  albums: Array<IAlbum>;
  tracks: ITrack[];
  isUser: boolean;
  type: string;
  isSubscribed: boolean;
  finishSubscribe: {
    date: Date;
    indexMonth: number;
  };
  subscription: ISubscription;
}
