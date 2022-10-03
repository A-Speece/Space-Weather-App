//Request link for the NEOW call
var NEOWRequestLink = "";
var neowArray = [];
var dateSubmitInput = "";
var dailyContent = document.querySelector(".dailyContent");

//function to call the near earth object api//
function NEOWApiCall() {
  getStorageDate();
  NEOWRequestLink =
    "https://api.nasa.gov/neo/rest/v1/feed?start_date=" +
    dateSubmitInput +
    "&end_date=" +
    dateSubmitInput +
    "&api_key=Us6SCvqicethXJF9XZMvhpLxkwxbofi3k65LCDTa";
  fetch(NEOWRequestLink)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      
      neowArray = data.near_earth_objects[dateSubmitInput];

      // for loop setup to read the data sent back from the near earth api
      // and create card in the html and append data from the api to the card
      for (var I = 0; I < neowArray.length; I++) {
        var cardDiv = document.createElement("div");

        if (neowArray[I].is_potentially_hazardous_asteroid) {
          cardDiv.setAttribute("class", " card haz-card");
        } else {
          cardDiv.setAttribute("class", "card nonhaz-card");
        }
        dailyContent.append(cardDiv);

        var name = document.createElement("h5");
        var size = document.createElement("li");
        var missDistance = document.createElement("li");
        var speed = document.createElement("li");
        name.textContent = "Name: " + neowArray[I].name;
        size.textContent =
          "Size: " +
          neowArray[I].estimated_diameter.miles.estimated_diameter_min +
          " (mi)" +
          " to " +
          neowArray[I].estimated_diameter.miles.estimated_diameter_max +
          " (mi)";
        missDistance.textContent =
          "Distance missed from Earth: " +
          neowArray[I].close_approach_data[0].miss_distance.miles +
          " (mi)";
        speed.textContent =
          "Miles Per Hour: " +
          neowArray[I].close_approach_data[0].relative_velocity.miles_per_hour +
          " (mph)";

        cardDiv.append(name);
        cardDiv.append(size);
        cardDiv.append(missDistance);
        cardDiv.append(speed);
      }
    });
}

// function to get the input date from local storage to be used for the api call//
function getStorageDate() {
  var dateArray = JSON.parse(localStorage.getItem("submittedDates"));
  dateSubmitInput = dateArray[dateArray.length-1];
  console.log(dateSubmitInput);
}

NEOWApiCall();
