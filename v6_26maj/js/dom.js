/* 
let elem = document.querySelector(cssSelector);
  Tar in en cssSelector (ID, class, tag) flexibel
    Hämtar det första elementet den träffar, ex knappar med samma klass

let elem = document.querySelectorAll(cssSelector);
  Returnerar en lista med alla element den hittar med den selektorn

let elem = document.getElementById("myId");  
  Hämtar ett element enbart baserat på ID som finns i html

let elem = document.getELementsByClass("myClass")
  Hämtar en array(en lista) med alla element i den klassen, inte endast ett element  
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
 