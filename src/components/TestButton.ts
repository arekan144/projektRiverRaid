export default class TestButton {
    constructor(to: HTMLElement, fun: Function, str: string) {
        let testButton = document.createElement('div')
        testButton.classList.add('testButton')
        testButton.onmouseenter = () => {
            testButton.style.backgroundColor = 'grey'
            testButton.style.color = 'white'
        }
        testButton.onmouseleave = () => {
            testButton.style.backgroundColor = ''
            testButton.style.color = 'black'
        }
        testButton.onclick = () => { fun() };

        testButton.innerHTML = str;
        to.append(testButton);
    }

}