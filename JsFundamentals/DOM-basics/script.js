// Step 1: SELECT the elements
const heading = document.querySelector("#heading");
const subtext = document.querySelector("#subtext");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const message = document.querySelector("#message");

// Step 2: Let's read what's already there
console.log(heading.textContent);   // Hello, World!
console.log(subtext.textContent);   // This is a paragraph

// Step 3: Change content via JS
heading.textContent = "Hello, Sumit!";
message.textContent = "JS just changed this page!";

// When btn1 is clicked → run this function
btn1.addEventListener("click", function() {
    heading.textContent = "You clicked the button!";
});

// When btn2 is clicked → run this function
btn2.addEventListener("click", function() {
    heading.style.color = "red";
});

// When btn3 is clicked → run this function
btn3.addEventListener("click", function() {
    if (subtext.style.display === "none") {
        subtext.style.display = "block";
    } else {
        subtext.style.display = "none";
    }
});
// Select new elements
const nameInput = document.querySelector("#nameInput");
const greetBtn = document.querySelector("#greetBtn");
const greetMessage = document.querySelector("#greetMessage");

// When greetBtn clicked:
// 1. Read what user typed in nameInput
// 2. If input is empty → show "Please enter your name!"
// 3. If input has value → show "Hello, [Name]! Welcome to DOM!"

greetBtn.addEventListener("click", function() {
    const name = nameInput.value;  // how to read input value?
                                   // hint: .value property

    if (name === "") {
        greetMessage.textContent = "Please enter your name!";
    } else {
        greetMessage.textContent = `Hello, ${name}! Welcome to DOM!`;
    }
});