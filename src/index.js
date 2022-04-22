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
async function getCurrency() {
  $("#response").removeClass("hidden");
  const url = `https://v6.exchangerate-api.com/v6/754dd9bc6e3b9ddd9e0c6b5f/latest/USD`;
  const response = await ApiCall.getCurrency(url);
  console.log(response);
  const isErrorPresent = errorFunction($(""), response);
  if (!isErrorPresent) {
    $('#response').text("");
    }
  }
$(document).ready(function () {
  $("#cash").submit(async function (event) {
    event.preventDefault();
    let money = $("#number-input").val();
    // const body = JSON.parse(response);
    getCurrency(money);
  });
});
