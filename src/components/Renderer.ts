import { variables } from "../data/exp";
import Control from "./Control";
import { poz } from "./interf/poz";
// import TestButton from "./TestButton";
import { keyboard } from "../data/keyboard";
import { player, def_player } from "./interf/player";
import Missle from "./Missle";
import renderObject from "./renderObject";
import Enemy from "./Enemy";
import { Helicopter } from "./Helicopter";
import { Boat } from "./Boat";
import { Brigde } from "./Brigde";
import Road from "./Road";
import { Plane } from "./Plane";
import { Fuel } from "./Fuel";

// import * as img from './gfx/logo.png';
export default class Render {
    private ctx: CanvasRenderingContext2D
    // private status: number = 0;
    private width = 1100;
    private height = 1100;
    private control: Control;
    private player: player;
    private ent: Array<renderObject> = [];
    private curr_y = 0;
    private points = 0;
    constructor(private canvas: HTMLCanvasElement, private assets: HTMLImageElement[], private audio: HTMLAudioElement[]) {
        this.ctx = this.canvas.getContext('2d');
        this.control = new Control();
        this.player = new def_player();
    }
    public startAnimation = () => {

    }
    private pauseGame = (): boolean => {
        // console.log('pause')
        if (variables.game.pause || !variables.game.start)
            return false;
        return variables.game.pause = true;
    }

    private resumeGame = (): boolean => {
        // console.log('res')

        if (!variables.game.pause || !variables.game.start)
            return false;
        variables.game.pause = false;
        this.refresh(0);
        return true;
    }
    private randomEnemies = (y: number = 0) => {
        // console.log(this.curr_y % 900)
        let taken: number[] = [90, 127, 19, 161, 59, 83, 13,]
        for (let x = 0; x < taken.length; x++) {
            let d = Math.floor(Math.random() * 3) + 2;
            let g = taken[x]
            let z = variables.game.level[g % variables.game.level.length][0][0] + 25
            // console.log(variables.game.level[g % variables.game.level.length][0][0])
            switch (d) {
                case 2:
                    // console.log(g % variables.game.level.length, variables.game.level[g % variables.game.level.length][0])
                    // variables.game.level[g % variables.game.level.length][0][0]
                    this.ent.push(new Helicopter(Math.floor(Math.random() * 100), { x: z, y: -g * this.blockHeight + y - 150 }, 1))
                    this.ent[this.ent.length - 1].blok = g;
                    break;
                case 3:
                    this.ent.push(new Boat(Math.floor(Math.random() * 400), { x: z, y: -g * this.blockHeight + y - 150 }, 1))
                    this.ent[this.ent.length - 1].blok = g;
                    break;
                case 4:
                    this.ent.push(new Plane(0, { x: z, y: -g * this.blockHeight + y - 150 }, 1))
                    // this.ent[this.ent.length - 1].blok = g;
                    break;

            }
            //105

        }
        // if (Math.floor(Math.random() * 4) != 3)
        this.ent.push(new Fuel({ x: 70, y: -1150 + y - 150 }, 1));
        // if (Math.floor(Math.random() * 4) != 3)
        this.ent.push(new Fuel({ x: 790, y: -650 + y - 150 }, 1));
        this.ent.push(new Helicopter(0, { x: 780, y: -105 * this.blockHeight + y - 150 }, -2))
        this.ent[this.ent.length - 1].blok = 105;
        // console.log(taken)
    }
    private started: Array<number> = [];
    public startGame = (): boolean => {
        // console.log('start')
        // console.log(this.player, def_player)
        this.ent = [];
        this.ent.push(new Road(0, 890), new Road((1100 + 315) / 2, 890))
        this.randomEnemies(900);
        if (variables.game.start)
            return false
        this.started.push(1);
        variables.game.start = true;
        // this.ent.push(new Helicopter(0, { x: 100, y: 500 }, -1), new Boat(0, { x: 500, y: 300 }, -2));
        // this.ent.push(new Brigde())
        // this.ent.push(new Enemy());
        // this.ent[1].poz.x += 200;
        this.refresh(0);
        return true;
    }

