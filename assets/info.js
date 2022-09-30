
var response = JSON.parse(req.responseText);


req.open("GET", url + api_key, true);
req.send();