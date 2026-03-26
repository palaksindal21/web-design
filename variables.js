/*
Variables-- Variables are containers used to store data values that can be used and modified during program execution.

Uses
Store user input
Perform calculations
Reuse values multiple times
Control program flow
Store dynamic data (API responses, form values)

Types of Variables--
1. var--
Old method
Function-scoped
Can be redeclared

2. let--
Block-scoped
Can be updated
Cannot be redeclared in same scope

3.const--
Block-scoped
Cannot be updated (constant)

Rules for Naming Variables
Must start with letter, _, or $
Cannot start with number
Case-sensitive (name ≠ Name)
Cannot use reserved keywords
*/

var a = 10;
let name = "Palak";
const pi = 3.14;

let age = 21;
let isStudent = true;
let city = "Indore";

// Print Variable Values
console.log("Name:", name);
console.log("Age:", age);

// Change Variable Value
let score = 50;
score = 80;

console.log(score);

// Constant Variable
const country = "India";
// country = "USA"; Error

console.log(country);

// Swap Two Variables
let num1 = 5;
let num2 = 10;

[num1,num2] = [num1,num2];

console.log(num1, num2);


// Multiple Variables
let x = 10, y = 20, z = 30;
console.log(x + y + z);


