//Request link for the DONKI call
var donkiRequestLink =
  "https://api.nasa.gov/DONKI/notifications?startDate=2022-09-25&endDate=2022-09-27&type=all&api_key=Us6SCvqicethXJF9XZMvhpLxkwxbofi3k65LCDTa";
//Variables for the index page
var dateForm = document.getElementById("dateSubmit");
var eventCard = document.getElementById("main-page-event-card");
var eventCardImage = document.getElementById("event-card-image");
var cardTitle = document.querySelector(".card-title");

//Request link for the APOD call
var apodRequestLink =
  "https://api.nasa.gov/planetary/apod?api_key=Us6SCvqicethXJF9XZMvhpLxkwxbofi3k65LCDTa";

//Fetch request for the DONKI API
function donkiApiCall(event) {
  fetch(donkiRequestLink)
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

//Submit event to call the DONKI API
dateForm.addEventListener("submit", function (event) {
  event.preventDefault();
  donkiApiCall();
  apodApiCall();
  eventCard.style.display = "flex";
});
