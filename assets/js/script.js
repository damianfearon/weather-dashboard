//  Declare a variable for city list
var searchHistory = [];

//  Implement function to retrieve local storage history
function getItems() {
    var storedCities = JSON.parse(localStorage.getItem("searchHistory"));
    if (storedCities !== null) {
        searchHistory = storedCities;
    };
// Store up to 8 cities in local storage as a list
for (i = 0; i < searchHistory.length; i++) {
    if (i == 8) {
        break;
      }
      cityListButton = $("<a>").attr({
        class: "list-group-item list-group-item-action",
        href: "#"
    }); 
// Add history button below search field using append
cityListButton.text(searchHistory[i]);
$(".list-group").append(cityListButton);
}
};
var city;
var mainCard = $(".card-body");
// invokes getItems
getItems();

// main card
function getData() {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=519b0c10fc7659f2935f72b6aee733ae"
    mainCard.empty();
    $("#weeklyForecast").empty();

    // requests
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

//  Use moment.js to generate current date
var date = moment().format(" DD/MM/YYYY");


//  Retrieve icon code from API and assign to a variable
var iconCode = response.weather[0].icon;


//  Build main card with weather icon
var iconURL = "http://openweathermap.org/img/w/" + iconCode + ".png";

//  Combine city name, date, and moment format into a single variable
var name = $("<h3>").html(city + date);

// Display name of city in main card
mainCard.prepend(name);

// Display icon on the main card
mainCard.append($("<img>").attr("src", iconURL));

// Convert temperature from Kelvin and remove decimal places
var temp = Math.round (response.main.temp - 273.15);
mainCard.append($("<p>").html("Temperature: " + temp + " &deg;C"));
        var humidity = response.main.humidity;
        mainCard.append($("<p>").html("Humidity: " + humidity + " %")) ;
        var windSpeed = response.wind.speed;
        mainCard.append($("<p>").html("Wind Speed: " + windSpeed + " mph"));

// Create a variable to store the next request for UV index from API response
var lat = response.coord.lat;
var lon = response.coord.lon;

//  Send separate API request for UV index, using latitude and longitude
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/uvi?appid=519b0c10fc7659f2935f72b6aee733ae&lat=" + lat + "&lon=" + lon,
    method: "GET"


// Display UV index in main card
}).then(function (response) {
    mainCard.append($("<p>").html("UV Index: <span>" + response.value + "</span>"));
    // 
    if (response.value <= 2) {
        $("span").attr("class", "btn btn-outline-success");
    };
    if (response.value > 2 && response.value <= 5) {
        $("span").attr("class", "btn btn-outline-warning");
    };
    if (response.value > 5) {
        $("span").attr("class", "btn btn-outline-danger");
    };
})
// Implement function for 5-day forecast API call
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=519b0c10fc7659f2935f72b6aee733ae&",
    method: "GET"
//  Display 5 columns from forecast API response

//  Show humidity in the dashboard











