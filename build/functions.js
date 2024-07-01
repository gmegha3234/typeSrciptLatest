"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(fn) {
    fn("Hello, world");
}
function printToConsoles(s) {
    console.log(s);
}
greeter(printToConsoles);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
function myFunction(someArgs) {
    return someArgs > 3;
}
myFunction.description = "default description";
doSomething(myFunction);
function fn(ctor) {
    return new ctor('hello');
}
function firstElement(arr) {
    return arr[0];
}
const s = firstElement(["a", "b", "c"]);
const n = firstElement([1, 2, 3]);
const u = firstElement([]);
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
//# sourceMappingURL=functions.js.map