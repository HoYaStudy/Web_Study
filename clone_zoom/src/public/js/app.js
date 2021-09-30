const socket = io();

const welcome = document.getElementById("welcome");
const form = welcome.querySelector("form");
const room = document.getElementById("room");

room.hidden = true;

let roomName;

function addMessage(msg) {
  const ul = room.querySelector("ul");
  const li = document.createElement("li");
  li.innerText = msg;
  ul.appendChild(li);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, () => {
    welcome.hidden = true;
    room.hidden = false;
    const h3 = room.querySelector("h3");
    h3.innerText = `Room ${roomName}`;
    const nameForm = room.querySelector("#name");
    const msgForm = room.querySelector("#msg");
    nameForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = room.querySelector("#name input");
      const value = input.value;
      socket.emit("nickname", input.value);
    });
    msgForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = room.querySelector("#msg input");
      const value = input.value;
      socket.emit("new_message", roomName, input.value, () => {
        addMessage(`You: ${value}`);
      });
      input.value = "";
    });
  });
  roomName = input.value;
  input.value = "";
});

socket.on("welcome", (user, userCount) => {
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName} (${userCount})`;
  addMessage(`${user} entered!`);
});
socket.on("bye", (user, userCount) => {
  const h3 = room.querySelector("h3");
  h3.innerText = `Room ${roomName} (${userCount})`;
  addMessage(`${user} left...`);
});
socket.on("new_message", addMessage);
socket.on("room_change", (rooms) => {
  if (rooms.length === 0) {
    roomList.innerText = "";
    return;
  }
  const roomList = welcome.querySelector("ul");
  rooms.forEach((room) => {
    const li = document.createElement("li");
    li.innerText = room;
    roomList.append(li);
  });
});
