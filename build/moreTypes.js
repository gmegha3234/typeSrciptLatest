"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Union
function printId(id) {
    // id.lowerCase()// we cannot use functions that are specific to both num and string
    console.log(id.toString());
    //but to use string specific functions
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
    }
}
printId(1);
printId("1 Megha 1");
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    }
    else {
        console.log("Welcome lone traveler" + x);
    }
    console.log(x.slice(0, 3)); //common funs
}
welcomePeople("Megha");
welcomePeople(["Riya", "Ruhi", "Rajan"]);
function printCoord(pt, id) {
    console.log("X-coordinate", pt.x, id);
    console.log("Y-coordinate", pt.y);
    console.log("Id is ", id);
}
printCoord({ x: 10, y: 20 }, "Ru");
function sanitizeInput(str) {
    return str.toUpperCase();
}
const str = sanitizeInput("new input");
console.log(str);
//# sourceMappingURL=moreTypes.js.map