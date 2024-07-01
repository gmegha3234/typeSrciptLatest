interface Point{
    x:number;
    y:number;
}
function printCoord(pt: Point){
    console.log("X-coordinate",pt.x);
    console.log("Y-coordinate",pt.y);
}
printCoord({x:100,y:100});

//  a type cannot be re-opened to add new properties vs an interface which is always extendable.

interface Animal{
    name:string;
}
//extedning interface
interface Bear extends Animal{
    sad: boolean;
}
//add new fields to existing fields
interface Bear{
    action:string
}
function getBear():Bear{
  const bear:Bear={
    name:"Chuzi Muzi",
    sad:true,
    action:"hit him chundi"
  }
  return bear;
}
const bear = getBear();
console.log(bear);

interface Options{
    width:number
}
// function configure(x: Options | "auto"){
//     //...
// }
// configure({width:100});
// configure("auto");
// configure("automatic");

