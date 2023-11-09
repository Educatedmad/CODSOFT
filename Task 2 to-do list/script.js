// Get the task input and task list
const taskInput = document.getElementById('task');
const taskList = document.getElementById('task-list');

// Initialize tasks from local storage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render tasks in the list
function renderTasks() {
    taskList.innerHTML = '';
    for (let i = 0; i < tasks.length; i++) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${tasks[i]}</span>
            <button class="edit" onclick="editTask(${i})">Edit</button>
            <button class="delete" onclick="deleteTask(${i})">Delete</button>
        `;
        taskList.appendChild(li);
    }
}

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        taskInput.value = '';
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

// Edit a task
function editTask(index) {
    const updatedTask = prompt('Edit task:', tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

// Initial render
renderTasks();
