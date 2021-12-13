import Enemy from "./Enemy";
import { poz } from "./interf/poz";
export class Plane extends Enemy {
    constructor(public time: number, poz: poz, public direction: number) {
        super();
        this.poz = poz;
        this.wit = { x: 80, y: 30 }
        this.sprite = [
            { x: 190, y: 235 }, { x: 90, y: 60 },
        ]
        this.direction = Math.floor(Math.random() * -2) - 1;
        this.speed = 0;
        this.type = 4;

    }
    public update = () => {
        this.standard_update();
    }
}