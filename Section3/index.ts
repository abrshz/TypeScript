
let firstName: string = 'Abraham';

firstName = "123";

console.log(firstName);

function multipleByTwo(num: unknown){
    if(typeof num === "number"){
        return num * 2;
    }
    return "Please provide a valid number";
}


console.log(multipleByTwo(4));


// Type Alias 

type CustomString = string;
type CustomNumber = number;
type CustomDate = Date;
type CustomSymbol = Symbol;

let lastName: CustomString = 'Simon';
let age: CustomNumber = 36;
let today: CustomDate = new Date();
let unique: CustomSymbol = Symbol();

console.log(lastName);

// Duck typing 

function addNumbers(a:number , b:number){
    return a + b;
}

let resultFunction = addNumbers(10,23);

console.log(resultFunction);

// Union types 

type StringOrNumber = string | number;
type NumberOrUndefined = number | undefined;

let stringOrNumber: StringOrNumber = "123";
console.log(typeof stringOrNumber);

function print(input: string | undefined){
    if(input){
        console.log(input);
    }else{
        console.log("Please input something to print");
    }
}

print;
console.log(print("Hello world!"));

// Conditional types 

type TypeSting = CustomString extends string ? true : false;
type ConditionalNumber = CustomDate extends Date ? number : string;
type DataAssignment = CustomDate extends Date ? Date : undefined;



// Type casting 

let middleName = <any> "Haile";
let nickName = "Mike" as any;