    private kill_player = () => {
        // this.plb = -1;
        this.player.dead = true;
        // this.player.score 
        this.player.dir = 3;
        this.drawBackground();
        this.drawPlayer();
        this.ent.forEach(el => {
            if (el.type == 15) {
                this.ctx.drawImage(this.assets[1], el.sprite[0].x, el.sprite[0].y, el.sprite[1].x, el.sprite[1].y, el.poz.x, el.poz.y, el.wit.x, el.wit.y);
            }
        })
        this.ent.forEach(el => {
            if (el.type != 15)
                this.drawObject(el.poz, el.sprite[0], el.sprite[1], el.direction)
            el.update();
        })
        variables.game.start = false;

        setTimeout(() => {
            this.curr_y = 0;
            console.log("END")
            // console.log(this.player, def_player)
            // variables.game.start = false;
            let lifes = this.player.life
            let score = this.player.score
            this.player = new def_player();
            this.player.life = lifes - 1;
            this.player.score = score;
            this.ctx.clearRect(0, 0, this.width, this.height)
            if (lifes == 0) {
                let ev = new Event('men');
                window.dispatchEvent(ev);
                return 0;
            }
            // this.player.life = lifes - 1;
            this.startGame();
        }, 3000)

    }
    private blockHeight: number = 10;
    private giveBottomBlock = () => {
        return Math.floor(this.curr_y / this.blockHeight);
    }
    private drawBlock = (x: number, width: number, y: number) => {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#8f5924";
        // console.log(x, width)
        this.ctx.moveTo(x - 20, y)
        this.ctx.lineTo(x - 20 + width + 40, y);
        this.ctx.lineTo(x - 20 + width + 40, y - this.blockHeight);
        this.ctx.lineTo(x - 20, y - this.blockHeight);
        this.ctx.lineTo(x - 20, y);
        this.ctx.fill();

        // this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.fillStyle = "#2D32B8";
        // console.log(x, width)
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(x + width, y);
        this.ctx.lineTo(x + width, y - this.blockHeight);
        this.ctx.lineTo(x, y - this.blockHeight);
        this.ctx.lineTo(x, y);
        this.ctx.fill();

        // this.ctx.stroke();
        this.ctx.closePath();
    }
    private drawn = false;
    // private plb = 0;
    private drawBackground = () => {
        this.ctx.fillStyle = "#6E9C42";
        this.ctx.fillRect(0, 0, this.width, 879);
        let y = 900 + (this.curr_y % this.blockHeight);
        let startBlock = this.giveBottomBlock();
        let maxos = Math.ceil(900 / this.blockHeight) + 1;
        // this.ctx.fillStyle = "#2D32B8";
        // let d = Math.random() * 10;
        // console.log(startBlock % variables.game.level.length)
        for (let blok = startBlock; blok < maxos + startBlock && y >= 0; blok += 1) {
            for (let z = 0; z < variables.game.level[blok % variables.game.level.length].length; z++) {
                // console.log(variables.game.level[blok % variables.game.level.length])
                if (variables.game.level[blok % variables.game.level.length][z][0] > -1000)
                    this.drawBlock(
                        variables.game.level[blok % variables.game.level.length][z][0],
                        variables.game.level[blok % variables.game.level.length][z][1],
                        y
                    )
            }
            y -= this.blockHeight;

        }
        // console.log((maxos + startBlock - 4) % variables.game.level.length)

        if ((maxos + startBlock) % variables.game.level.length == 0 && this.giveBottomBlock() != 0 && !this.drawn) {
            this.drawn = true;
            setTimeout(() => {
                this.drawn = false;
            }, 1000)

            // console.log(this.plb % this.blockHeight)
            this.ent.push(new Road(0, 0), new Brigde(), new Road((1100 + 315) / 2, 0))
            this.randomEnemies();

        }

        // console.log(blok)
        // this.ctx.fill();
    }
    private numbers: poz[] = [
        { x: 980, y: 480 }, //0, sz 60x40
        { x: 420, y: 480 }, //1
        { x: 490, y: 480 },
        { x: 560, y: 480 },
        { x: 630, y: 480 },
        { x: 560, y: 480 },
        { x: 700, y: 480 },
        { x: 770, y: 480 },
        { x: 840, y: 480 },
        { x: 910, y: 480 },
    ]
    private drawHud = () => {

        this.ctx.beginPath()
        this.ctx.rect(0, 880, this.width, this.height - 880);
        this.ctx.stroke();
        this.ctx.fillStyle = "#8E8E8E"
        this.ctx.fill();
        this.ctx.fillStyle = "#ffffff"
        this.ctx.closePath();
        this.drawObject({ x: 355, y: 980 }, { x: 370, y: 330 }, { x: 390, y: 75 }, 1);
        let d = this.player.score.toString();
        let x = 680;
        this.ctx.beginPath();
        this.ctx.rect(680, 910, 60, 40)
        this.ctx.fill();
        this.ctx.closePath();
        for (let z = d.length - 1; z >= 0; z--) {
            // console.log(eval(d[z]), d[z], this.player.score)
            this.drawObject({ x: x, y: 910 }, this.numbers[eval(d[z])], { x: 60, y: 40 }, 1)
            x -= 65;
        }
        // this.drawObject({ x: 0, y: 580 }, )
    }

