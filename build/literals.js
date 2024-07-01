"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i = 1;
const obj = { counter: 0 };
// equi to {counter:number}
if (i == 1) {
    obj.counter = 1;
}
//1st way
const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method as "GET");
const req1 = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);
function doSomething(x) {
    if (x == null) { }
    else {
        console.log("Hello," + x.toUpperCase());
    }
    //This can be done simply
    console.log(x.toUpperCase());
}
let myGrade = "B" /* Grades.Good */;
console.log(myGrade);
// const enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Medium;
// console.log(mySize);
//# sourceMappingURL=literals.js.map