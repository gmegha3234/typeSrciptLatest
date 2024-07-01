"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    return "Hello" + person.name;
}
function intro(person) {
    return "My name is " + person.name + " of years " + person.age;
}
console.log(intro({ name: "Megha" }));
function doSomething(obj) {
    console.log(`prop has value '${obj.prop}'`);
    // obj.prop="red";//error as prop is readonly
}
const myArray = getStringArray();
const secondItem = myArray[1];
//# sourceMappingURL=objectTypes.js.map