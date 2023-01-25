// SELECTORS
var todoInput = document.querySelector(".todo-input")
var todoButton = document.querySelector(".todo-button")
var todoList = document.querySelector(".todo-list")
// EVENTS
todoButton.addEventListener('click',addTodo)

// FUNCTIONS
function addTodo(event){
    event.preventDefault()
    var todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    var todoItem = document.createElement("li")
    todoItem.innerText = todoInput.value;
    todoInput.value='';
    todoItem.classList.add('todo-item')
    todoDiv.appendChild(todoItem)

    // create a completed button and delete button
    var completedButton = document.createElement("button")
    completedButton.innerHTML = '<i class="fas fa-check "></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    // create a trach button and delete button
    var trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash "></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    // appending to todo list 
    todoList.appendChild(todoDiv)

}