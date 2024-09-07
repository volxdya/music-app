import { makeAutoObservable } from "mobx";
import { dfPlayer } from "@/store/defaultValues/dfPlayer.ts";
import { getTracksByParam } from "@/api/tracks/getByParam";
import { AxiosResponse } from "axios";
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
        const { title, byFind } = this.current.play.whatPlay;
        let { next } = this.current.play;

        await getTracksByParam(title, byFind).then((resp: AxiosResponse) => {
            this.current.play.next = resp.data.tracks;
        });

        next = next.filter((item: ITrack) => item.id !== current.trackId);
    }
}

export default new Player();