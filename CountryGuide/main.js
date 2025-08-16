// Get references to important DOM elements
let search = document.getElementById('search');
let result = document.getElementById("result");
let countryInp = document.getElementById('country');

// Add click event listener to the search button
search.addEventListener('click', () => {
    // Get the input value and trim extra spaces
    let countryName = countryInp.value.trim();

    // If input is empty, show error message and stop execution
    if (!countryName) {
        result.innerHTML = "<p>Please enter a country name.</p>";
        return;
    }

    // Build the REST Countries API URL with the given country name
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    // Fetch data from the REST Countries API
    fetch(finalURL)
        .then((response) => response.json()) // Convert response to JSON
        .then((data) => {
            // Extract the first matching country object
            let country = data[0];

            // Dynamically get the currency name (key may vary by country)
            let currencyKey = Object.keys(country.currencies)[0];
            let currency = country.currencies[currencyKey].name;

            // Insert the country details into the result container
            result.innerHTML = `
              <img src="${country.flags.svg}" class="flag-img">
              <h2>${country.name.common}</h2>
              <div class="wrapper"><h4>Capital:</h4> <span>${country.capital[0]}</span></div>
              <div class="wrapper"><h4>Continent:</h4> <span>${country.continents[0]}</span></div>
              <div class="wrapper"><h4>Population:</h4> <span>${country.population.toLocaleString()}</span></div>
              <div class="wrapper"><h4>Currency:</h4> <span>${currency} - ${currencyKey}</span></div>
              <div class="wrapper"><h4>Common Languages:</h4> <span>${Object.values(country.languages).join(", ")}</span></div>
            `;
        })
        .catch(() => {
            // Handle errors (e.g., invalid country name or network issues)
            result.innerHTML = "<p>Country not found ❌</p>";
        });
});
