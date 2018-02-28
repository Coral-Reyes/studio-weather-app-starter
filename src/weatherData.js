import 'whatwg-fetch'

var apiUrl = 'https://api.openweathermap.org/data/2.5/';
var apiKey = 'appid=48a16a28785985cd59d5b532dfa13781';
  
function parseJSON(response) {
  return response.json();
}

export default function getForecast(callback) {
  fetch(apiUrl + 'forecast?q=New%20York&units=imperial&' + apiKey)
    .then(parseJSON)
    .then(callback);
}