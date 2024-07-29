import {makeAutoObservable} from "mobx";
import {ITrack} from "@/types/ITrack.ts";
import {dfPlayer} from "@/store/defaultValues/dfPlayer.ts";

interface ICurrent {
    trackId: number;
    play: {
        whatPlay: string; // playlist, author, track, search;
        next: Array<ITrack>
    }
}

class Player {

    constructor() {
        makeAutoObservable(this);
    }

    current: ICurrent = dfPlayer;

}

export default new Player();