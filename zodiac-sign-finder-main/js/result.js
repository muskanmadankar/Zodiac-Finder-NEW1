const zodiacSign = sessionStorage.getItem("zodiacSign");
const zodiacDate = sessionStorage.getItem("zodiacDate");

if (!zodiacSign) {
  location.href = "./index.html";
}
document.title = `Your Zodiac - ${zodiacSign}`;

const imageElement = document.querySelector("img");
imageElement.src = `./icons/${zodiacSign}.svg`;
imageElement.alt = zodiacSign;
document.getElementById("zodiac-sign").innerHTML = zodiacSign;
document.getElementById("zodiac-date").innerHTML = zodiacDate;
