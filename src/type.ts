type Animal ={
    name:string
}
type Bear = Animal & {
    talk:boolean,
    sad:boolean,
    ignoreMessage:boolean,
    forget:boolean
    miss:boolean
}
// type Bear{}  cannot add new properties like this 
function getBear(){
  const bear:Bear={
    name:"Bb",
    sad:true,
    forget:true,
    ignoreMessage:true,
    miss:false,
    talk:false

  }
  return bear
}
console.log(getBear());

//type assertions
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas')

//Literals
// const x = "hello" as number; //invalid
const y ="hello" as any as number;//valid

let x:"hello"="hello";
x="hello";
// x="howdy"; error as x can be assigned value as hello only

// function printText(s:string,alignment:"left"|"right"){

// }
// printText("hello","left");
// printText("G'day","center");

function compare(a:string,b:string):-1|0|1{
  return a === b ? 0: a >b ?1:-1
}
console.log(compare("1","3"));

