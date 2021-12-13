//width: 1100
//height: 900
//blk: 15
//scr: ?
let blk = 10;
let src = Math.floor(900 / blk) + 1
function straight(scr: number, str: number, widt: number) {
    let tab: any[] = [];
    if (scr >= 1)
        for (let z = 0; z < scr; z++) {
            let d = (Math.random() * 4 - 2) * 7
            for (let x = 0; x < src; x++) {
                tab.push([[str - d, widt + d * 1.25]])
            }
        }
    else if (scr > 0) {

        for (let z = 0; z < 20; z++) {
            let d = (Math.random() * 4 - 2) * 7
            for (let x = 0; x < (src * scr + 1) / 20; x++) {
                tab.push([[str - d * x, widt + d * 2 * x]])
            }
        }
    }
    else {
        let d = (Math.random() * 4 - 2) * 7
        tab.push([str - d, widt + d * 1.5])
    }
    return tab;
}

function mutiplyIt(elemnt: any[], much: number) {
    let tab: any[] = [];
    for (let x = 0; x < much; x++) {
        tab.push(elemnt);
    }
    return tab;
}

function expand(str: number, width: number, to: number, angl: number): any[] {
    let tab: any[] = [];
    let mvs = Math.floor((str - to) / angl) + 2

    for (let x = 1; x < mvs; x++) {
        tab = [...tab, straight(0, str - angl * x, width + 2 * x * angl)]
    }
    return tab;
}
function deexpand(str: number, width: number, to: number, angl: number): any[] {
    let tab: any[] = [];
    let mvs = Math.floor((to - str) / angl) + 1

    for (let x = 1; x < mvs; x++) {
        tab = [...tab, straight(0, str + angl * x, width - 2 * x * angl)]
    }
    return tab;
}
function junction_1(str: number, str_widt: number): any[] {
    // 300, 500
    let tab: any[] = [];
    // let str = 300;
    // let str_widt = 500;
    let mid = 50;
    let mid_widt = 300;
    let angl = 25;
    let o = [...straight(0.5, mid, mid_widt)];
    // let g = [...straight(0.5, mid + mid_widt * 2.3, mid_widt)]
    let m = []
    for (let z = 0; z < o.length; z++) {
        m.push([o[z][0], [o[z][0][0] + mid_widt * 2.3, o[z][0][1]]]);
    }
    console.log(m)
    tab = expand(str, str_widt, mid + angl, angl)
    let last = tab.length - 1;
    tab = [
        ...tab,
        ...mutiplyIt(tab[last], 8),
        [...straight(0, tab[last][0][0] - 5, tab[last][0][1] / 2 - angl * 2), ...straight(0, tab[last][0][0] + tab[last][0][1] / 2 + angl * 2 + 5, tab[last][0][1] / 2 - angl * 2)],
        [...straight(0, tab[last][0][0] + 5, tab[last][0][1] / 2 - angl * 2 * 2), ...straight(0, tab[last][0][0] + tab[last][0][1] / 2 + angl * 2 * 2 - 5, tab[last][0][1] / 2 - angl * 2 * 2)],
        [...straight(0, tab[last][0][0], tab[last][0][1] / 2 - angl * 2 * 3), ...straight(0, tab[last][0][0] + tab[last][0][1] / 2 + angl * 2 * 3 + 5, tab[last][0][1] / 2 - angl * 2 * 3)],
        ...m,
        [...straight(0, tab[last][0][0] + 10, tab[last][0][1] / 2 - angl * 2 * 3), ...straight(0, tab[last][0][0] + tab[last][0][1] / 2 + angl * 2 * 3 + 5, tab[last][0][1] / 2 - angl * 2 * 3)],
        [...straight(0, tab[last][0][0] - 5, tab[last][0][1] / 2 - angl * 2 * 2), ...straight(0, tab[last][0][0] + tab[last][0][1] / 2 + angl * 2 * 2 - 5, tab[last][0][1] / 2 - angl * 2 * 2)],
        [...straight(0, tab[last][0][0] + 5, tab[last][0][1] / 2 - angl * 2), ...straight(0, tab[last][0][0] + tab[last][0][1] / 2 + angl * 2 + 5, tab[last][0][1] / 2 - angl * 2)],
        ...mutiplyIt(tab[last], 8),
        ...deexpand(tab[last][0][0], tab[last][0][1], str, angl)
    ]

    return tab;
}

function brigde() {
    let tab: any[] = [];

    let how_much = Math.floor(110 / blk) + 2
    for (let x = 0; x < how_much; x++) {
        tab.push([...straight(0, 392, 318)])
    }
    // let mid = Math.floor(tab.length - 1 / 2)
    // tab[mid].push([-1004, 0]);
    return [...straight(0.2, 400, 300), ...tab, ...straight(0.2, 400, 300),];
}

// function junkction(str)
// let straigt = [
//     [300, 500],

// ]

// console.log(brigde())


let level: number[][][] = [
    // ...straight(0, 100, 500)

    ...brigde(),
    // ...straight(0.4, 400, 300),
    // straight(0, 500, 500),
    ...junction_1(400, 300),
    ...straight(0.4, 400, 300),

    // ...straight(0.5, 300, 500),
    // ...left(300, 500, 50, 500, 25),
    // ...straight(0.25, 50, 500),
    // ...right(50, 500, 300, 500)
]




console.log(level)
export { level }