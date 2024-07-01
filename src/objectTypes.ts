function greet(person:{name:string,age:number}){
   return "Hello"+person.name;
}

interface Person{
    name:string;
    age?:number;
}
type  Human={
    name:string;
    age:number;
}
function intro(person:Person|Human){
  return "My name is "+person.name +" of years "+person.age;
}

console.log(intro({name:"Megha"}));

//in destrcuturing we cannot placetype annotations
// function introduction({name:string})

//readonly(it cannot be reassigned but inner contents can be changed)
interface Sometype{
    readonly prop: string;
}
function doSomething(obj:Sometype){
    console.log(`prop has value '${obj.prop}'`);
    // obj.prop="red";//error as prop is readonly

}

//when we don't know properties of obj but know its type
//we use index signature
declare function getStringArray(): StringArray;
interface StringArray{
  [index : number]:string;
}
const myArray:StringArray=getStringArray();
const secondItem = myArray[1];

interface NumberDictionary{
    [index: string]:number;
    length:number;
    // name:string; we have to specify same return type also
}
interface NumberOrStringDictionary{
    [index:string]:number | string;
    length:number,
    name:string,
    0:string
}

//readonly indices
declare function getReadOnlyStringArray(): ReadonlyStringArray; 
interface ReadonlyStringArray {
    readonly [index:number]:string;
}

let myArray1: ReadonlyStringArray =getReadOnlyStringArray();
// myArray1[2]="mallloey";  not allowed as it is readonly

interface SquareConfig{
   color?:string;
   width?:number;
   [propName:string]:any
}

function createSquare(config:SquareConfig):{color:string,area:number}{
    return {
        color:config.color||"red",
        area:config.width?config.width * config.width:20
    }
}
// let mySquare = createSquare({colour:"red",width:100})//excess property check
let mySquare = createSquare({width:100,opacity:0.5} as SquareConfig);
let mySq=createSquare({colour:"red",width:100})