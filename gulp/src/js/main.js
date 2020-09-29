import { random } from "./util";

document.querySelector("button").addEventListener("click", () => {
  if (document.querySelector(".random")) {
    document.querySelector(".random").remove();
  }
  document.querySelector("#number").innerHTML += `<span class='random'>${random(
    10
  )}</span>`;
});
