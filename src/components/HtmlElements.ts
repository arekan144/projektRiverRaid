export default class HtmlElements {
    public canvas: HTMLCanvasElement;
    constructor(private root: HTMLElement) {
        this.initCanvas();
    }
    initCanvas = () => {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'canvas'
        this.canvas.width = 900
        this.canvas.height = 800
        this.root.appendChild(this.canvas);
    }
}