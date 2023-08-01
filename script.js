let taskList = document.getElementById("ul-el")
const errorMsg = document.getElementById("error-msg")
const taskInput = document.getElementById("inputTask")
const inputBtnEl = document.getElementById("addTaskButton")
const errorMsg1 = document.getElementById("error-msg1")
const taskInput1 = document.getElementById("inputTask1")
const inputBtnEl1 = document.getElementById("addTaskButton1")
let taskArray = getTasksFromLocalStorage()

taskInput.focus()
taskInput1.focus()

function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("taskArray")) || []
}

function updateTasksInLocalStorage() {
    localStorage.setItem("taskArray", JSON.stringify(taskArray))
}

function createTask(taskText) {
    return {text: taskText, completed: false}
}

function deleteTask(index) {
    taskArray.splice(index, 1)
    updateTasksInLocalStorage()
}

function createTaskElement(taskObj) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("taskItem");
  
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.checked = taskObj.completed;
    checkbox.addEventListener("change", function () {
        taskObj.completed = checkbox.checked;
        taskTextElement.classList.toggle("completed", taskObj.completed);
        updateTasksInLocalStorage();
    });
  
    const taskTextElement = document.createElement("span");
    taskTextElement.classList.add("taskText");
    taskTextElement.textContent = taskObj.text;
    taskTextElement.classList.toggle("completed", taskObj.completed);
  
    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "X";
    removeButton.addEventListener("click", function () {
        deleteTask(taskObj);
        renderTasks();
    });
  
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(removeButton);
  
    return taskItem;
}

function renderTasks() {
    taskList.innerHTML = ""

    for (let i=0; i,taskArray.length; i++) {
        const taskElement = createTaskElement(taskArray[i])
        taskList.appendChild(taskElement)
    }
}

inputBtnEl.addEventListener("click", function() {
    let removedWhiteSpace = taskInput.value.trim()

    if (removedWhiteSpace === "") {
        errorMsg.textContent = "Please enter a new task."
    } else {
        errorMsg.textContent = ""        
        const newTask = createTask(removedWhiteSpace)
        taskArray.push(newTask)
        updateTasksInLocalStorage()     
        taskInput.value = ""
        renderTasks()
    }
    taskInput.focus()
})

taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        let removedWhiteSpace = inputEl.value.trim()

        if (removedWhiteSpace === "") {
            errorMsg.textContent = "Please enter a new task."
        } else {
            errorMsg.textContent = ""
            const newTask = createTask(removedWhiteSpace)
            taskArray.push(newTask)
            updateTasksInLocalStorage()
            inputEl.value = ""
            renderTasks()
        }
    }
    taskInput.focus()
})

renderTasks()

inputBtnEl1.addEventListener("click", function() {
    let removedWhiteSpace = taskInput1.value.trim()

    if (removedWhiteSpace === "") {
        errorMsg1.textContent = "Please enter a new price."
    } else {
        errorMsg1.textContent = ""        
        const newTask = createTask(removedWhiteSpace)
        taskArray.push(newTask)
        updateTasksInLocalStorage()     
        taskInput1.value = ""
        renderTasks()
    }
    taskInput1.focus()
})

taskInput1.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        let removedWhiteSpace = inputEl.value.trim()

        if (removedWhiteSpace === "") {
            errorMsg1.textContent = "Please enter a new price."
        } else {
            errorMsg1.textContent = ""
            const newTask = createTask(removedWhiteSpace)
            taskArray.push(newTask)
            updateTasksInLocalStorage()
            inputEl.value = ""
            renderTasks()
        }
    }
    taskInput1.focus()
})

renderTasks()

let num1 = 0;
let num2 = 0;

function add() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let add = num1 + num2;
    document.getElementById("sum-el").textContent = "Answer: " + add;
  }

  function subtract() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let substract= num1 - num2;
    document.getElementById("sum-el").textContent = "Answer: " + substract;
  }

  function divide() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let divide = num1 / num2;
    document.getElementById("sum-el").textContent = "Answer: " + divide;
  }

  function multiply() {
    let num1 = Number(document.getElementById("num1-el").value);
    let num2 = Number(document.getElementById("num2-el").value);
    let multiply = num1 * num2;
    document.getElementById("sum-el").textContent = "Answer: " + multiply;
  }
