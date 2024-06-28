const messages = "Hello message";
function flipCoin() {
    return Math.random() * 2.2;
}

const value = Math.random() > 5 ? "a" : "b";
if (value === "a")
    console.log("value is not equal to a");
else if (value == "b")
    console.log("value is wwwnot equal to a");

function greeting(person: string, date: Date) {
    console.log(`Hello,${person} today is ${date.toLocaleDateString()}`)
}
greeting("Megha", new Date());
//noEmitOnError- stops js to be produced if ts finds error.

let color = "red";
// color = 1;// not allow even if type is not set ts bydefault assume type

declare let loggedUser:string
loggedUser="Megha";
const users=[
    {name:"Megha",age:3},
    {name:"Rahul",age:8}
];
const loggedUserDetails = users.find((u)=>u.name===loggedUser);
console.log(loggedUserDetails?.age);

