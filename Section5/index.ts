
let a: number[] = [1, 2, 3];

let b: string[] = ["Hello", "How are you?", 'How old are you?'];

let c:(string | number | boolean)[] = [1, 'a', 2 , 'c' , true, false, 5 , "3"];

type Airplane = {
    model: string;
    flightNumber: string;
    timeOfDeparture: Date;
    timeOfArrival: Date;
}

type Airplanes = Airplane[]; 

let airplane: Airplanes = [
    {
        model: 'Airbus A380',
        flightNumber: 'A2202',
        timeOfDeparture: new Date(),
        timeOfArrival: new Date()
    }
]

console.log(airplane);

// Tuples 

let person: [string , string , number] = ["John", "Bake" , 24 ];

console.log(person);


type User = [string, string , number , string?];

let user: User = ["Mike", "Taysen", 45 , "miket@gmail.com"];

console.log(user);

// Exercise of the class 

// Question 

// TypeScript:

// Define and create a readOnlyNumbers as a ReadonlyArray<number> initialized with [1, 2, 3, 4, 5]. This array should not be modifiable after creation.

// Define a type alias NumberStringTuple for a tuple that consists of a number and a string.

// Using the NumberStringTuple, create a variable ageNameTuple initialized with [30, "John"], representing a person's age and name.

// Create a read-only tuple readOnlyTuple of type Readonly<NumberStringTuple> initialized with [25, "Jane"]. This tuple should not be modifiable after its creation.

// Answer:- 

let readOnlyNumbers: ReadonlyArray<number> = [1,2,3,4,5];

type NumberStringTuple = [number , string];

let ageNameTuple: NumberStringTuple = [30, 'John'];

let readOnlyTuple: Readonly<NumberStringTuple> = [25 , 'Jane'];


