

//Request link for the DONKI call
var donkiRequestLink =
  "https://api.nasa.gov/DONKI/notifications?startDate=2022-09-25&endDate=2022-09-27&type=all&api_key=Us6SCvqicethXJF9XZMvhpLxkwxbofi3k65LCDTa";



//Variables for the index page
var dateForm = document.getElementById("dateSubmit");
var eventCard = document.getElementById("main-page-event-card");



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

//Submit event to call the DONKI API
dateForm.addEventListener("submit", function (event) {
  event.preventDefault();
  donkiApiCall();
  eventCard.style.display = "flex";
});

