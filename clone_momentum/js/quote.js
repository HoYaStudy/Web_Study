const quote_element = document.querySelector("#quote-qod");
const author_element = document.querySelector("#quote-author");

function reqListener() {
  response = JSON.parse(this.responseText);
  if (response.hasOwnProperty("contents")) {
    response = response.contents.quotes[0];
    quote_element.innerText = response.quote;
    author_element.innerText = response.author;
  } else {
    console.log(response.error.message);
  }
}

const xhr = new XMLHttpRequest();
xhr.addEventListener("load", reqListener);
xhr.open("GET", "https://quotes.rest/qod");
xhr.send();
