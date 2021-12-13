import TestButton from "./TestButton";

export default class HtmlElements {
    public canvas: HTMLCanvasElement;
    public imgs: Array<HTMLImageElement> = [];
    public adis: Array<HTMLAudioElement> = [];
    public startGame: Function;
    sA: () => void;

    constructor(private root: HTMLElement) {
        this.initCanvas();
    }
    private initCanvas = async () => {
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'canvas'

        this.canvas.width = 1100
        this.canvas.height = 1100
        this.root.appendChild(this.canvas);
        await this.createImages()
        await this.createAudio()
        this.initMenu();
    }
    private createAudio = async () => {
        let divAduio = document.createElement('div');
        divAduio.id = "bast"
        let toLoad = [
            'pew.mp3'
        ]
        // console.log(new Date().getMilliseconds())
        for (let x = 0; x < toLoad.length; x++)
            this.adis.push(await this.awaitAudio(toLoad[x]))
        // let img = await this.awaitImage(toLoad[0])
        // console.log(new Date().getMilliseconds())
        console.log(this.adis)
        // divImages.style.zIndex = '-1';
        divAduio.style.display = 'none'
        for (let x = 0; x < toLoad.length; x++)
            divAduio.append(this.adis[x])
        console.log(divAduio)
        document.body.append(divAduio)
        return true;
    }
    private createImages = async () => {
        let divImages = document.createElement('div');
        divImages.id = "assets"
        let toLoad = [
            'logo.png', 'spritesheet.png'
        ]
        // console.log(new Date().getMilliseconds())
        for (let x = 0; x < toLoad.length; x++)
            this.imgs.push(await this.awaitImage(toLoad[x]))
        // let img = await this.awaitImage(toLoad[0])
        // console.log(new Date().getMilliseconds())
        console.log(this.imgs)
        // divImages.style.zIndex = '-1';
        divImages.style.display = 'none'
        for (let x = 0; x < toLoad.length; x++)
            divImages.append(this.imgs[x])
        // console.log(this.imgs[0])
        document.body.append(divImages)
        return true;
    }
    public initMenu = () => {
        let menu = document.createElement('div');
        // menu.style.zIndex = 'auto'
        menu.style.alignSelf = 'center'
        menu.style.display = 'block'
        // menu.style.width = '300px'
        // menu.style.height = '100px'
        let logo = this.imgs[0].cloneNode();

        menu.style.backgroundColor = 'orange';
        menu.style.position = 'absolute'
        let extension = (): void => {
            
            menu.remove();
            this.sA();
            setTimeout(() => {
                this.startGame();
            }, 0)
            // this.startGame();
        }
        new TestButton(menu, extension, 'graj')

        // menu.onmouseenter = () => {
        //     menu.style.backgroundColor = 'green'
        // }
        // menu.onmouseleave = () => {
        //     menu.style.backgroundColor = 'orange'
        // }
        this.root.append(menu)
    }
    private awaitAudio = async (src: string): Promise<HTMLAudioElement> => {
        let audio = new Audio();
        audio.src = "./mus/" + src;
        audio.title = src;
        return new Promise((resolve, reject) => {
            resolve(audio)
        })
    }
    private awaitImage = async (src: string): Promise<HTMLImageElement> => {
        let img = new Image()
        img.src = "./gfx/" + src
        img.title = src
        return new Promise((resolve, reject) => {
            img.onload = () => resolve(img)
        })
    }
}