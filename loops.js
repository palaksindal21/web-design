/**
 Looping Statements-Used to repeat a block of code multiple times.
 Types:
for-Syntax
for(initialization;condition;increment/decrement){
    code
}

while--
while(condition){
    code
    i++ or i--;
}

do...while--
do{
    code
    i++;
}while(condition);

for...in-


for...of

forEach --forEach() is a method used to iterate over elements of an array and execute a function for each element.


 */

// 1. Print numbers from 1 to 10
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// 2. Print even numbers from 1 to 20
for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// 4. Sum of first N numbers
let n = 5;
let sum = 0;

for(let i = 1; i <= n; i++){
    sum += i;
}

console.log(sum);

// 5. Multiplication table
let num = 5;

for(let i = 1; i <= 10; i++){
    console.log(num * i);
}

// 6. Factorial of a number
let num2 = 5;
let fact = 1;

for(let i = 1; i <= num2; i++){
    fact *= i;
}

console.log(fact);

// 7. Reverse a number
let num3 = 123;
let rev = 0;

while(num > 0){
    let digit = num3 % 10;
    rev = rev * 10 + digit;
    num3 = Math.floor(num3 / 10);
}

console.log(rev);

// 8. Check prime number
let n3 = 7;
let isPrime = true;

for(let i = 2; i < n3; i++){
    if(n3 % i === 0){
        isPrime = false;
        break;
    }
}

// 9. Fibonacci series
let n4 = 5;
let a = 0, b = 1;

for(let i = 1; i <= n4; i++){
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}

// 10. Count digits in a number
let num4 = 12345;
let count = 0;

while(num4 > 0){
    count++;
    num4 = Math.floor(num4 / 10);
}

console.log(count);

