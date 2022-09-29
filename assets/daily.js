//Request link for the APOD call
var apodRequestLink =
  "https://api.nasa.gov/planetary/apod?api_key=Us6SCvqicethXJF9XZMvhpLxkwxbofi3k65LCDTa";

// Variables used for the daily page
var apodImgLink = document.getElementById("daily-pic");
var apodDescription = document.getElementById("pic-desc");
var apodTitle = document.getElementById("pic-title");
var apodDate = document.getElementById("pic-date");

//Pull request for the Picture of the Day API
function apodApiCall() {
  fetch(apodRequestLink)
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
apodApiCall();
