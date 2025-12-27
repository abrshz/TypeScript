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


