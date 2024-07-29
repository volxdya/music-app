import {makeAutoObservable} from "mobx";
import {ITrack} from "@/types/ITrack.ts";
import axios from "axios";

class Track {
    constructor() {
        makeAutoObservable(this);
    }

    tracks: ITrack[] = [];

    async getAllTracks() {
        await axios.get(`http://localhost:3010/track/get_all`)
            .then((resp) => {
                this.tracks = resp.data;
            }).catch((err) => {
                console.log(err);
            });
    }
}

export default new Track();