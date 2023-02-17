/////////////////////////////////////////////////////////////////////
//      VARIABLES
/////////////////////////////////////////////////////////////////////
import { data } from "/data.js";
const nav = document.querySelector("nav");
const cardsContainer = document.querySelector("#cards-container");
const string = data.map(card => {
    return `
    <div class="card">
        <img class="image"
            src="${card.image}"
            alt="${card.title} image" />
        <p class="title">${card.title}</p>
        <p class="length">Length: ${card.distance} km - Est. ${card.duration} h</p>
        <p class="description">${card.description}</p>
        <a class="link" href="${card.link}" target="_self">learn more</a>
    </div>
    `
}).join("");

cardsContainer.innerHTML = string;
/////////////////////////////////////////////////////////////////////
//      FUNCTIONS
/////////////////////////////////////////////////////////////////////
function handleClick(e) {
    if (e.target.id === "menu-btn") {
        nav.classList.toggle("menu-open");
    }
}

function handleWidthChange() {
    if (document.body.clientWidth > 1019 && nav.classList.contains("menu-open")) {
        nav.classList.remove("menu-open");
    }
}

/////////////////////////////////////////////////////////////////////
//      EVENT LISTENERS
/////////////////////////////////////////////////////////////////////
document.addEventListener("click", handleClick);

window.addEventListener("resize", handleWidthChange);