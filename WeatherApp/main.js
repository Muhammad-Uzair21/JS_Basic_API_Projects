let result = document.getElementById("result")
let inpCity = document.getElementById("city")
let searchBTN = document.getElementById("search-btn")

let getWeather = () => {
    let cityValue = inpCity.value
    let url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
}

window.addEventListener("load", getWeather)