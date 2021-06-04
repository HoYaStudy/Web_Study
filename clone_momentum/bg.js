const body = document.querySelector("body");

const NUM_OF_IMG = 5;

const paintImage = imgNumber => {
  const img = new Image();
  img.src = `images/${imgNumber}.jpg`;
  img.classList.add("bgImage");
  body.prepend(img);
};

const genRandom = () => {
  const number = Math.floor(Math.random() * NUM_OF_IMG + 1);
  return number;
};

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}
init();
