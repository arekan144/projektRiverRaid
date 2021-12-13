import Enemy from "./Enemy";
import { poz } from "./interf/poz";
export class Helicopter extends Enemy {
    constructor(public time: number, poz: poz, public direction: number) {
        super();
        this.poz = poz;
        this.wit = { x: 80, y: 50 }
        this.sprite = [
            { x: 15, y: 230 }, { x: 80, y: 50 },
            { x: 105, y: 230 },
        ]
        this.speed = 0;
        this.type = 2;
    }
    public update = () => {
        this.standard_update();
    }
}