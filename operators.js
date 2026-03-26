/*
OPERATORS-
Operators are symbols used to perform operations on variables and values.

Uses
Perform calculations
Compare values
Apply conditions
Control program logic
Manipulate data

Types of Operators
1. Arithmetic Operators-Used for mathematical operations
+ - * / % ** ++ --

2. Comparison Operators-Used to compare values (returns true/false)
== === != !== > < >= <=

3. Logical Operators-Used to combine conditions
&& || !

4. Assignment Operators-Used to assign values
= += -= *= /=

5.Unary Operators-Works with one operand
++ -- typeof

6.Bitwise Operators-Bitwise operators are used to perform operations on the binary (bit-level) representation of numbers.
JavaScript converts numbers into 32-bit integers before applying these operations.
1. Bitwise AND (&)-Returns 1 only if both bits are 1.
2. Bitwise OR (|)-Returns 1 if at least one bit is 1.
3.Bitwise XOR (^)-Returns 1 if bits are different.
4. Bitwise NOT (~)-Flips all bits (0 → 1, 1 → 0)

Shift Operators-Shift operators are bitwise operators that move (shift) the bits of a number left or right.
Numbers are converted into 32-bit binary form before shifting.
Types of Shift Operators-
1. Left Shift (<<)-Shifts bits to the left, adding zeros on the right.
 Equivalent to multiplying by 2ⁿ
2. Right Shift (>>)-Shifts bits to the right, preserving the sign bit.
Equivalent to dividing by 2ⁿ

Unsigned Right Shift (>>>)-Shifts bits to the right and fills left side with 0, ignoring sign.
 Always returns a positive number



*/
let a = 10;
let b = 5;
console.log("Arithmetic operators")
console.log(a + b);  // Addition
console.log(a - b);  // Subtraction
console.log(a * b);  // Multiplication
console.log(a / b);  // Division
console.log(a % b);  // Modulus

let a1 = 10;
let b1 = "10";
console.log("Comparison operator")
console.log(a1 == b1);   // true
console.log(a1 === b1);  // false

console.log("Logical operator")
let marks = 75;

if(marks > 50 && marks < 100){
    console.log("Pass");
}

let age = 20;

console.log(age > 18 && age < 60);
console.log(age < 18 || age > 60);
console.log(!(age > 18));

console.log("Assignment operator")

let x1 = 20;

x1 *= 2;
console.log(x1);

let a2 = 10;

a2 += 5;  // a = a + 5
console.log(a2);

console.log("Unary Operators")
let x = 5;
x++;
console.log(x);
console.log(typeof x);

console.log("Bitwise operator")

let result = 5 & 1;
console.log(result);
console.log(5 | 1);
console.log(5 ^ 1);
console.log(~5);


console.log("Shift operators")
console.log(5 << 1);   //5  = 00000101  <<1 → 00001010 = 10
console.log(8 >> 1);  //8  = 00001000  >>1 → 00000100 = 4
console.log(-8 >>> 1);  //-8 → converted to unsigned → large positive number

