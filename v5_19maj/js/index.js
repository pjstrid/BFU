let todos = []; // en tom array

const buttonElem = document.querySelector ("#add-todo-button");
const todoList = document.querySelector ("#todoList");

function displayTodos() {
    let todoItems = "";

    for(let i = 0; i < todos.length; i++) {
        console.log("Todo nr: ", i);
        console.log("Todo: ", todos[i]);
        todoItems = todoItems + "<p>" + todos[i] + "</p>";
        todoList.innerHTML = "<p>Dagens todo:</p>" + todos;
    }
}

buttonElem.addEventListener("click", () => {
const todo = prompt("Vad vill du göra?");

todos.push(todo);

displayTodos();
});

