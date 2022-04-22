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
function getConvertedCurrency() {
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
  const response = ApiCall.GetCurrency(url);
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

