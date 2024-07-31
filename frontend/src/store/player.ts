import {makeAutoObservable} from "mobx";
import {dfPlayer} from "@/store/defaultValues/dfPlayer.ts";

interface ICurrent {
    trackId: number;
    play: {
        whatPlay: {
            title: string;
            byFind: string | number;
        }; // playlist, author, track, search;
        next: Array<string>;
    },
    isPlay: boolean,
    time: number,
    previousVolume: number;
}

class Player {

    constructor() {
        makeAutoObservable(this);
    }

    current: ICurrent = dfPlayer;


    setCurrent(current: ICurrent) {
        this.current = current;
    }
}

export default new Player();