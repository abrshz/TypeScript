// Named function 
function intro(name: string, age:number): string{
    return `My name is ${name} and I am ${age} years old.`
}

// Function expression
const intro2 = function(name: string, age: number): string{
     return `My name is ${name} and I am ${age} years old.`
}

// Arrow function 
const intro3 = (name: string, age: number): string | number => {
     return `My name is ${name} and I am ${age} years old.`
}


// 
function intros(name: string, age:number, country?:string): string{
    if(country){
    return `My name is ${name} and I am ${age} years old. I live in ${country}.`

    }
    return `My name is ${name} and I am ${age} years old.`
}

console.log(intros("Mike", 32 , "Eritrea"));

console.log(intros('John', 32));
console.log(intros('Alice', 28, 'Canada')); 


// 

// enum AgeUnit {
//     Years = 'years',
//     Months = 'months',
// };

 const AgeUnit = {
    Years: 'years',
    Months: 'months',
    Days: 'days'
} as const;

// Create a type from the object values
type AgeUnit = (typeof AgeUnit)[keyof typeof AgeUnit];

type GreetingFunction = (greeting:string) => string;

type Person ={ 
    name: string;
    age: number;
    ageUnit: AgeUnit;
    // Greet: function
    greet: GreetingFunction;
};

const person: Person = {
    name: 'Scott',
    age: 30,
    ageUnit: AgeUnit.Years,
    greet: (greeting)=>{
        return `${greeting} ${person.name}`
    }
}

function convertAgeToMonths(person: Person): Person {
    if (person.ageUnit === AgeUnit.Years){
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Months;
    }
    return person;
}

console.log(convertAgeToMonths(person));

const students: string[] = ['Alice', 'Eric', 'Mark' , 'Bab'];

// Map method using arrow function 
students.map((student)=>{
    console.log(student);
})

students.map(function (student){
    console.log(student);
})

// Void and never Types 

function writeToDatabase(value:string):void{
    console.log('Write to a database' , value);
}

function throwError(error:string):never {
throw new Error(error);
};

type check = never extends void ? true : false;
type check2 = void extends never ? true : false;

// Async function 

async function fetchDatabase(id:number):Promise<any>{};

const anotherAsyncFunction = async(): Promise<any> => {};

async function returnString(id:number): Promise<string>{
    return Promise.resolve("String");
}

interface User {
  name: string;
}

async function returnUser(id: number): Promise<User> {
  return { name: 'John' };
}

function multiplyBy(by:number, ... numbers:number[]) {
    return numbers.map((number)=> by * number);
}

console.log(multiplyBy(2,3,4,5,6));


const args = [8 ,5] as const;
const angle = Math.atan2(...args);

const args2: [number,number] = [8 , 5];

// function 
