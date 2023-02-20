/////////////////////////////////////////////////////////////////////
//      VARIABLES
/////////////////////////////////////////////////////////////////////
import { data } from "/data.js";
const nav = document.querySelector("nav");
const cardsContainer = document.querySelector("#cards-container");
const exploreCardsContainer = document.querySelector("#explore-cards-container");
const cardsElements = data.home.map(card => {
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
const exploreCardsElements = data.explore.map(card => {
    return `
    <a href="${card.link}" class="explore-card">
        <img class="image"
            src="${card.image}"
            alt="${card.title} image" />
        <p href="${card.link}" class="title">${card.title}</p>
        <div class="rating-info">
            <p class="level">${card.level}</p>
            <i class="fa-solid fa-star green"></i>
            <p class="rating">${card.rating}</p>
            <p class="comments-amount">(${card.comments})</p>
        </div>
        <p class="description">${card.description}</p>
    </a>
    `
}).join("");


if (cardsContainer)
    cardsContainer.innerHTML = cardsElements;

if (exploreCardsContainer)
    exploreCardsContainer.innerHTML = exploreCardsElements;

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