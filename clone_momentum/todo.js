const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const LS_TODOS = "todos";

let toDos = [];

function handleSubmit(event) {
  event.preventDefault();
  const date = new Date();
  const id = date.getTime();
  createToDo(toDoInput.value, id);
  paintToDos(toDoInput.value, id);
  toDoInput.value = "";
}

const paintToDos = (text, id) => {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = id;
  toDoList.appendChild(li);
};

const createToDo = (text, id) => {
  const toDoObj = {
    text,
    id
  };
  toDos.push(toDoObj);
  saveToDos();
};

const deleteToDo = event => {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(toDo => {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
};

const saveToDos = () => {
  localStorage.setItem(LS_TODOS, JSON.stringify(toDos));
};

const loadToDos = () => {
  const loadedToDos = localStorage.getItem(LS_TODOS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(toDo => {
      paintToDos(toDo.text, toDo.id);
    });
    toDos = parsedToDos;
  }
};

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
