import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { ApiCall } from "./logic.js";

function errorFunction(response) {
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
async function getConvertedCurrency() {
  let number = $('#number-input').val();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/GBP/${number}`;
  const response = await ApiCall.getCurrency(url);
  console.log(response);
  const isErrorPresent = errorFunction($("error-message"), response);
  if (!isErrorPresent) {
    $('#response').text("");
    }
  }
$(document).ready(function () {
  $("#cash").submit(async function (event) {
    event.preventDefault();
    $("#response").removeClass("hidden");
    getConvertedCurrency();
    });
  });
  





  // async function getConvertedCurrency() {
  //   const url = `https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/USD/GBP/${number-input}`;
  //   const response = await ApiCall.getCurrency(url);
  //   console.log(response);
  //   const isErrorPresent = errorFunction($("error-message"), response);
  //   if (!isErrorPresent) {
  //     $('#response').text("");
  //     }
  //   }