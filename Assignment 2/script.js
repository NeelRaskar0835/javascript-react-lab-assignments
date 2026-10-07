function addTask() {

    // Get the input element
    let input = document.getElementById("taskInput");

    // Get the entered task
    let taskText = input.value.trim();

    // Check if the input is empty
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item
    let listItem = document.createElement("li");

    // Add class to list item
    listItem.className = "task";

    // Create a span for the task text
    let task = document.createElement("span");

    task.innerText = taskText;
    task.className = "task-text";

    // Mark task as completed when clicked
    task.addEventListener("click", function () {

        task.classList.toggle("completed");

    });

    // Create delete button
    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-button";

    // Delete task when button is clicked
    deleteButton.addEventListener("click", function () {

        listItem.remove();

    });

    // Add task text and delete button to list item
    listItem.appendChild(task);
    listItem.appendChild(deleteButton);

    // Add list item to task list
    document.getElementById("taskList").appendChild(listItem);

    // Clear input field
    input.value = "";
}