//type aliases
type Employee={
    readonly id:number,
    name:string,
    retire:(date:Date)=>void
}
let employee:Employee={
  id:1,
  name:"Megha",
  retire: (date) => console.log(date)
}
//union 
function numToStr(num:number | string): number{
    //narrowing
    if(typeof num === "number"){
       return num = 2.2;
    }
    else{
       return parseInt(num)*2;
    }
}
numToStr(10);
numToStr('10kg');


//union
let weight: number | string ;

type Draggable={
    drag:()=>void
}
type Resizeable={
   resize:()=>void
}
//intersection
type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
   drag :()=> {},
   resize:()=>{}
}

//literal(exact, specific)
type Quantity=50|100;
let quantity:Quantity=100;

type Metric='cm' | 'inch';

//typescript stop us from using null and undefined values
function greet(name:string | null){
    if(name)
       console.log(name.toLowerCase());
    else
      console.log("Null value");
}
greet(null);

type Customer={
    birthday:Date
}
function getCustomer(id:number):Customer|null|undefined{
  return id===0?null:{birthday:new Date()}
}
let customer=getCustomer(0);
// if(customer!==null && customer!==undefined)
//Optional property access operator

console.log(customer?.birthday);

let log:any =null;
log?.('a');

