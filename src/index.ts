import Main from "./components/Main"

window.onload = () => {
    let root: HTMLElement = document.getElementById('root');
    new Main(root);
}
// let tab = [];
// for (let x = 40; x < 2000; x++) {
//     tab.push(duncion(x) * 5);
// }
// function duncion(x: number): number {
//     x = x * 0.01;
//     let pow = Math.sin(x * x);

//     let dunk = Math.floor(Math.pow(Math.E, pow) * 100);

//     dunk /= x + 1
//     dunk -= 0.75
//     dunk *= x * 0.5;


//     dunk %= 100;
//     if (dunk < 0)
//         dunk = -dunk;
//     return Math.floor(dunk);
// }
// // let x1 = duncion(1);
// // console.log(x1)
// console.log(tab)
