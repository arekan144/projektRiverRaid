import { keyboard } from "../data/keyboard"
export default class Control {
    public coolDown: boolean = false;
    constructor() {
        window.onkeydown = (eo) => {
            eo.preventDefault();
            // console.log(eo.code)
            switch (eo.code) {
                case 'KeyA': case 'ArrowLeft':
                    keyboard.lt = true;
                    break;
                case 'KeyW': case 'ArrowUp':
                    keyboard.up = true;
                    break;
                case 'KeyS': case 'ArrowDown':
                    keyboard.bn = true;
                    break;
                case 'KeyD': case 'ArrowRight':
                    keyboard.rt = true;
                    break;
                case 'Space':
                    keyboard.space = true;
                    break;
            }
        }
        window.onkeyup = (eo) => {
            switch (eo.code) {
                case 'KeyA': case 'ArrowLeft':
                    keyboard.lt = false;
                    break;
                case 'KeyW': case 'ArrowUp':
                    keyboard.up = false;
                    break;
                case 'KeyS': case 'ArrowDown':
                    keyboard.bn = false;
                    break;
                case 'KeyD': case 'ArrowRight':
                    keyboard.rt = false;
                    break;
                case 'Space':
                    keyboard.space = false;
                    break;
            }
        }
    }
}



