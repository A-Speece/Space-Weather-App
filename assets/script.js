//Request link for the NEOW call
var NEOWRequestLink = "";

//Variables for the index page
var dateForm = document.getElementById("dateSubmit");
var eventCard = document.getElementById("main-page-event-card");
var eventCardImage = document.getElementById("event-card-image");
var cardTitle = document.querySelector(".card-title");
var inputDate = document.querySelector(".datepicker");
var dateSubmitInput = "";

//Request link for the APOD call
var apodRequestLink = "";
 
//Fetch request for the NEOW API
function NEOWApiCall(event) {
  fetch(NEOWRequestLink)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

//Pull request for the Picture of the Day API
function apodApiCall() {
  fetch(apodRequestLink)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      eventCardImage.src = data.url;
      cardTitle.textContent = data.title;
    });
}

//Submit event to call the both APOD and NEOWs API
dateForm.addEventListener("submit", function (event) {
  event.preventDefault();
  dateSubmitInput = String(inputDate.value);

  NEOWRequestLink = "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
  dateSubmitInput + "&end_date=" +
  dateSubmitInput + "&api_key=Us6SCvqicethXJF9XZMvhpLxkwxbofi3k65LCDTa";
  NEOWApiCall();

  apodRequestLink = "https://api.nasa.gov/planetary/apod?date=" + dateSubmitInput + "&api_key=Us6SCvqicethXJF9XZMvhpLxkwxbofi3k65LCDTa";
  apodApiCall();
  eventCard.style.display = "flex";
});

//Initializing date submission form

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".datepicker");
  var instances = M.Datepicker.init(elems, { format: "yyyy-mm-dd" });
});
