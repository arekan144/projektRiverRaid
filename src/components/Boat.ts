import Enemy from "./Enemy";
import { poz } from "./interf/poz";
export class Boat extends Enemy {
    constructor(private time: number, poz: poz, public direction: number) {
        super();
        this.poz = poz;
        this.wit = { x: 160, y: 40 }
        this.sprite = [
            { x: 20, y: 290 }, { x: 160, y: 40 }
        ]
        this.speed = 0;
        this.type = 3;
    }
    public update = () => {
        this.standard_update();
    }
}