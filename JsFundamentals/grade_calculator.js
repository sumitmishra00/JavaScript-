// Grade Calculator - Mini Project
// Sumit Mishra - SRM IST

// Student data
const studentName = "Sumit Mishra";
const subject1 = 85;
const subject2 = 92;
const subject3 = 78;
const subject4 = 88;
const subject5 = 76;

// Task 1: Arrow function to calculate total
// Add all 5 subjects and return total
const calculateTotal = (s1, s2, s3, s4, s5) => {
    return s1 + s2 + s3 + s4 + s5;
}

// Task 2: Arrow function to calculate percentage
// Formula: (total / 500) * 100
const calculatePercentage = (total) => {
    return (total / 500) * 100;
}

// Task 3: Function to get grade
// 90-100 → "A" , 75-89 → "B" , 60-74 → "C" , below 60 → "F"
function getGrade(percentage) {
    if (percentage >= 90) {
        return "A";
    } else if (percentage >= 75) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else {
        return "F";
    }
}

// Task 4: Arrow function to check pass/fail
// Pass if percentage >= 40
const getStatus = (percentage) => {
    return percentage >= 40 ? "✅ Pass" : "❌ Fail";
    
}

// Task 5: Print the full report card
// Use all functions above together
// Call them, store results, then print

const total = calculateTotal(subject1, subject2, subject3, subject4, subject5);
const percentage = calculatePercentage(total);
const grade = getGrade(percentage);
const status = getStatus(percentage);



console.log(`Student Name: ${studentName}`);
console.log(`📋 REPORT CARD: ${studentName}`);
console.log(`Subject 1: ${subject1}`);
console.log(`Subject 2: ${subject2}`);
console.log(`Subject 3: ${subject3}`);
console.log(`Subject 4: ${subject4}`);
console.log(`Subject 5: ${subject5}`);
console.log(`Total: ${total} / 500`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);
console.log(`Status: ${status}`);
