import { poz } from "./interf/poz";
import renderObject from "./renderObject";

export default class Missle extends renderObject {

    constructor(private plpoz: poz) {
        super();
        this.type = 1;
        this.poz = { x: plpoz.x + 30, y: plpoz.y - 40 }
        this.wit = { x: 10, y: 40 };
        this.speed = 40;
        this.direction = -1;
        this.sprite = [
            { x: 30, y: 105 },
            { x: 10, y: 40 }
        ]
        this.id *= 7;

    }
    public update = () => {
        this.poz.y += this.direction * this.speed;
    }
}