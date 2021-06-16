const body = document.querySelector("body");

const paintImage = () => {
  const imgElement = body.querySelector("img");
  if (imgElement) {
    console.log(imgElement);
    body.removeChild(imgElement);
  }

  const img = new Image();
  img.src = `https://source.unsplash.com/random/${window.outerWidth}x${window.outerHeight}`;
  img.classList.add("bgImage");
  body.prepend(img);
};

paintImage();
setInterval(paintImage, 3600000);
