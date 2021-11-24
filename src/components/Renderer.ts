import { variables } from "../data/exp";
import TestButton from "./TestButton";
import * as img from './gfx/logo.png';
export default class Render {
    private ctx: CanvasRenderingContext2D
    private status: number = 0;
    constructor(private canvas: HTMLCanvasElement) {
        this.ctx = canvas.getContext('2d');
        // new TestButton(document.body, this.startGame, 'sta')
        // new TestButton(document.body, this.resumeGame, 'res')
        // new TestButton(document.body, this.pauseGame, 'pau')
        this.init();
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
    private startGame = (): boolean => {
        // console.log('start')
        if (variables.game.start)
            return false
        variables.game.start = true;
        this.refresh(0);
        return true;
    }
    private init = () => {
        if (this.ctx) {
            this.mainMenu();
        }
        // this.refresh(0);
    }
    private mainMenu = async () => {
        let logo = new Image();

        console.log(img)
        this.status = 1;
        this.ctx.fillStyle = 'lightGrey'
        this.ctx.fillRect(50, 50, 800, 700)

        // this.ctx.fillRect(25, 25, 100, 100);
        // this.ctx.clearRect(45, 45, 60, 60);
        // this.ctx.fillStyle = 'green'
        // this.ctx.strokeStyle = 'green'
        // this.ctx.strokeRect(25, 25, 100, 100);
    }
    private refresh = (time: number) => {
        console.log(time);
        if (!variables.game.pause)
            window.requestAnimationFrame((t) => this.refresh(t))
    }
}