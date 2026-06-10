// Student Marks Analyzer


const students = [
    { name: "Sumit",  marks: 85 },
    { name: "Raj",    marks: 45 },
    { name: "Priya",  marks: 92 },
    { name: "Aman",   marks: 38 },
    { name: "Sneha",  marks: 78 },
    { name: "Vikram", marks: 55 },
];

// Task 1: Print total number of students
console.log("Total students:", students.length);


// Task 2: Using for...of, print each student like:
// "Sumit scored 85 marks"
for (let student of students) {
    console.log(`${student.name} scored ${student.marks} marks`);
}


// Task 3: Using filter()
// Get array of students who passed (marks >= 60)
// Print how many passed
const passedStudents = students.filter(student => student.marks >= 60);
console.log("Number of students who passed:", passedStudents.length);


// Task 4: Using filter()
// Get array of students who failed (marks < 60)
// Print how many failed
const failedStudents = students.filter(student => student.marks < 60);
console.log("Number of students who failed:", failedStudents.length);

// Task 5: Using map()
// Get array of just the names of ALL students
// Print the names array
const names = students.map(student => student.name);
console.log("Names of all students:", names);


// Task 6: Using map()
// Add 5 bonus marks to every student
// Print new array with updated marks
// Format: { name: "Sumit", marks: 90 }
const updatedMarks = students.map(student => {
    return { ...student, marks: student.marks + 5 };
});
console.log("Updated marks:", updatedMarks);

// Task 7: Find the topper
// Hint: Use Math.max() but on objects it's different
// First use map() to get just marks array
// Then use Math.max(...marksArray)
// Then print: "Topper has 92 marks"
const marksArray = students.map(student => student.marks);
const maxMarks = Math.max(...marksArray);
console.log(`Topper has ${maxMarks} marks`);


// Task 8: Print full report
// Loop through students
// Print: "Sumit: 85 → Pass ✅" or "Raj: 45 → Fail ❌"
// Use ternary for pass/fail
for (let student of students) {
    const status = student.marks >= 60 ? "pass" : "fail";
    const emoji = student.marks >= 60 ? "✅" : "❌";
    console.log(`${student.name}: ${student.marks} → ${status} ${emoji}`);
}