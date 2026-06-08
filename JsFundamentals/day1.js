// --- VARIABLES ---
// const: cannot be reassigned; let: can be reassigned
const name = "Sumit Mishra";
let age = 20;
let cgpa = 7.89;
const isCSStudent = true; // boolean type
const dreamCompany = "Snapchat";
const college = "SRM IST";

// Print all variable values to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("CGPA:", cgpa);
console.log("Are you a CS student?", isCSStudent);
console.log("Dream Company:", dreamCompany);

// --- OPERATORS ---

// == (loose equality): converts types before comparing; 5 and "5" are equal → true
console.log(5 == "5");
// === (strict equality): no type conversion; number vs string → false
console.log(5 === "5");
// 0 is falsy and false is falsy, loose equality treats them as equal → true
console.log(0 == false);
// strict: number 0 vs boolean false, different types → false
console.log(0 === false);
// null and undefined are loosely equal to each other (special JS rule) → true
console.log(null == undefined);
// strict: different types → false
console.log(null === undefined);
// empty string is falsy, same as false in loose comparison → true
console.log("" == false);
// strict: string vs boolean → false
console.log("" === false);

// --- TRUTHY & FALSY ---
// Falsy values in JS: false, 0, "", null, undefined, NaN
// Everything else is truthy, including non-empty strings, arrays, and objects

// Non-empty string "Sumit" is truthy
if ("Sumit") {
    console.log("1: Truthy");
} else {
    console.log("1: Falsy");
}

// 0 is falsy
if (0) {
    console.log("2: Truthy");
} else {
    console.log("2: Falsy");
}

// Empty array [] is truthy (it's an object reference)
if ([]) {
    console.log("3: Truthy");
} else {
    console.log("3: Falsy");
}

// Empty string "" is falsy
if ("") {
    console.log("4: Truthy");
} else {
    console.log("4: Falsy");
}
// --- STRINGS ---

const firstName = "Sumit";
const lastName = "Mishra";


// Task 1: Use template literal to print "Hello, I am Sumit Mishra"
console.log(`Hello, I am ${firstName} ${lastName}`);

// Task 2: Print total length of firstName + lastName combined
// Hint: firstName.length
const fullNameLength = firstName.length + lastName.length;
console.log("Total length of full name:", fullNameLength);

// Task 3: Print firstName in ALL CAPS
console.log("first name in uppercase:", firstName.toUpperCase());

// Task 4: Print lastName in all small
console.log("last name in all lowercase:", lastName.toLowerCase());


// Task 5: 
let sentence = "   I am learning JavaScript   ";
// Remove the extra spaces and print it
// Hint: .trim()
const trimmedSentence = sentence.trim();
console.log("Trimmed sentence:", trimmedSentence);


// Task 6: 
// Does firstName include the letter "u"? Print true or false
// Hint: .includes()
console.log("Does firstName include 'u'?", firstName.includes("u"));

// Task 7: Template literal
// Print: "Sumit is 20 years old and studies at SRM IST"
// Use your existing variables: firstName, age, college

console.log(`${firstName} is ${age} years old and studies at ${college}`);
