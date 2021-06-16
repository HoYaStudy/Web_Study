const CLASSNAME_HIDDEN = "hidden";
const LS_USERNAME = "username";

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(CLASSNAME_HIDDEN);
}

function onLoginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(CLASSNAME_HIDDEN);
  const username = loginInput.value;
  localStorage.setItem(LS_USERNAME, username);
  paintGreetings(username);
}

const savedUsername = localStorage.getItem(LS_USERNAME);
if (savedUsername === null) {
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
