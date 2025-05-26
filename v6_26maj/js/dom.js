/* 
let elem = document.querySelector(cssSelector);

let elem = document.querySelectorAll(cssSelector);
    Returnerar en lista med alla element den hittar med den selektorn

let elem = document.getElementById("myId");  

*/

const todoListElem = document.querySelector("#todo-list");

function createTodo(task) {
  const todoElem = document.createElement("li");
  todoElem.textContent = task;
  console.log(todoElem);

  todoListElem.appendChild(todoElem);
}

createTodo("Köpa kaffe");
createTodo("Köp kaka");
createTodo("Brygg kaffe");
createTodo("Drick kaffe");
 