"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type Bear{}  cannot add new properties like this 
function getBear() {
    const bear = {
        name: "Bb",
        sad: true,
        forget: true,
        ignoreMessage: true,
        miss: false,
        talk: false
    };
    return bear;
}
console.log(getBear());
//type assertions
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas')
//Literals
// const x = "hello" as number; //invalid
const y = "hello"; //valid
let x = "hello";
x = "hello";
// x="howdy"; error as x can be assigned value as hello only
// function printText(s:string,alignment:"left"|"right"){
// }
// printText("hello","left");
// printText("G'day","center");
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
console.log(compare("1", "3"));
//# sourceMappingURL=type.js.map