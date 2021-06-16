const clockDate = document.querySelector("#clock-date");
const clockTime = document.querySelector("#clock-time");

function getDateTime() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  clockDate.innerText = `${year} ${month} ${day}`;
  clockTime.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getDateTime, 1000);
