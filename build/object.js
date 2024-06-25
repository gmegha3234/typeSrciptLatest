"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    id: 1,
    name: "Megha",
    retire: (date) => console.log(date)
};
//union 
function numToStr(num) {
    //narrowing
    if (typeof num === "number") {
        return num = 2.2;
    }
    else {
        return parseInt(num) * 2;
    }
}
numToStr(10);
numToStr('10kg');
//union
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
//typescript stop us from using null and undefined values
function greet(name) {
    if (name)
        console.log(name.toLowerCase());
    else
        console.log("Null value");
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
// if(customer!==null && customer!==undefined)
//Optional property access operator
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=object.js.map