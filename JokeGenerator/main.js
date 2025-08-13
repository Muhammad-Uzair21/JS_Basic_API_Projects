const joke = document.getElementById("Joke")
const button = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political&type=single"

let getJoke = () =>(

    fetch(url).then(data => data.json())
    .then(item => {
        joke.innerHTML = `${item.joke}`
    })
)
button.addEventListener("click", getJoke)
getJoke()