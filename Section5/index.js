"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = [1, 2, 3];
let b = ["Hello", "How are you?", 'How old are you?'];
let c = [1, 'a', 2, 'c', true, false, 5, "3"];
let airplane = [
    {
        model: 'Airbus A380',
        flightNumber: 'A2202',
        timeOfDeparture: new Date(),
        timeOfArrival: new Date()
    }
];
// console.log(airplane);
// Tuples 
let person = ["John", "Bake", 24];
let user = ["Mike", "Taysen", 45, "miket@gmail.com"];
// console.log(user);
// Exercise of the class 
// Question 
// TypeScript:
// Define and create a readOnlyNumbers as a ReadonlyArray<number> initialized with [1, 2, 3, 4, 5]. This array should not be modifiable after creation.
// Define a type alias NumberStringTuple for a tuple that consists of a number and a string.
// Using the NumberStringTuple, create a variable ageNameTuple initialized with [30, "John"], representing a person's age and name.
// Create a read-only tuple readOnlyTuple of type Readonly<NumberStringTuple> initialized with [25, "Jane"]. This tuple should not be modifiable after its creation.
// Answer:- 
let readOnlyNumbers = [1, 2, 3, 4, 5];
let ageNameTuple = [30, 'John'];
let readOnlyTuple = [25, 'Jane'];
// Enum
const STATUS_LOADING = 'loading';
const STATUS_STOPPED = 'stopped';
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["AUTHOR"] = "author";
    Roles["EDITOR"] = "editor";
})(Roles || (Roles = {}));
let employee = {
    name: 'Abraham',
    email: 'abrsh@gamil.com',
    password: 'Hello!@World!',
    roles: Roles.ADMIN
};
console.log(employee);
console.log(employee.roles);
// Enum with object 
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
};
console.log(ODirection.Right);
// Computed enum 
var AccessPermissions;
(function (AccessPermissions) {
    AccessPermissions[AccessPermissions["None"] = 0] = "None";
    AccessPermissions[AccessPermissions["Read"] = 1] = "Read";
    AccessPermissions[AccessPermissions["Write"] = 2] = "Write";
    AccessPermissions[AccessPermissions["ReadWrite"] = 3] = "ReadWrite";
    AccessPermissions[AccessPermissions["Delete"] = 4] = "Delete";
    AccessPermissions[AccessPermissions["All"] = 7] = "All";
})(AccessPermissions || (AccessPermissions = {}));
console.log(AccessPermissions.ReadWrite);
console.log(AccessPermissions.All);
// Enums as Unions and Types
var ShapeKind;
(function (ShapeKind) {
    ShapeKind["Circle"] = "circle";
    ShapeKind["Square"] = "square";
})(ShapeKind || (ShapeKind = {}));
let newCircle = {
    radius: 100,
    kind: ShapeKind.Circle,
};
console.log(newCircle);
let newSquare = {
    sideLength: 10,
    kind: ShapeKind.Square,
};
console.log(newSquare);
// Exercise of Enum 
// In the index.ts file, you are tasked with defining and using Enums in TypeScript:
// Define an Enum named Day to represent the days of the week, where Sunday is 0, Monday is 1, and so on, up to Saturday which is 6.
// Define another Enum named Status for operational statuses, with string values: Pending as "PENDING", InProgress as "IN_PROGRESS", Completed as "COMPLETED", and Cancelled as "CANCELLED".
// Create a variable today of type Day and initialize it as Day.Friday.
// Create a variable currentStatus of type Status and initialize it as Status.InProgress.
// Answer 
var Day;
(function (Day) {
    Day[Day["Sunday"] = 0] = "Sunday";
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
})(Day || (Day = {}));
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["InProgress"] = "IN_PROGRESS";
    Status["Completed"] = "COMPLETED";
    Status["Cancelled"] = "CANCELLED";
})(Status || (Status = {}));
const today = Day.Friday;
const currentStatus = Status.InProgress;
console.log(`Today is day number: ${today}`);
console.log(`The current status is: ${currentStatus}`);
//# sourceMappingURL=index.js.map