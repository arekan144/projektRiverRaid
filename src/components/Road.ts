import renderObject from "./renderObject";

export default class Road extends renderObject {
    constructor(x: number, y: number) {
        super();
        this.poz = { x: x, y: y - 160 }
        this.wit = { x: (1100 - 315) / 2, y: 130 }
        this.sprite = [
            { x: 335, y: 70 }, { x: 80, y: 130 },
        ]
        this.speed = 0;
        this.type = 15;
        this.vertical_speed = 1
    }
    public update = () => {
        // console.log("??")
        // console.log(this.wit, this.vertical_speed)
        this.poz.y += this.vertical_speed;
    }
}