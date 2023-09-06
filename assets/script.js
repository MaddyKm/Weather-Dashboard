//DEPENDENCIES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var APIkey = "6cf092f23b87fdf33fc57108faf70e1a";
var cityInput = document.querySelector("#cityinput");
var search = document.querySelector("#searchbtn");
var formInput = document.querySelector("#inputForm");
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
        });
      } else {
        alert("Error " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to weather");
    });
  cityInput.value = "";
}
//USER INTERACTIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//searching city in input
//button to initiate search
search.addEventListener("click", function (event) {
  event.preventDefault();
  savecity();
});
//INITIALIZATIONS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
