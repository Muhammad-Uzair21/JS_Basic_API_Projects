// Get references to HTML elements
let result = document.getElementById("result"); // Where weather info will be displayed
let inpCity = document.getElementById("city"); // Input field for city name
let searchBTN = document.getElementById("search-btn"); // Search button

// Function to fetch and display weather data
let getWeather = () => {
  let cityValue = inpCity.value; // Get the value entered in the input

  // If no city name is entered
  if (cityValue.length === 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city</h3>`;
  } else {
    // API URL with city name, key, and units (Celsius)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;

    // Clear the input field after search
    inpCity.value = "";
    
    // Loading animation
    result.innerHTML = `<h3 class="loader"></h3>`;

    // Fetch weather data from API
    fetch(url)
      .then((resp) => resp.json()) // Convert response to JSON
      .then((data) => {
        // Show weather details in the "result" div
        result.innerHTML = `
          <h2 class="city-name">${data.name}</h2>
          <h4 class="weather">${data.weather[0].main}</h4>
          <h4 class="desc">${data.weather[0].description}</h4>
          <img src='https://openweathermap.org/img/w/${data.weather[0].icon}.png' />
          <h1>${data.main.temp}&#176</h1>
          <div class="temp-cont">
            <div>
              <h4 class="title">min</h4>
              <h4 class="temp">${data.main.temp_min}</h4>
            </div>
            <div>
              <h4 class="title">max</h4>
              <h4 class="temp">${data.main.temp_max}</h4>
            </div>
          </div>
        `;
      })
      // If API fails (e.g., city not found)
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};

// Run getWeather when the search button is clicked
searchBTN.addEventListener("click", getWeather);

// Automatically show weather for default city (on page load)
window.addEventListener("load", getWeather);
