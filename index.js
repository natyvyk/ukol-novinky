const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9"

const novinky = document.querySelector(".news")
novinky.style.backgroundColor = "white"
novinky.style.width = "60rem"

document.querySelector("h1").classList.add("news__title")
document.querySelector("h1").textContent = "Aktuální novinky"

document.querySelector("#zprava1").classList.add("post--main")

document.querySelector("#zprava3 img").src = "images/zprava3-novy.jpg"