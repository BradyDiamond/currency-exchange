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
  const isErrorPresent = errorFunction($("#image-of-day"), response);
  $("#response").removeClass("hidden");
  if (!isErrorPresent) {
    const imgUrl = response.url;
    const type = imgUrl.slice(-3);
    $("#date-image").removeClass("hidden");
    $("#date-video").removeClass("hidden");
    if (type === "jpg") {
      $("#date-image").attr("src", `${imgUrl}`);
      $("#date-video").addClass("hidden");
    } else {
      $("#date-video").attr("src", `${imgUrl}`);
      $("#date-image").addClass("hidden");
    }
  }
}
$(document).ready(function () {
  $("#birthday").submit(async function (event) {
    event.preventDefault();
    const date = $("#date-input").val();
    var yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    if (date > today) {
      $("#error-message").text(
        "The date you entered is invalid. Please enter a new date"
      );
    } else {
      $("#error-message").text("");
      const month = date.slice(5);
      const newDate = `2021-${month}`;
      $("#photo-block").text("");
      getSpaceImageOfDay(newDate);
      getRoverPhotos(newDate);
      getNewYorkTimesArticles(date);
      getTop10Songs(date);
    }
  });
});
