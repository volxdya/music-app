import {makeAutoObservable} from "mobx";

export class Count {
    constructor() {
        makeAutoObservable(this);
    }

    count: number = 0;

    increment() {
        this.count += 1;

        console.log(this.count)
    }
}

export default new Count();