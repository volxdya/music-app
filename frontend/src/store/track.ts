import { makeAutoObservable } from "mobx";
import { ITrack } from "@/types/ITrack.ts";
import { getAll } from "@/api/tracks/getAll.ts";

class Track {
  constructor() {
    makeAutoObservable(this);
  }

  tracks: ITrack[] = [];

  async getAllTracks() {
    await getAll().then((resp) => {
      this.tracks = resp.data;
    });
  }
}

export default new Track();
