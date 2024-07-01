"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function padLeft(padding, input) {
    if (typeof padding === "number") { // typeguard
        return " ".repeat(padding) + input;
    }
    return padding + input;
}
// typeof type guards
//In TypeScript, checking against the value returned by typeof is a type guard.
//typeof returns 
// "string"
// "number"
// "bigint"
// "boolean"
// "symbol"
// "undefined"
// "object"
// "function"
//Truthy Narrowing ( && || !)
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
    }
}
//Equality Narrowing(===,!==,==,!=)
function example(x, y) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
function multiplyValue(num, factor) {
    if (num.value != null) { //checks for both undefined and null
        console.log(num.value);
        num.value *= factor;
    }
}
function move(animal) {
    if ("swim" in animal) {
        // return animal.swim();
        animal;
    }
    else {
        // return animal.fly();
        animal;
    }
}
//instanceof narrowing
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
//assignments (assignability is always checked against the declared type.)
let x = Math.random() < 0.5 ? 10 : "Hello world";
x = 1;
console.log(x);
x = "goodbye";
console.log(x);
//control flow analysis
function exampple() {
    let x;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x);
    }
    else {
        x = 100;
        console.log(x);
    }
    return x;
}
//type predicates(parameterName is Type)
function isFish(pet) {
    return pet.swim !== undefined;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            return shape.sideLength;
        // const _exhaustiveCheck:never = shape;
        // return _exhaustiveCheck;//assign the shape to never will not raise an error
    }
}
//# sourceMappingURL=narrowing.js.map