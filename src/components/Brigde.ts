import Enemy from "./Enemy";
import { poz } from "./interf/poz";
export class Brigde extends Enemy {
    constructor() {
        super();
        this.poz = { x: (1100 - 315) / 2, y: -150 }
        this.wit = { x: 315, y: 110 }
        this.sprite = [
            { x: 860, y: 80 }, { x: 315, y: 110 },
        ]
        this.speed = 0;
        this.type = 5;
    }
    public update = () => {
        this.standard_update();
    }
}