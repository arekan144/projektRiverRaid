import HtmlElements from "./HtmlElements"
import Render from "./Renderer";

export default class Main {
    HtmlElements: HtmlElements;
    renderer: Render;
    constructor(root: HTMLElement) {
        console.log(root)
        this.HtmlElements = new HtmlElements(root);
        this.renderer = new Render(this.HtmlElements.canvas, this.HtmlElements.imgs, this.HtmlElements.adis)
        this.HtmlElements.startGame = this.renderer.startGame
        this.HtmlElements.sA = this.renderer.startAnimation;
        window.addEventListener('men', () => {
            this.HtmlElements.initMenu();
        })
    }
}