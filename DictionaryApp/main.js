const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const samp = document.getElementById("samp");
const button = document.getElementById("search");
const sound = document.getElementById("audio");

button.addEventListener("click", () => {
  let inputWord = document.getElementById("input").value;
  fetch(`${url}${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `<div class="word">
                                <h3 id="samp">${inputWord}</h3>
                                <button id="sound" onClick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
                            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetic}</p>
            </div>
            <div class="sent">
                <p class="mean">${data[0].meanings[0].definitions[0].definition}</p>
                <p class="exp">${data[0].meanings[0].definitions[0].example}</p>
            </div>`;
      sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3 id="error">Couldn't find the word :(</h3>`;
    });
});

function playSound() {
  sound.play();
}
