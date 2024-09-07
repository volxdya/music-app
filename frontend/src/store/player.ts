import { makeAutoObservable } from "mobx";
import { dfPlayer } from "@/store/defaultValues/dfPlayer.ts";
import { ITrack } from "@/types/ITrack";

interface ICurrent {
    trackId: number;
    play: {
        whatPlay: {
            title: string;
            byFind: string | number;
        }; // playlist, author, track, search;
        next: ITrack[];
    },
    isPlay: boolean,
    time: number,
    previousVolume: number;
    currentVolume: number;
}

class Player {

    constructor() {
        makeAutoObservable(this);
    }

    current: ICurrent = dfPlayer;


    async setCurrent(current: ICurrent) {
        this.current = current;
    }
}

export default new Player();