function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${taskInput.value}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function removeTask(btn) {
    const taskList = document.getElementById("taskList");
    const taskItem = btn.parentElement;
    taskList.removeChild(taskItem);
}