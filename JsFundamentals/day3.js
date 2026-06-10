// Day 3 - Loops
// Sumit Mishra - SRM IST

// Task 1: for loop
// Print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: while loop
// Print only EVEN numbers from 1 to 20
let i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// Task 3: for...of loop
const cities = ["Delhi", "Mumbai", "Chennai", "Kolkata", "Hyderabad"];
// Print each city like: "City: Delhi", "City: Mumbai" etc
for (let city of cities) {
    console.log( `City: ${city}`);
}

// Task 4: for loop — countdown
// Print: 10, 9, 8, 7... 1, "Blast off!"
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// after loop ends:
console.log("Blast off!");

// --- ARRAYS ---

const marks = [85, 45, 92, 38, 78, 55, 96, 42];

// Task 5: Print total number of students
// Hint: .length

console.log(marks.length);


// Task 6: Add a new mark 88 to the end of array
// Then print the updated array

marks.push(88);
console.log(marks);


// Task 7: Print the highest mark
// Hint: Math.max(...marks)  ← spread operator, we'll learn later
const highestMark = Math.max(...marks);
console.log("Highest mark:", highestMark);


// Task 8: Using filter()
// Create a new array with only PASSING marks (>= 60)
// Print the passing marks array
const passing = marks.filter(marks => marks >= 60);
console.log(passing); 


// Task 9: Using map()
// Create a new array where each mark is increased by 5 (bonus marks)
// Print the new array
const increasedMarks = marks.map(mark => mark + 5);
console.log(increasedMarks);


// Task 10: Using for...of
// Loop through marks array
// Print: "Pass" if mark >= 60, "Fail" if less
// Format: "85: Pass" , "45: Fail"
for (let mark of marks) {
    const status = mark >= 60? "pass" : "fail";
    console.log( `${mark}: ${status}`);
}