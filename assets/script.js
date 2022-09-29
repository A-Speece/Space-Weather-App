//Request link for the APOD call
var apodRequestLink = "https://api.nasa.gov/planetary/apod?api_key=Us6SCvqicethXJF9XZMvhpLxkwxbofi3k65LCDTa";

//Request link for the DONKI call
var donkiRequestLink = "https://api.nasa.gov/DONKI/notifications?startDate=2022-09-25&endDate=2022-09-27&type=all&api_key=Us6SCvqicethXJF9XZMvhpLxkwxbofi3k65LCDTa";

// Variables used for the daily page
var apodImgLink = document.getElementById("daily-pic");
var apodDescription = document.getElementById("pic-desc");
var apodTitle = document.getElementById("pic-title");
var apodDate = document.getElementById("pic-date");

//Variables for the index page
var dateForm = document.getElementById("dateSubmit");
var eventCard = document.getElementById("main-page-event-card");

//Pull request for the Picture of the Day API
function apodApiCall(){
fetch(
    apodRequestLink
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      //Updating varibales for daily page
        apodImgLink.src = data.url;
        apodDescription.textContent = data.explanation;
        apodTitle.textContent = data.title;
        apodDate.textContent = data.date;
    });
}

//Fetch request for the DONKI API
function donkiApiCall(){
  fetch(
      donkiRequestLink
    )
      .then(function (res) {
          return res.json();
      })
      .then(function (data) {
          console.log(data);
      });
}

//Submit event to call the DONKI API
dateForm.addEventListener("submit", function(event){
  event.preventDefault();
  donkiApiCall();
  eventCard.style.display = "flex";
});

apodApiCall();