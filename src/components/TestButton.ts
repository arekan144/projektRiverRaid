export default class TestButton {
    constructor(to: HTMLElement, fun: Function, str: string) {
        let testButton = document.createElement('button')
        testButton.onclick = () => { console.log(fun()) };
        testButton.style.height = '40px';
        testButton.innerHTML = str;
        to.append(testButton);
    }

}