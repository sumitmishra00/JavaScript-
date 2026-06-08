// Day 2 - Functions
// Sumit Mishra - SRM IST

// Task 1: Write a function that takes your name and returns a greeting
// Expected output: "Hello Sumit, welcome to JavaScript!"
function greetUser(name) {
    // your code here
    return `Hello ${name}, welcome to JavaScript!`;
}
console.log(greetUser("Sumit"));


// Task 2: Write a function that adds two numbers and RETURNS the result
function addNumbers(a, b) {
    // your code here
    return a + b;
}
console.log(addNumbers(10, 20));  // should print 30


// Task 3: Write a function that takes a name and age
// and returns: "Sumit is 20 years old"
function describeUser(name, age) {
    // your code here
    return `${name} is ${age} years old`;
}
console.log(describeUser("Sumit", 20));


// Task 4: What does this print? Guess first, then uncomment and run
 function sayHi() {
     console.log("Hi!");
 }
 let result = sayHi();
 console.log(result);       
 // Task 5: Convert greetUser to arrow function
// Regular (you wrote this):
// function greetUser(name) {
//     return `Hello ${name}, welcome to JavaScript!`;
// }

// Now write it as arrow function:
const greetUser2 = (name) => `Hello ${name}, welcome to JavaScript!`;
console.log(greetUser2("Sumit"));


// Task 6: Convert addNumbers to arrow function shorthand
// (single line, no curly braces, no return keyword)
const addNumbers2 = (a,b) => a + b;
console.log(addNumbers2(10, 20));


// Task 7: Write a NEW arrow function
// Takes a number, returns whether it's even or odd
// Output: "10 is even" or "7 is odd"
// Hint: use % operator (modulus — same as C++)
const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        return `${num} is even`;
    }
    else {
        return `${num} is odd`;
    }
}
console.log(evenOrOdd(10));
console.log(evenOrOdd(7));

// --- CONDITIONALS & TERNARY ---

// Task 8: if/else if/else
// Write a function that takes marks and returns grade
// 90-100  → "A"
// 75-89   → "B"  
// 60-74   → "C"
// below 60 → "F"

function getGrade(marks) {
    if (marks >=90) {
        return "A"; 
    }
    else if (marks >= 75) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else {
        return "F";
    }
}

console.log(getGrade(95));   // A
console.log(getGrade(80));   // B
console.log(getGrade(65));   // C
console.log(getGrade(40));   // F


// Task 9: Ternary operator
// Write ONE line that checks if a number is positive or negative
// Store result in a variable and print it

let number = -5;
let sign = number >= 0 ? "positive" : "negative";
console.log(sign);  


// Task 10: Ternary inside template literal
// Print: "Sumit is eligible / not eligible to vote"
// eligible if age >= 18

let age = 20;
console.log(`Sumit is ${age >=18 ? "eligible" : "not eligible"} to vote`);
