import Enemy from "./Enemy";
import { poz } from "./interf/poz";
export class Fuel extends Enemy {
    constructor(public poz: poz, public direction: number) {
        super();
        // this.poz = poz;
        this.wit = { x: 70, y: 120 }
        this.sprite = [
            { x: 765, y: 75 }, { x: 70, y: 120 }
        ]
        this.speed = 0;
        this.type = 6;
    }
    public update = () => {
        this.standard_update();
    }
}