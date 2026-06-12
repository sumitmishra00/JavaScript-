// Todo List - Day 4 Project
// Sumit Mishra - SRM IST

// Step 1: Select all elements
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todo-list");
const error = document.querySelector("#error");
const taskCount = document.querySelector("#taskCount");

// Step 2: Array to store all tasks
let tasks = [];

// Step 3: Function to render tasks on screen
// This function will:
// - Clear the current list
// - Loop through tasks array
// - Create an li for each task
// - Add a delete button to each li
// - Append each li to todoList
// - Update task count

function renderTasks() {
    // Clear existing list
    todoList.innerHTML = "";

    // Loop through tasks array
    tasks.forEach(function(task, index) {
        // Create a new li element
        const li = document.createElement("li");

        // Set its content with a delete button
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;

        // Add li to the ul
        todoList.appendChild(li);
    });

    // Update task count
    taskCount.textContent = `Total tasks: ${tasks.length}`;
}

// Step 4: Function to add a task
function addTask() {
    const taskText = taskInput.value.trim();  // trim the input

    // If empty → show error
    if (taskText === "") {
        error.textContent = "Task cannot be empty!";           // error message
        return;                                              // stop here
    }

    // Clear error if any
    error.textContent = "";

    // Add task to array
    tasks.push(taskText);                   // which array method adds to end?

    // Clear input field
    taskInput.value = "";                 // reset input to empty

    // Re-render the list
    renderTasks();
}

// Step 5: Function to delete a task
function deleteTask(index) {
    // Remove 1 item at 'index' position from tasks array
    // Hint: tasks.splice(index, 1)
    tasks.splice(index, 1);

    // Re-render the list
    renderTasks();
}

// Step 6: Add event listener to button
addBtn.addEventListener("click", addTask);

// Step 7: Allow pressing Enter key to add task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});