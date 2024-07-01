//Union
function printId(id: number | string) {
    // id.lowerCase()// we cannot use functions that are specific to both num and string
    console.log(id.toString());
    //but to use string specific functions
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {

    }
}
printId(1);
printId("1 Megha 1");

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    } else {
        console.log("Welcome lone traveler" + x);
    }
    console.log(x.slice(0, 3));//common funs
}
welcomePeople("Megha");
welcomePeople(["Riya", "Ruhi", "Rajan"]);

//Type Aliases
type Point = {
    x: number,
    y: number
}
type Id = number | string;

function printCoord(pt: Point, id: Id) {
    console.log("X-coordinate", pt.x, id);
    console.log("Y-coordinate", pt.y);
    console.log("Id is ", id);
}

printCoord({ x: 10, y: 20 }, "Ru");

type SanitizedString= string;

function sanitizeInput(str:string):SanitizedString{
     return str.toUpperCase();
}

const str=sanitizeInput("new input");
console.log(str);
