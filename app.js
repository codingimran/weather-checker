const dataInput = document.querySelector("#input-data");
const Searchbtn = document.querySelector("#btn");
const weatherImg = document.getElementById("weather-img");
Searchbtn.addEventListener("click", () => {
  dataInput.value == "" ? alert("Please type a city name") : weather();
});

dataInput.addEventListener("keypress", (event) => {
  if (event.keyCode == 13) {
    weather();
  }
});

const weather = () => {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      dataInput.value +
      "&units=metric&APPID=7155b272f7a80a78d1951ab8c9916a52"
  )
    .then((res) => res.json())
    .then((data) => weatherDisplay(data))
    .catch(() => {
      alert("City not found.");
      dataInput.value = "";
    });
};
const dataArray = [];
const weatherDisplay = (data) => {
  console.log(data);
  let { name } = data;
  let { temp } = data.main;
  document.getElementById("location-name").innerText = name;
  document.getElementById("temp").innerText = temp;
  //   console.log(data.weather[0].main);
  document.getElementById("weather-status").innerText = data.weather[0].main;
  //img changer
  //weather img
  const dataArray = [];
  dataArray.push(data.weather[0].icon);
  const cloudyStauts = dataArray[0];
  console.log(cloudyStauts);
  weatherImg.src = `https://openweathermap.org/img/wn/${cloudyStauts}@2x.png`;
};

// default dhaka call
const weather2 = () => {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&APPID=7155b272f7a80a78d1951ab8c9916a52"
  )
    .then((res) => res.json())
    .then((data) => weatherDisplay(data))
    .catch(() => {
      alert("City not found.");
      dataInput.value = "";
    });
};
weather2();
