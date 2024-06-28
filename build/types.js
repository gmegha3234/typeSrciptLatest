"use strict";
//primitive types(string,number,boolean)
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return 0;
    return num += 1;
}
add(1);
//TypeScript will infer the function’s return type based on its return statements.
//return promisr
function getFavourite() {
    return __awaiter(this, void 0, void 0, function* () {
        return 28;
    });
}
//anonymous types--This process is called contextual typing because the context
// that the function occurred within informs what type it should have.
const names = ['Alice', 'Denim', 'Jack'];
names.forEach((name) => console.log(name.toUpperCase()));
names.forEach(function (name) {
    console.log(name.toLowerCase());
});
//Object
function printCoordinates(pt) {
    console.log("The coordinates are ", pt.value1, pt.value2);
}
printCoordinates({ value1: 10, value2: 20 });
//# sourceMappingURL=types.js.map