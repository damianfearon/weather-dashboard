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
  

//  Use moment.js to generate current date


//  Retrieve icon code from API and assign to a variable


//  Build main card with weather icon

//  Combine city name, date, and moment format into a single variable

// Display name of city in main card

// Display icon on the main card

// Convert temperature from Kelvin and remove decimal places

// Create a variable to store the next request for UV index from API response

// Make individual API request for UV index and store response in a variable

//  Send separate API request for UV index, using latitude and longitude

// Display UV index in main card

// Implement function for 5-day forecast API call

//  Display 5 columns from forecast API response

//  Show humidity in the dashboard
