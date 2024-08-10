import { ITrack } from "@/types/ITrack.ts";

export interface IGenre {
  id: number;
  title: string;
  tracks: ITrack[];
}
