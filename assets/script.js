//DEPENDENCIES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var APIkey = "6cf092f23b87fdf33fc57108faf70e1a";
var cityInput = document.querySelector("#cityinput");
var search = document.querySelector("#searchbtn");
var formInput = document.querySelector("#inputForm");
var main = document.querySelector("#main");
var aside = document.querySelector("#aside");
var weatherDisplay = document.createElement("div");
var buttons = document.querySelectorAll(".pastLocation");
//DATA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function savecity() {
  console.log("button clicked!");
  console.log(cityInput.value);
  localStorage.setItem("CityName", cityInput.value);
  weatherDisplay.innerHTML = "";
  weatherDisplay.remove();
  getWeather();
}

function pastSearchList() {
  ListItem = localStorage.getItem("CityName");
  var pastList = document.createElement("ul");
  aside.appendChild(pastList);
  var ListItem = document.createElement("button");
  ListItem.setAttribute("class", "pastLocation");
  ListItem.textContent = cityInput.value;
  pastList.appendChild(ListItem);
}

function clickPastSearch() {
  console.log("getting last city");
  weatherDisplay.innerHTML = "";
  var currentCity = buttons.textContent;
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    currentCity +
    "&appid=" +
    APIkey +
    "&units=imperial";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);

          weatherDisplay.setAttribute("id", "weatherDisplay");
          main.appendChild(weatherDisplay);
          var iconDisplay = document.createElement("img");

          var icons = data.weather[0].icon;
          iconDisplay.src =
            "http://openweathermap.org/img/wn/" + icons + "@2x.png";

          weatherDisplay.appendChild(iconDisplay);
          var cityName = document.createElement("p");

          cityName.innerText = cityInput.value;

          weatherDisplay.appendChild(cityName);

          var temp = document.createElement("p");
          temp.innerText = "Temp: " + data.main.temp;

          weatherDisplay.appendChild(temp);

          var wind = document.createElement("p");
          wind.innerText = "Wind: " + data.wind.speed + " MPH";

          weatherDisplay.appendChild(wind);

          var humidity = document.createElement("p");
          humidity.innerText = "Humidity: " + data.main.humidity + "%";

          weatherDisplay.appendChild(humidity);
        });
      } else {
        alert("Error " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to weather");
    });
}

function getWeather() {
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput.value +
    "&appid=" +
    APIkey +
    "&units=imperial";

  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);

          weatherDisplay.setAttribute("id", "weatherDisplay");
          main.appendChild(weatherDisplay);
          var iconDisplay = document.createElement("img");

          var icons = data.weather[0].icon;
          iconDisplay.src =
            "http://openweathermap.org/img/wn/" + icons + "@2x.png";

          weatherDisplay.appendChild(iconDisplay);
          var cityName = document.createElement("p");

          cityName.innerText = cityInput.value;

          weatherDisplay.appendChild(cityName);

          var temp = document.createElement("p");
          temp.innerText = "Temp: " + data.main.temp;

          weatherDisplay.appendChild(temp);

          var wind = document.createElement("p");
          wind.innerText = "Wind: " + data.wind.speed + " MPH";

          weatherDisplay.appendChild(wind);

          var humidity = document.createElement("p");
          humidity.innerText = "Humidity: " + data.main.humidity + "%";

          weatherDisplay.appendChild(humidity);
        });
      } else {
        alert("Error " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to weather");
    });

  //   displayWeather(data);
}

// function displayWeather(data) {
//   var cityName = document.createElement("p");

//   cityName.innerText = cityInput.value;

//   weatherDisplay.appendChild(cityName);

//   var temp = document.createElement("p");
//   temp.innerText = "Temp: " + this.data.main.temp;

//   cityName.appendChild(temp);
// }
//USER INTERACTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//searching city in input
//button to initiate search
search.addEventListener("click", function (event) {
  event.preventDefault();
  savecity();
  pastSearchList();
});

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickPastSearch(), false);
}
//INITIALIZATIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