    private drawObject = (poz: poz, what: poz = { x: 0, y: 0 }, wit: poz = { x: 20, y: 20 }, direct: number) => {
        // this.ctx.beginPath();
        // this.ctx.rect(poz.x, poz.y, wit.x, wit.y);
        // this.ctx.stroke();
        // this.ctx.closePath();
        if (direct == -2) {
            this.ctx.save();
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(this.assets[1], what.x, what.y, wit.x, wit.y, -wit.x - poz.x, poz.y, wit.x, wit.y);
            // this.ctx.scale(-1, 1);
            this.ctx.restore();
        } else
            this.ctx.drawImage(this.assets[1], what.x, what.y, wit.x, wit.y, poz.x, poz.y, wit.x, wit.y);
        // this.ctx.fillRect(poz.x, poz.y, 20, 20)
    }

    private drawPlayer = () => {
        this.drawObject(this.player.poz, this.player.sprites[this.player.dir][0], this.player.sprites[this.player.dir][1], 1)
        // this.ctx.fillRect(0, 0, 20, 20)
    }
    private game_speed = 3;
    private ti = 0;
    private chFuel = () => {
        this.ctx.beginPath();
        //30
        // console.log(Math.floor(this.player.fuel / 10))
        this.ctx.fillStyle = 'orange'
        this.ctx.rect(385 + 31 * this.player.fuel / 10, 1000, 20, 50)
        this.ctx.fill();
        this.ctx.closePath();
    }
    private refresh = (time: number) => {
        // console.log(this.started.length, variables.game);
        // console.log(this.player.poz, this.player.curr_speed);

        this.ti++;
        if (this.ti % 30 == 0) {
            for (let x = 0; x < 10; x++) {
                let rand = Math.floor(Math.random() * 5);
            }
        }
        if (!this.player.dead) {

            if (this.player.fuel < 0)
                this.kill_player();
            this.player.dir = 0
            this.player.poz.x += this.player.curr_speed.x
            if (this.player.curr_speed.x > 2)
                this.player.dir = 2;
            if (this.player.curr_speed.x < -2)
                this.player.dir = 1;
            // this.player.poz.y += this.player.curr_speed.y
            if (this.player.curr_speed.x > 0)
                this.player.curr_speed.x -= 0.2;
            if (this.player.curr_speed.x < 0)
                this.player.curr_speed.x += 0.2;
            if ((this.player.curr_speed.x > 0 && this.player.curr_speed.x < 0.2) || (this.player.curr_speed.x < 0 && this.player.curr_speed.x > -0.2))
                this.player.curr_speed.x = 0;
            // console.log(this.player.curr_speed.x)
            // if (this.player.curr_speed.y > 0)
            //     this.player.curr_speed.y -= 0.5;
            // if (this.player.curr_speed.y < 0)
            //     this.player.curr_speed.y += 0.5;

            if (keyboard.rt && keyboard.lt)
                this.player.curr_speed.x = 0;
            if (keyboard.rt && !keyboard.lt
                && this.player.curr_speed.x < this.player.max_speed - 0.2
            ) {
                // console.log("rt", this.player.curr_speed.x)
                // this.player.dir = 2
                this.player.curr_speed.x += this.player.speed;
            }
            if (!keyboard.rt && keyboard.lt
                && this.player.curr_speed.x > -this.player.max_speed + 0.2
            ) {
                // console.log("lf", this.player.curr_speed.x)
                // this.player.dir = 1
                this.player.curr_speed.x -= this.player.speed;
            }
            // console.log(def_player)
            if (this.player.poz.x < 5 || this.player.poz.x > this.width - 70)
                this.kill_player();
            // toW = 4

            for (let blok = this.giveBottomBlock() + 2; blok < this.giveBottomBlock() + 11; blok++) {
                // if (blok % variables.game.level.length != 0) {
                //     console.log(blok)
                // }
                let chkP = true;
                for (let z = 0; z < variables.game.level[blok % variables.game.level.length].length; z++) {
                    if (
                        this.player.poz.x > variables.game.level[blok % variables.game.level.length][z][0]
                        &&
                        this.player.poz.x + this.player.sprites[0][1].x < variables.game.level[blok % variables.game.level.length][z][0] + variables.game.level[blok % variables.game.level.length][z][1]
                    )
                        chkP = false;
                }
                if (chkP) {
                    this.kill_player();
                    break;
                }
                // variables.game.level[blok % variables.game.level.length][z][1],
            }
            this.game_speed = 1
            if (keyboard.up) {
                this.game_speed = 3;
                this.player.fuel -= 0.05;
            }
            if (keyboard.space && !this.control.coolDown) {
                this.control.coolDown = true;
                this.audio[0].play();
                this.ent.unshift(new Missle(this.player.poz))
                setTimeout(() => {
                    this.control.coolDown = false;
                }, 1000)
            }
        }
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.drawBackground();
        this.drawPlayer();
        this.ent.forEach(el => {
            if (el.type == 15) {
                this.ctx.drawImage(this.assets[1], el.sprite[0].x, el.sprite[0].y, el.sprite[1].x, el.sprite[1].y, el.poz.x, el.poz.y, el.wit.x, el.wit.y);
            }
        })
        this.ent.forEach(el => {
            if (el.type != 15)
                this.drawObject(el.poz, el.sprite[0], el.sprite[1], el.direction)
            el.update();
        })
        this.ent.forEach((el, i) => {

            switch (el.type) {
                case 1:
                    if (el.poz.y < 0) {
                        this.ent.splice(i, 1)
                        return 0;
                    }
                    for (let y = 0; y < 6; y++) {

                        let id1 = el.id;
                        // console.log('1', el.poz, el.wit)
                        let toCheck = [...this.ent];
                        // console.log(el.poz, el.wit)
                        toCheck.splice(i, 1);

                        for (let x = 0; x < toCheck.length; x++) {
                            if (toCheck[x].type > 1 && toCheck[x].check({ x: el.poz.x, y: el.poz.y - y }, el.wit)) {
                                let ind = this.ent.findIndex(el => el.id == toCheck[x].id)
                                // toCheck[x].check(el.poz, el.wit);
                                // console.log(ind)
                                this.ent.splice(ind, 1)
                                let in1 = this.ent.findIndex(el => id1 == el.id)
                                this.ent.splice(in1, 1);
                                switch (toCheck[x].type) {
                                    case 2:
                                        this.player.score += 20;
                                        break;
                                    case 3:
                                        this.player.score += 10;
                                        break;
                                    case 4:
                                        this.player.score += 40;
                                        break;
                                    case 5:
                                        this.player.score += 100;
                                        break;
                                    case 6:
                                        this.player.score += 30;
                                        break;
                                }
                                break;
                            }
                        }
                    }
                    break;
                case 2:
                    if (el.zm) {
                        let z: poz = el.sprite[0];
                        el.sprite[0] = el.sprite[2];
                        el.sprite[2] = z;
                        el.zm = false;
                        setTimeout(() => el.zm = true, 200)
                    }
                // console.log(el.zm)
                case 3:
                    if (el.check(this.player.poz, this.player.sprites[0][1])) {
                        this.kill_player();
                        return 0;
                    }
                    if (el.time == 0) {
                        let chk = true;
                        if (el.direction != -2) {
                            el.poz.x += 1;
                            //variables.game.level[blok % variables.game.level.length][z][0]
                            // let chk = true;
                        } else {
                            el.poz.x += -1;
                        }
                        for (let z = 0; z < 3; z++)
                            for (let x = 0; x < variables.game.level[(el.blok + z) % variables.game.level.length].length; x++) {
                                // console.log(variables.game.level[el.blok % variables.game.level.length][x])
                                if (variables.game.level[(el.blok + z) % variables.game.level.length][x][0] + 15 < el.poz.x
                                    && variables.game.level[(el.blok + z) % variables.game.level.length][x][0]
                                    + variables.game.level[(el.blok + z) % variables.game.level.length][x][1] - 40 > el.poz.x + el.wit.x
                                ) {
                                    chk = false;
                                }

                            }
                        if (chk) {
                            if (el.direction != -2)
                                el.direction = -2;
                            else
                                el.direction = 1;
                        }
                    } else el.time--;
                case 4:
                    if (el.type == 4) {
                        if (el.direction == -2)
                            el.poz.x += -4;
                        else
                            el.poz.x += 4
                        if (el.poz.x > 1130)
                            el.poz.x = -30;
                        if (el.poz.x < -40) {
                            el.poz.x = 1120;
                        }
                    }
                    if (el.poz.y > 900) {
                        this.ent.splice(i, 1)
                        return 0;
                    }
                case 5:
                    if (el.check(this.player.poz, this.player.sprites[0][1])) {
                        this.kill_player();
                        return 0;
                    }
                    el.vertical_speed = this.game_speed;
                    break;
                case 6:
                    if (el.check(this.player.poz, this.player.sprites[0][1])) {
                        if (this.player.fuel < 100)
                            this.player.fuel += 0.55;
                        if (this.player.fuel > 100)
                            this.player.fuel = 100;
                    }
                    el.vertical_speed = this.game_speed;
                    break;
                default:
                    el.vertical_speed = this.game_speed;
                    break;
            }

        })
        // console.log(this.player.fuel)
        this.player.fuel -= 0.05;
        this.curr_y += this.game_speed;
        this.drawHud();
        this.chFuel();
        this.drawPlayer();
        if (!variables.game.pause && variables.game.start)
            window.requestAnimationFrame((t) => this.refresh(t))

    }
}