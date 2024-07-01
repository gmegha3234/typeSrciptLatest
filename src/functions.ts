function greeter(fn:(a:string)=>void){
    fn("Hello, world")
}
function printToConsoles(s:string){
    console.log(s);
}
greeter(printToConsoles);

type GreetFunction = (a:string)=>void;

type DescribableFunction={
    description:string;
    (someArgs:number):boolean;
}
function doSomething(fn:DescribableFunction){
    console.log(fn.description+" returned "+fn(6));
    
}
function myFunction(someArgs:number){
    return someArgs > 3;
}
myFunction.description = "default description";
doSomething(myFunction);

type SomeObject = any;
type SomeCons={ new (s:string):SomeObject}
function fn(ctor:SomeCons){
    return new ctor('hello');
}

function firstElement<Type>(arr : Type[]):Type | undefined{
    return arr[0];
}
const s = firstElement(["a","b","c"]);
const n = firstElement([1,2,3]);
const u = firstElement([]);

function map<Input,Output>(arr:Input[],func:(arg:Input)=>Output):Output[]{
    return arr.map(func);
}
const parsed = map(["1","2","3"],(n)=>parseInt(n));
