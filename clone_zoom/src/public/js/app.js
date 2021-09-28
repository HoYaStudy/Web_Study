const socket = new WebSocket(`ws://${window.location.host}`);

const nickForm = document.querySelector("#nick");
const msgList = document.querySelector("ul");
const msgForm = document.querySelector("#msg");

socket.addEventListener("open", () => {
  console.log("Connected to Server");
});

socket.addEventListener("message", (msg) => {
  const li = document.createElement("li");
  li.innerText = msg.data;
  msgList.append(li);
});

socket.addEventListener("close", () => {
  console.log("Disconnected from Server");
});

function makeMessage(type, payload) {
  const msg = { type, payload };
  return JSON.stringify(msg);
}

nickForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = nickForm.querySelector("input");
  socket.send(makeMessage("nickname", input.value));
  input.value = "";
});

msgForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = msgForm.querySelector("input");
  socket.send(makeMessage("message", input.value));
  input.value = "";
});
