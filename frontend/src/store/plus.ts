import {makeAutoObservable} from "mobx";

class Plus {
    constructor() {
        makeAutoObservable(this);
    }

    current: string = "change_plan";

    setCurrent(current: string) {
        this.current = current;
    }
}

export default new Plus();
