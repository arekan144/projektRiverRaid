import { poz } from "./interf/poz";

export default class renderObject {
    public type: number; // 1 -- missle, 2 -- enemy, 3 -- brigde, itp
    public vertical_speed: number;
    public poz: poz = { x: 0, y: 0 };
    public wit: poz = { x: 0, y: 0 };
    public id: number = Math.floor(Math.random() * 1000000)
    // public real_y: number = 0;
    public speed: number = 1;
    public direction: number = 1;
    public sprite: Array<poz> = [{ x: 0, y: 0 }, { x: 0, y: 0 }]
    public update: Function = () => { };
    public standard_update: Function;
    public check: Function = () => { return false };
    public time: number;

    constructor() { }
}