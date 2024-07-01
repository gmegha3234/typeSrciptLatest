const i = 1
const obj = { counter: 0 };
// equi to {counter:number}
if (i == 1) {
    obj.counter = 1;
}

declare function handleRequest(url: string, method: "GET" | "POST"): void;

//1st way
const req = { url: "https://example.com", method: "GET" as "GET" };
// handleRequest(req.url, req.method as "GET");

const req1 = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req.url, req.method);

function doSomething(x: string | null) {

    if (x == null) { }
    else { console.log("Hello," + x.toUpperCase()) }

    //This can be done simply
    console.log(x!.toUpperCase());
}
const enum Grades { Excellent = 'A', Good = 'B', Bad = 'C' }
let myGrade: Grades = Grades.Good;
console.log(myGrade);

// const enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Medium;
// console.log(mySize);










