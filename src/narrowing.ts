function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {// typeguard
        return " ".repeat(padding) + input;
    }
    return padding + input
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
function printAll(strs: string | string[] | null) {
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
function example(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    } else {
        console.log(x);
        console.log(y);
    }
}

interface Container {
    value: number | null | undefined;
}
function multiplyValue(num: Container, factor: number) {
    if (num.value != null) {//checks for both undefined and null
        console.log(num.value);
        num.value *= factor;
    }
}

//in narrowing
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = {swim?:()=>void, fly?:()=>void};
function move(animal: Fish | Bird | Human) {
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
function logValue(x: Date | string){
   if(x instanceof Date){
    console.log(x.toUTCString());
   }
   else{
    console.log(x.toUpperCase());
   }
}

//assignments (assignability is always checked against the declared type.)
let x = Math.random()< 0.5 ? 10 :"Hello world";
x=1;
console.log(x);
x="goodbye";
console.log(x);

//control flow analysis
function exampple(){
    let x:string | number | boolean;
    x = Math.random() < 0.5;
    console.log(x);
    if (Math.random() < 0.5) {
        x = "hello";
        console.log(x)
    } else {
        x = 100;
        console.log(x);
    }

    return x;
}

//type predicates(parameterName is Type)
function isFish(pet: Fish| Bird):pet is Fish{
  return (pet as Fish).swim !== undefined;
}

//pet is Fish is our type predicate

//never type
//never type is assignable to every type however no type is assignable to never.
interface Circle{
    kind:"circle",
    radius:number
}
interface Square{
    kind:"square",
    sideLength:number
}
interface Triangle{
    kind:"triangle",
    sideLength:number
}
type Shape = Circle | Square | Triangle;

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius **2;
        case "square":
            return shape.sideLength ** 2;
        default:
            return shape.sideLength;
            // const _exhaustiveCheck:never = shape;
            // return _exhaustiveCheck;//assign the shape to never will not raise an error
    }
}
