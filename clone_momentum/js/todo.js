const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("input");

const LS_TODOS = "todos";

let todos = [];

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodoObj = {
    text: todoInput.value,
    id: Date.now(),
  };
  todoInput.value = "";
  todos.push(newTodoObj);
  paintTodos(newTodoObj);
  saveTodos();
}

const paintTodos = ({ text, id }) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  span.innerText = text;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = id;
  todoList.appendChild(li);
};

const deleteTodo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
};

const saveTodos = () => {
  localStorage.setItem(LS_TODOS, JSON.stringify(todos));
};

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(LS_TODOS);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach((todo) => paintTodos(todo));
}
