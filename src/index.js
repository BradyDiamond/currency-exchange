import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { ApiCall } from "./logic.js";

function errorFunction(element, response) {
  if (response instanceof Error) {
    $(element).text("");
    $(element).append(
      "<p class='error'>There was an error getting this data from api<p>"
    );
    return true;
  } else {
    return false;
  }
}
async function getCurrency(element) {
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;
  const response = await ApiCall.get(url);
  const isErrorPresent = errorFunction($("#cash"), response);
  $("#response").removeClass("hidden");
  if (!isErrorPresent) {
    const rates = response.url;
    }
  }
$(document).ready(function () {
  $("#cash").submit(async function (event) {
    event.preventDefault();
    const money = $("#number-input").val();
    getCurrency(element);
  });
});


// $(document).ready(function() {
//   $('#weatherLocation').click(function() {
//     let city = $('#location').val();
//     clearFields();
//     let promise = WeatherService.getWeather(city);
//     promise.then(function(response) {
//       const body = JSON.parse(response);
//       let farTemp = ((response.main.temp - 273.15) * 9/5 + 32).toFixed(2);
//       $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//       $('.showTemp').text(`The temperature in fahrenheit is ${farTemp} degrees.`);
//     }, function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error}`);
//     });
//   });
// });