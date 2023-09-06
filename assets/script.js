//DEPENDENCIES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var APIkey = "6cf092f23b87fdf33fc57108faf70e1a";
var cityInput = document.querySelector("#cityinput");
var search = document.querySelector("#searchbtn");
var formInput = document.querySelector("#inputForm");
var weatherDisplay = document.querySelector("#weatherDisplay");
//DATA~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//FUNCTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function savecity() {
  console.log("button clicked!");
  console.log(cityInput.value);
  getWeather();
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
          var cityName = document.createElement("p");

          cityName.innerText = cityInput.value;

          weatherDisplay.appendChild(cityName);

          var temp = document.createElement("p");
          temp.innerText = "Temp: " + data.main.temp;

          cityName.appendChild(temp);

          var wind = document.createElement("p");
          wind.innerText = "Wind: " + data.wind.speed + " MPH";

          temp.appendChild(wind);

          var humidity = document.createElement("p");
          humidity.innerText = "Humidity: " + data.main.humidity + "%";

          wind.appendChild(humidity);
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
});
//INITIALIZATIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
