/**
 Control Statements--Control statements are used to control the flow of execution of a program based on conditions or loops.

 Uses
Decision making
Repeating tasks
Controlling program logic
Handling different conditions
Improving code efficiency

Types of Control Statements--
There are 3 main types:
Conditional Statements
Looping Statements
Jump Statements

1. Conditional Statements--
Used to execute code based on conditions (true/false).
Types:
if--Syntax
if(condition){
     code
}

if-else-syntax
if(condition){
     code
}else{
     code
}

else if
switch
Ternary operator

switch Statement--
let day = 2;

switch(day){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("Invalid");
}


 */

// 1. Check Even or Odd
let num = 5;

if(num % 2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}

// 2. Check Positive or Negative
let num1 = -10;

if(num1 > 0){
    console.log("Positive");
}else{
    console.log("Negative");
}

let day = 2;

switch(day){
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("Invalid");
}

// Check Positive, Negative, or Zero
let num5 = 5;

if(num5 >= 0){
    if(num5 === 0){
        console.log("Zero");
    }else{
        console.log("Positive");
    }
}else{
    console.log("Negative");
}

// 2. Find Largest of Three Numbers
let a = 10, b = 20, c = 15;

if(a > b){
    if(a > c){
        console.log("A is largest");
    }else{
        console.log("C is largest");
    }
}else{
    if(b > c){
        console.log("B is largest");
    }else{
        console.log("C is largest");
    }
}

// 3. Check Leap Year
let year = 2024;

if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            console.log("Leap Year");
        }else{
            console.log("Not Leap Year");
        }
    }else{
        console.log("Leap Year");
    }
}else{
    console.log("Not Leap Year");
}

// Check Voting Eligibility with Gender
let age = 20;
let gender = "Female";

if(age >= 18){
    if(gender === "Female"){
        console.log("Eligible (Female)");
    }else{
        console.log("Eligible (Male)");
    }
}else{
    console.log("Not Eligible");
}

// Grade System
let marks = 85;

if(marks >= 50){
    if(marks >= 75){
        console.log("Distinction");
    }else{
        console.log("Pass");
    }
}else{
    console.log("Fail");
}

// Check Even/Odd and Positive/Negative
let num6 = -4;

if(num6 >= 0){
    if(num6 % 2 === 0){
        console.log("Positive Even");
    }else{
        console.log("Positive Odd");
    }
}else{
    if(num6 % 2 === 0){
        console.log("Negative Even");
    }else{
        console.log("Negative Odd");
    }
}

