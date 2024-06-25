"use strict";
//primitive types(string,number,boolean)
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Megha";
const age = 10;
const isAdult = true;
const salary = 10000000;
//array
const arr = [1, 3];
arr.push(33);
const fruits = [];
fruits.push("apple", "orange", "banana");
//any
let obj = { x: 0 }; // it assumes obj:{x:number}--- so not assign implicit any
obj.x;
//does not geneerate any error
//The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
//noImplicitAny -- used when we don't want any type to be implicitely set as any
function add(num) {
    if (!num)
        return "hdhdhdhhd";
    return num += 1;
}
//# sourceMappingURL=types.js.map