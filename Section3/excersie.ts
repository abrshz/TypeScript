let city = "New York"; // string
let population = 8400000; // number
const age = 32; // 32
let oldAge = 79 as const; //79
let newAge = oldAge; //79
let data = new Map(); //Map type 
let score = [90, 86, 100]; //number of arrays []
type Primitive = string | number | boolean; // 
type CustomName = "John" extends string ? string : "John"; //string
type CustomAge = typeof newAge extends number ? 79 : number; //79
type CheckData = typeof data extends Object ? true : false; // true because it's object
type CheckScore = typeof score extends never ? {} : []; //array

/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */

// age = 85; //Can't reassign 
score.push(10);
// score.push("New Score"); // Argument of type 'string' is not assignable to parameter of type 'number'
// let customAge: CustomAge = 50; // Type '50' is not assignable to type '79'
// let primitive: Primitive = new Date(); //Type 'Date' is not assignable to type 'Primitive'.
let years: CheckScore = [];