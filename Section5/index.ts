
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

// console.log(airplane);

// Tuples 

let person: [string , string , number] = ["John", "Bake" , 24 ];

// console.log(person);


type User = [string, string , number , string?];

let user: User = ["Mike", "Taysen", 45 , "miket@gmail.com"];

// console.log(user);

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

// Enum

const STATUS_LOADING = 'loading';
const STATUS_STOPPED = 'stopped';

enum Direction {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);


enum Roles {
    ADMIN = 'admin',
    AUTHOR = 'author',
    EDITOR = 'editor',
}

type Employee = {
    name: string;
    email: string;
    password: string;
    roles: Roles;
}

let employee: Employee = {
    name: 'Abraham',
    email: 'abrsh@gamil.com',
    password: 'Hello!@World!',
    roles: Roles.ADMIN
}

console.log(employee);

console.log(employee.roles);

// Enum with object 

const ODirection = {
    Up: 0,
    Down: 1,
    Left:2,
    Right:3
} as const;

console.log(ODirection.Right);


// Computed enum 

enum AccessPermissions {
    None = 0,
    Read = 1,
    Write = 2,
    ReadWrite = Read + Write,
    Delete = 4,
    All = ReadWrite + Delete,
}

console.log(AccessPermissions.ReadWrite);
console.log(AccessPermissions.All);

// Enums as Unions and Types

enum ShapeKind {
    Circle = 'circle',
    Square = 'square'
}

type Circle = {
    kind : ShapeKind.Circle;
    radius : number;
}

type Square = {
    kind: ShapeKind.Square;
    sideLength: number;
}

let newCircle: Circle = {
    radius: 100,
    kind: ShapeKind.Circle,
}

console.log(newCircle);

let newSquare: Square = {
    sideLength: 10,
    kind: ShapeKind.Square,
}

console.log(newSquare);


// Exercise of Enum 

// In the index.ts file, you are tasked with defining and using Enums in TypeScript:

// Define an Enum named Day to represent the days of the week, where Sunday is 0, Monday is 1, and so on, up to Saturday which is 6.

// Define another Enum named Status for operational statuses, with string values: Pending as "PENDING", InProgress as "IN_PROGRESS", Completed as "COMPLETED", and Cancelled as "CANCELLED".

// Create a variable today of type Day and initialize it as Day.Friday.

// Create a variable currentStatus of type Status and initialize it as Status.InProgress.

// Answer 

enum Day  {
    Sunday = 0,
    Monday = 1,
    Tuesday =2,
    Wednesday =3,
    Thursday = 4,
    Friday = 5,
    Saturday =6, 
}

enum Status {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Cancelled = "CANCELLED",
}

const today: Day = Day.Friday;
const currentStatus: Status = Status.InProgress;

console.log(`Today is day number: ${today}`);
console.log(`The current status is: ${currentStatus}`);







