// Coding Exercise: Function Call Signatures
// In the index.ts file, you will work with strictly typed functions showcasing various function signatures and behaviors:

// Log Message Function:

// Define a function call signature LogMessage that takes a string and returns void.

// Implement an anonymous function log using this signature that logs messages to the console.

// Test this function by logging the message "Hello TypeScript".

// Throw Error Function:

// Define a function call signature ThrowError that takes a string and throws an error, effectively having a return type of never.

// Implement an anonymous function throwError using this signature that throws an error with the provided message.

// Test this function by attempting to throw an error with the message "Test error".

// Process Data Function:

// Create a function processData that takes a string data and processes it without returning any value, thus its type should be void.

// Inside this function, use the log function to indicate processing of data.

// Test the function by processing "sample data".

// Error Handling Scenario Function:

// Create a function errorHandlingScenario that represents a scenario where an error must be thrown. This function should never successfully complete, indicated by the return type never.

// Use the throwError function within this to throw an error with a specific message.

// Test this function by checking if it throws an error with the message "An unexpected error occurred!".
















// Async function 

async function fetchDatabase(id:number):Promise<any>{};

const anotherAsyncFunction = async(): Promise<any> => {};

async function returnString(id:number): Promise<string>{
    return Promise.resolve("String");
}

type User = {
    name: string;
    age: number;
}

async function returnUser (id:number): Promise <User> {
    return Promise.resolve({name: 'John'})
}


