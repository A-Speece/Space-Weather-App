//Request link for the APOD call
var requestLink = "https://api.nasa.gov/planetary/apod?api_key=Us6SCvqicethXJF9XZMvhpLxkwxbofi3k65LCDTa";

// Variables used for the daily page
var imgLink = document.getElementById("daily-pic");
var description = document.getElementById("pic-desc");
var title = document.getElementById("pic-title");
var date = document.getElementById("pic-date");

//Pull request for the Picture of the Day API
function apiCall(){
fetch(
    requestLink
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
        imgLink.src = data.url;
        description.textContent = data.explanation;
        title.textContent = data.title;
        date.textContent = data.date;
    });
}

apiCall();