// Day 5 - ES6+ Features
// Sumit Mishra - SRM IST

// --- DESTRUCTURING ---

const student = {
    name: "Sumit",
    age: 20,
    college: "SRM IST",
    marks: 85
};

// Task 1: Destructure name, age, marks from student
// Print all three
const { name , age , marks } = student;
console.log(name, age, marks);

// Task 2: Array destructuring
const topStudents = ["Priya", "Sumit", "Aman", "Raj"];
// Destructure first and third student (skip second)
// Print: "1st: Priya, 3rd: Aman"

const [first, , third] = topStudents;
console.log(`1st: ${first}, 3rd: ${third}`);
// --- SPREAD OPERATOR ---

// Task 3: Combine these two arrays into one
const frontend = ["HTML", "CSS", "JavaScript"];
const backend  = ["Node.js", "Express", "MongoDB"];
// Expected: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"]

const fullstack = [...frontend, ...backend];
console.log(fullstack);


// Task 4: Update student object
// Add a new property: grade: "A"
// Change marks to 90
// Don't modify original student object!
// Hint: use spread

const updatedStudent = { ...student, marks: 90, grade: "A" };
console.log(updatedStudent);
console.log(student);  // original object should remain unchanged


// --- DEFAULT PARAMETERS ---

// Task 5: Write a function calculateFee
// Takes name and course, fee defaults to 5000 if not given
// Print: "Sumit enrolled in React. Fee: 5000"
function calculateFee(name, course, fee = 5000) {
    console.log(`${name} enrolled in ${course}. Fee: ${fee}`);
}
calculateFee("Sumit", "React");        // fee = 5000 (default)
calculateFee("Raj", "Node.js", 8000); // fee = 8000 (given)


// --- SHORT CIRCUIT ---

// Task 6: Short circuit with &&
const isLoggedIn = true;
const username = "Sumit";
// Print username ONLY if isLoggedIn is true
// Use && short circuit (no if/else!)
isLoggedIn && console.log(username);  // Sumit


// Task 7: Short circuit with ||
const inputName = "";
// If inputName is empty, use "Anonymous" as fallback
// Use || operator
const displayName = inputName || "Anonymous";
console.log(displayName);  // Anonymous

// --- HIGHER ORDER FUNCTIONS ---

const products = [
    { name: "Laptop",   price: 55000, category: "Electronics", inStock: true  },
    { name: "Phone",    price: 25000, category: "Electronics", inStock: true  },
    { name: "Shirt",    price: 1500,  category: "Clothing",    inStock: false },
    { name: "Headphones", price: 3000, category: "Electronics", inStock: true },
    { name: "Jeans",    price: 2500,  category: "Clothing",    inStock: true  },
    { name: "Tablet",   price: 35000, category: "Electronics", inStock: false },
];

// Task 8: filter() — Get only Electronics that are inStock
// Print names of those products

const inStockElectronics = products.filter(product => product.category === "Electronics" && product.inStock);
const inStockElectronicsnames = inStockElectronics.map(product => product.name);
console.log("In-stock Electronics:", inStockElectronicsnames);


// Task 9: map() — Create new array of just names + prices
// Format: "Laptop - ₹55000"
// Print the array

const namesAndPrices = products.map(product => `${product.name} - ₹${product.price}`);
console.log("Names and Prices:", namesAndPrices);


// Task 10: reduce() — Calculate total value of ALL products
// Print: "Total inventory value: ₹122000"

const totalValue = products.reduce((accumulator, product) => accumulator + product.price, 0);
console.log(`Total inventory value: ₹${totalValue}`);


// Task 11: CHAIN — 
// Get total price of only inStock Electronics
// Step 1: filter inStock Electronics
// Step 2: map to get prices
// Step 3: reduce to get total
// Do it in ONE chain!

const totalInStockElectronicsValue = products
    .filter(product => product.category === "Electronics" && product.inStock)
    .map(product => product.price)
    .reduce((accumulator, price) => accumulator + price, 0);
console.log(`Total value of in-stock Electronics: ₹${totalInStockElectronicsValue}`);


// Task 12: find() — Find the product named "Headphones"
// Print the full object
// Hint: array.find(item => item.name === "Headphones")

const headphonesProduct = products.find(product => product.name === "Headphones");
console.log("Headphones product:", headphonesProduct);
