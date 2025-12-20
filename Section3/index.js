"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = 'Abraham';
firstName = "123";
console.log(firstName);
function multipleByTwo(num) {
    if (typeof num === "number") {
        return num * 2;
    }
    return "Please provide a valid number";
}
console.log(multipleByTwo(4));
let lastName = 'Simon';
let age = 36;
let today = new Date();
let unique = Symbol();
console.log(lastName);
// Duck typing 
function addNumbers(a, b) {
    return a + b;
}
let resultFunction = addNumbers(10, 23);
console.log(resultFunction);
let stringOrNumber = "123";
console.log(typeof stringOrNumber);
function print(input) {
    if (input) {
        console.log(input);
    }
    else {
        console.log("Please input something to print");
    }
}
print;
console.log(print("Hello world!"));
//# sourceMappingURL=index.js.map