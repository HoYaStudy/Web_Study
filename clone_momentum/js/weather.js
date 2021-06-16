const weatherTemperature = document.querySelector("#weather-temperature");
const weatherLocation = document.querySelector("#weather-location");

const LS_COORDS = "coords";
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

const getWeather = (lat, lon) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const temperature = json.main.temp;
      const place = json.name;
      weatherTemperature.innerText = `${temperature}℃`;
      weatherLocation.innerText = `@${place}`;
    });
};

const handleGeoSuccess = (pos) => {
  const latitude = pos.coords.latitude;
  const longitude = pos.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
};

const handleGeoError = () => {};

const askForCoords = () => {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
};

const saveCoords = (coordsObj) => {
  localStorage.setItem(LS_COORDS, JSON.stringify(coordsObj));
};

const loadCoords = () => {
  const loadedCoords = localStorage.getItem(LS_COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
};

function init() {
  loadCoords();
}
init();
