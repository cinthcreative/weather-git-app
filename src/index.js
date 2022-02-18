//current date
let now = new Date();
console.log(now.getDate());

let h4 = document.querySelector("#currentDateTime");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h4.innerHTML = `It is ${day}, ${hours} hrs : ${minutes} mins.`;

//------end current date

function displayCurrentWeather(response) {
  document.querySelector("#location").innerHTML = response.data.name;
  document.querySelector("#weather").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiKey = "551ddcf4ab5281fea3bcb2c001c92a45";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCurrentWeather);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);
