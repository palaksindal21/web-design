/*
OBJECTS---
An object is a collection of key-value pairs, where each key is called a property and can store data or functions.

Uses
Store related data together
Represent real-world entities (user, product, etc.)
Organize complex data
Used in APIs and JSON

Creating Objects-
let obj = {
    key: value
};

Accessing Object Properties-
object.property
object["property"]

Adding & Updating Properties--
object.newKey = value;
object.key = newValue;

Deleting Properties--
delete object.key;

*/

let person = {
    name: "Palak",
    age: 21,
    city: "Indore"
};

console.log(person);

console.log(person.name);
console.log(person["age"]);


let car = {
    brand: "BMW"
};

car.color = "Black";  // add
car.brand = "Audi";   // update

console.log(car);

delete user.age;
console.log(user);

/**
 Object Methods--Functions inside objects are called methods.

 Syntax-
 let obj = {
    methodName: function(){
        // code
    }
};


 */

let student = {
    name: "Palak",
    greet: function(){
        console.log("Hello " + this.name);
    }
};

student.greet();

