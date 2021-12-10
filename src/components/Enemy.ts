import { poz } from "./interf/poz";
import renderObject from "./renderObject";

export default class Enemy extends renderObject {
    public update: Function;
    constructor() {
        super();
        this.poz = { x: 500, y: 500 };
        this.wit = { x: 20, y: 20 }
        this.sprite = [{ x: 350, y: 270 }, { x: 20, y: 20 }]
        this.speed = 0;
        this.type = 2;
        this.direction = 1;
        this.vertical_speed = 0;
        this.id *= 11;
    }
    public check = (pozit: poz, witit: poz) => {
        let d_x1 = pozit.x;
        let d_x2 = d_x1 + witit.x;
        let d_y1 = pozit.y;
        let d_y2 = d_y1 + witit.y;

        let c_x1 = this.poz.x;
        let c_x2 = c_x1 + this.wit.x;
        let c_y1 = this.poz.y;
        let c_y2 = c_y1 + this.wit.y;
        // console.log(c_x1, c_x2)
        if (
            d_x1 >= c_x1 && d_x1 <= c_x2
            ||
            d_x2 >= c_x1 && d_x2 <= c_x2
        )
            if (d_y1 >= c_y1 && d_y1 <= c_y2
                ||
                d_y2 >= c_y1 && d_y2 <= c_y2
            )
                return true;
        return false;
        // console.log(d_x1, c_x1, "x1")
        // console.log(d_x2, c_x2, "x2")
        // console.log(d_y1, c_y1, "y1")
        // console.log(d_y2, c_y2, "y2")
        // if( d_x1 >= c_x1)
        // console.log("HIT")

    }
    public standard_update = () => {
        this.poz.y += this.vertical_speed;
    }
}