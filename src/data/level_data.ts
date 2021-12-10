//width: 1100
//height: 900
//blk: 25
//scr: 36
let src = Math.floor(900 / 25) + 1
function straight(scr: number, str: number, widt: number) {
    let tab: Array<Array<number>> = [];
    if (scr >= 1)
        for (let z = 0; z < scr; z++)
            for (let x = 0; x < src; x++) {
                tab.push([str, widt])
            }
    else if (scr > 0)
        for (let x = 0; x < src * scr + 1; x++) {
            tab.push([str, widt])
        }
    else
        tab.push([str, widt])
    return tab;
}
function left(str: number, widt: number, to: number, towidt: number, angl: number = 25) {
    let tab: Array<Array<number>> = [];
    let mvs = Math.floor((str - to) / angl) + 1;
    for (let x = 1; x < mvs; x++) {
        tab.push([str - angl * x, widt])
    }
    return tab;
}
function right(str: number, widt: number, to: number, towidt: number, angl: number = 25) {
    let tab: Array<Array<number>> = [];
    let mvs = Math.floor((to - str) / angl) + 1;
    for (let x = 1; x < mvs; x++) {
        tab.push([str + angl * x, widt])
    }
    return tab;
}
// function junkction(str)
// let straigt = [
//     [300, 500],

// ]




let level: number[][] = [
    // ...straight(0, 100, 500)
    ...straight(0.25, 300, 500),
    ...left(300, 500, 50, 500, 25),
    ...right(50, 500, 300, 500),
    ...straight(0.5, 300, 500),
    ...left(300, 500, 50, 500, 25),
    ...straight(0.25, 50, 500),
    ...right(50, 500, 300, 500)
]
export { level };