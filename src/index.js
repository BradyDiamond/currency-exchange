import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { ApiCall } from "./apiLogic.js";

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
async function getConvertedCurrency() {
  let number = $('#number-input').val();
  const operator = $("input:radio[name=operator]:checked").val();
  let url;
  if (operator === "pnd") {
    url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/GBP/${number}`;
  } else if (operator === "euro") {
    url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/EUR/${number}`;
  } else if (operator === "yen") {
    url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/JPY/${number}`;
  } else if (operator === "aus") {
    url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/AUD/${number}`;
  } else if (operator === "can") {
    url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/CAD/${number}`;
  } else {
    $("#error-message").text("this is not a supported currency!")
  }

  const response = await ApiCall.getCurrency(url);
  const isErrorPresent = errorFunction($("#error-message"), response);
  if (!isErrorPresent) {
    $('#response').text("Your US Dollars exchange at a rate of " + response.conversion_rate + " to give you " + response.conversion_result.toFixed(2) + " " + response.target_code );
  }
}

$(document).ready(function () {
  $("#cash").submit(async function (event) {
    event.preventDefault();
    let number = $('#number-input').val();
    $("#response").removeClass("hidden");
    getConvertedCurrency(number);
    });
  });

