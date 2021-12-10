import { poz } from "./poz";

export interface player {
    max_speed: number;
    curr_speed: { x: number, };
    // kill: Function,
    dead: boolean,
    poz: poz,
    fuel: number,
    score: number,
    life: number,
    speed: number,
    dir: number,
    sprites: Array<Array<poz>>
}
export class def_player implements player {
    poz = { x: 510, y: 800 }
    fuel = 100
    dead = false
    score = 0
    life = 2;
    speed = 0.4;
    dir = 0;
    max_speed = 5
    curr_speed = { x: 0 }
    sprites = [
        [{ x: 130, y: 85 }, { x: 70, y: 85 }],
        [{ x: 60, y: 85 }, { x: 70, y: 85 }],
        [{ x: 200, y: 85 }, { x: 70, y: 85 }],
        [{ x: 40, y: 385 }, { x: 70, y: 65 }]
    ]
}