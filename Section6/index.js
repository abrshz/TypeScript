"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Named function 
function intro(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
}
// Function expression
const intro2 = function (name, age) {
    return `My name is ${name} and I am ${age} years old.`;
};
// Arrow function 
const intro3 = (name, age) => {
    return `My name is ${name} and I am ${age} years old.`;
};
// 
function intros(name, age, country) {
    if (country) {
        return `My name is ${name} and I am ${age} years old. I live in ${country}.`;
    }
    return `My name is ${name} and I am ${age} years old.`;
}
console.log(intros("Mike", 32, "Eritrea"));
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
};
const person = {
    name: 'Scott',
    age: 30,
    ageUnit: AgeUnit.Years,
    greet: (greeting) => {
        return `${greeting} ${person.name}`;
    }
};
function convertAgeToMonths(person) {
    if (person.ageUnit === AgeUnit.Years) {
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Months;
    }
    return person;
}
console.log(convertAgeToMonths(person));
//# sourceMappingURL=index.js.map