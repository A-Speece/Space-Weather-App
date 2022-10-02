//Request link for the NEOW call
var NEOWRequestLink = "";

//Variables for the index page
var dateForm = document.getElementById("dateSubmit");
var eventCard = document.getElementById("main-page-event-card");
var eventCardImage = document.getElementById("event-card-image");
var cardTitle = document.querySelector(".card-title");
var inputDate = document.querySelector(".datepicker");
var dateSubmitInput = "";
var cardlist = document.getElementById("neowItems")
var neowArray=[]

//Request link for the APOD call
var apodRequestLink = "";
var currentDate = new Date().toJSON().slice(0, 10);
 
//Fetch request for the NEOW API
function NEOWApiCall() {
  fetch(NEOWRequestLink)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) { 
      neowArray = data.near_earth_objects[dateSubmitInput]
    
      console.log(neowArray)

      for (var I = 0; I < neowArray.length; I++) {
        var li = document.createElement("li");
        li.textContent = neowArray[I].name;
        if(neowArray[I].is_potentially_hazardous_asteroid){
          li.setAttribute("class", "neow haz");
        } else {
          li.setAttribute("class", "neow nonhaz");
        }
        cardlist.append(li);
      }

    });

}

//Function to remove children from the ordred list
function emptyList(){
  if(cardlist.children.length > 0){
    var item = document.querySelector(".neow");
    cardlist.removeChild(item);
    emptyList();
  }
}
 
//Pull request for the Picture of the Day API
function apodApiCall() {
  fetch(apodRequestLink)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {

      if(typeof data.url == "undefined"){
        eventCardImage.src = "https://www.nasa.gov/sites/default/files/thumbnails/image/main_image_deep_field_smacs0723-5mb.jpg";
        cardTitle.textContent = "Webb’s First Deep Field";
      }
      else{
        eventCardImage.src = data.url;
        cardTitle.textContent = data.title;
      }
    });
}

//Submit event to call the both APOD and NEOWs API
dateForm.addEventListener("submit", function (event) {
  event.preventDefault();
  dateSubmitInput = String(inputDate.value);

  emptyList();
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
