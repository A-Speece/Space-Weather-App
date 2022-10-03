//Request link for the NEOW call
var NEOWRequestLink = "";
var neowArray = [];
var dateSubmitInput = "";

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
      console.log(data);
      neowArray = data.near_earth_objects[dateSubmitInput];
      console.log(neowArray);
      for (var I = 0; I < neowArray.length; I++) {}
    });
}

function getStorageDate() {
  dateSubmitInput = localStorage.getItem("submittedDates");
  console.log(dateSubmitInput);
}

NEOWApiCall();
