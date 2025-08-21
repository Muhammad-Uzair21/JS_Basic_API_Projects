let result = document.getElementById("result");
let inpCity = document.getElementById("city");
let searchBTN = document.getElementById("search-btn");

let getWeather = () => {
  let cityValue = inpCity.value;

  if (cityValue.length === 0) {
    result.innerHTML = `<h3> PLease enter a city</h3>`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
      })
      .catch(()=>{result.innerHTML = `City not found</h3>`});
  }
};

window.addEventListener("load", getWeather);
