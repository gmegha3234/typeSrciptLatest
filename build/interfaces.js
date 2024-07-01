"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printCoord(pt) {
    console.log("X-coordinate", pt.x);
    console.log("Y-coordinate", pt.y);
}
printCoord({ x: 100, y: 100 });
function getBear() {
    const bear = {
        name: "Chuzi Muzi",
        sad: true,
        action: "hit him chundi"
    };
    return bear;
}
const bear = getBear();
console.log(bear);
// function configure(x: Options | "auto"){
//     //...
// }
// configure({width:100});
// configure("auto");
// configure("automatic");
//# sourceMappingURL=interfaces.js.map