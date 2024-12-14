const head = [
    "Нам потрібна ваша опіка",
    "Врятуй життя, прихисти улюбленця",
    "Всиновлюйте, а не купуйте"
];
const text = [
    "Шукаєте пухнастого друга, який принесе радість і любов у ваш дім? У нашому притулку ми віримо, що кожна тварина заслуговує на люблячий дім назавжди. Наш притулок населений чарівними тваринами, які з нетерпінням чекають, щоб стати частиною вашої родини.",
    "Приймаючи у своє життя пухнастого друга з нашого притулку, ви не тільки збагачуєте своє власне життя, але й робите внесок у велику справу захисту та порятунку тварин. Разом ми можемо змінити майбутнє. Тож, зробіть крок, відкрийте своє серце і дозвольте нашим тваринам залишити вічний слід у вашому житті.",
    "Вибираючи притулок Paw Sanctuary, ви не просто даєте тварині другий шанс, ви отримуєте вірного компаньйона, який наповнить ваше життя радістю, сміхом і безумовною любов'ю. Будь то грайливе цуценя, кіт або кролик, кожна тварина має унікальну історію та стійкий дух, який чекає, щоб розквітнути в люблячому домі."
];
const color = ["#4890D1", "#4BB54F", "#AF4F60"];
const textBgColor = ["#001C64bd", "#004D08bd", "#4D001Cbd"];
const image = ["../images/carro1img.webp", "../images/carro2img.webp", "../images/carro3img.webp"];
const bg = ['url("../images/carro1bg.webp")', 'url("../images/carro2bg.webp")', 'url("../images/carro3bg.webp")'];

let carousel = document.getElementById("carousel"),
    carouselHead = document.getElementById("carouselHead"),
    carouselText = document.getElementById("carouselText"),
    carouselTextContainer = document.getElementById("carouselTextContainer"),
    carouselImg = document.getElementById("carouselImg"),
    carouselSelect1 = document.getElementById("carouselSelect1"),
    carouselSelect2 = document.getElementById("carouselSelect2"),
    carouselSelect3 = document.getElementById("carouselSelect3"),
    carouselSelected1 = document.getElementById("carouselSelected1"),
    carouselSelected2 = document.getElementById("carouselSelected2"),
    carouselSelected3 = document.getElementById("carouselSelected3")

function caro1Selected(){
    carouselSelected1.classList.remove("hidden")
    carouselSelected2.classList.add("hidden")
    carouselSelected3.classList.add("hidden")

    carouselHead.innerText = head[0]
    carouselText.innerText = text[0]
    carousel.style.backgroundColor = color[0]
    carouselTextContainer.style.backgroundColor = textBgColor[0]
    carousel.style.backgroundImage = bg[0]
    carouselImg.src = image[0]
}

function caro2Selected(){
    carouselSelected1.classList.add("hidden")
    carouselSelected2.classList.remove("hidden")
    carouselSelected3.classList.add("hidden")

    carouselHead.innerText = head[1]
    carouselText.innerText = text[1]
    carousel.style.backgroundColor = color[1]
    carouselTextContainer.style.backgroundColor = textBgColor[1]
    carousel.style.backgroundImage = bg[1]
    carouselImg.src = image[1]
}

function caro3Selected(){
    carouselSelected1.classList.add("hidden")
    carouselSelected2.classList.add("hidden")
    carouselSelected3.classList.remove("hidden")

    carouselHead.innerText = head[2]
    carouselText.innerText = text[2]
    carousel.style.backgroundColor = color[2]
    carouselTextContainer.style.backgroundColor = textBgColor[2]
    carousel.style.backgroundImage = bg[2]
    carouselImg.src = image[2]
}

carouselSelect1.addEventListener("click", function(event){
    event.preventDefault()
    caro1Selected()
    clearInterval(timedCarousel)
    i = 0
    let timedCarousel = setInterval(timedCarouselChange, 10000)
})

carouselSelect2.addEventListener("click", function(event){
    event.preventDefault()
    caro2Selected()
    clearInterval(timedCarousel)
    i = 1
    let timedCarousel = setInterval(timedCarouselChange, 10000)
})

carouselSelect3.addEventListener("click", function(event){
    event.preventDefault()
    caro3Selected()
    clearInterval(timedCarousel)
    i = 2
    let timedCarousel = setInterval(timedCarouselChange, 10000)
})

let i = 1

function timedCarouselChange(){
  if (i == 0){
    caro1Selected()
    i += 1
  }else if(i == 1){
    caro2Selected()
    i += 1
  }else if(i == 2){
    caro3Selected()
    i = 0
  }
}

let timedCarousel = setInterval(timedCarouselChange, 10000)