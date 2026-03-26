/*
FUNCTIONS-- A function is a block of code designed to perform a specific task, which can be reused whenever needed.

Uses
Reuse code (avoid repetition)
Break large programs into smaller parts
Improve readability and maintenance
Perform specific tasks (calculation, validation, etc.)

syntax of function decleration/defination:
------------------------------------------

  function function-name(){
  
     // block of code / statement / body
  }


syntax of function calling:
---------------------------

 function-name()

 there two types of functions are there in javaScript:

 - predefined functions
 - user defined functions

   predefined functions:

   toString();
   isArray();
   indexOf();
   lastIndexOf();
   every();
   short();
   push();
   pop();
   shift();
   unShift();

   user-defined funtions:

   a();
   b();
   dog();
   cat();
   omg();
   info();
   display();
   show();
   check();

   you have to defined user defined functions in two four parts:

   - without return type and without parameters       add()
   - without return type and with parameters          add(a,b)
   - with return type and without parameters          
   - with return type and with parameters

*/
function info(){         /* without return type and without parameters */
 
    alert("i am info")
    
}

info()

// 2. Addition of Two Numbers
function add(a, b){
    return a + b;
}

console.log(add(5, 10));

// 3. Check Even or Odd
function isEven(num){
    return num % 2 === 0;
}

console.log(isEven(4)); // true

// 4. Square of a Number
function square(n){
    return n * n;
}

console.log(square(6));

// 5. Find Maximum of Two Numbers
function max(a, b){
    if (a>b){
        console.log(a+"is maximum")
    }else{
        console.log(b+"is maximum")
    }
    return "hello"
}

console.log(max(10, 20));

// 8. Check Prime Number
function isPrime(n){
    if(n < 2){
        console.log(n+"is not a prime number.")
    }

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            console.log(n+"is not a prime number.");
        }
    }
    return n+"is prime number";
}

console.log(isPrime(7));