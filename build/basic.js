"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const messages = "Hello message";
function flipCoin() {
    return Math.random() * 2.2;
}
const value = Math.random() > 5 ? "a" : "b";
if (value === "a")
    console.log("value is not equal to a");
else if (value == "b")
    console.log("value is wwwnot equal to a");
function greeting(person, date) {
    console.log(`Hello,${person} today is ${date.toLocaleDateString()}`);
}
greeting("Megha", new Date());
//noEmitOnError- stops js to be produced if ts finds error.
let color = "red";
loggedUser = "Megha";
const users = [
    { name: "Megha", age: 3 },
    { name: "Rahul", age: 8 }
];
const loggedUserDetails = users.find((u) => u.name === loggedUser);
console.log(loggedUserDetails === null || loggedUserDetails === void 0 ? void 0 : loggedUserDetails.age);
//# sourceMappingURL=basic.js.map