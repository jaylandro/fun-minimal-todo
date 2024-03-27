let todoForm, todoText, todoList;

function saveToStorage() {
  localStorage.setItem("todos", JSON.stringify(todoList.innerHTML));
}

function addTodo() {
  event.preventDefault();
  if (todoText.value.length < 1) return;

  const todoId = `id${todoText.value.replaceAll(" ", "")}`;
  const node = document.createElement("li");

  node.innerHTML = `<input type="checkbox" id="${todoId}" onchange="handleCheck()">
      <label for="${todoId}">${todoText.value}</label>`;

  todoList.prepend(node);

  saveToStorage();

  todoForm.reset();
}

function handleCheck() {
  const elem = event.currentTarget;

  elem.getAttribute("checked")
    ? elem.removeAttribute("checked")
    : elem.setAttribute("checked", true);

  saveToStorage();
}

document.addEventListener("DOMContentLoaded", () => {
    todoForm = document.getElementById("todo-form");
    todoText = document.getElementById("todo-text");
    todoList = document.getElementById("list");
    todoList.innerHTML = JSON.parse(localStorage.getItem("todos"));
});
