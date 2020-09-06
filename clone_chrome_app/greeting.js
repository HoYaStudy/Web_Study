const form = document.querySelector(".js-greetingForm");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");

const LS_USER = "currentUser";

function handleSubmit(event) {
  event.preventDefault();
  paintGreeting(input.value);
  saveName(input.value);
}

const askForName = () => {
  form.classList.add("showing");
  form.addEventListener("submit", handleSubmit);
};

const paintGreeting = text => {
  form.classList.remove("showing");
  greeting.classList.add("showing");
  greeting.innerText = `Hello, ${text}`;
};

const saveName = name => {
  localStorage.setItem(LS_USER, name);
};

const loadName = () => {
  const currentUser = localStorage.getItem(LS_USER);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
};

function init() {
  loadName();
}
init();
