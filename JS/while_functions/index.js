for (let i = 100; i >= 1; i--) {
  //   console.log(i);
}

// WHile
let j = 100;
while (j >= 1) {
  console.log(j);
  j--;
}

// J=1
// j=2
// j=99
// j=100
// j=101

let options = prompt("Select an option: 1-10");
// Type Casting
options = Number(options);

while (options > 10) {
  options = prompt("Incorrect Option, Again enterr");
  options = Number(options);
}

// Logical Expressions

// And Gate / Operator
// true and false= false
// true and true= true
// false and true=false
// false and false=false

// true && true && true && true = true
// true && true && false && true = false

// Or gate/ operator
// true or false= true
// false or false=false

//  true || false || false || false = true

// Not
// true=false
// false =true

// not true= false
// !fale= true

let num1 = 23;
let exp1 = num1 > 2;
let exp2 = num1 < 20; //false

console.log(exp1 || exp2);
console.log(!exp1);

let resident = "Pakistan";
let age = 2;

let nadraExp1 = resident == "Pakistan";
let nadraExp2 = age >= 18;

if (nadraExp1 && nadraExp2) {
  alert("You are selected");
} else {
  alert("Your are rejected");
}

// Not
let religion = "parsi";

if (!(religion == "christianity")) {
  console.log("I am not christian");
}

let name1 = "Ali";
let name2 = "Zeehs";
let name3 = "Asad";
let name500 = "Asad";

// Arrays
// 0      1     2           3
let names = ["Ali", "Asad", "Kashif", "Arfa"];
console.log(names[3]);
console.log(names.length);
console.log(names.indexOf("Asad"));

// Functions

function sayHello() {
  console.log("Hello User");
}

sayHello();

// Make a function that takes age from user and check its eligibility >=18