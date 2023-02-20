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
    <div data-link="${card.link}" class="explore-card">
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
    </div>
    `
}).join("");

const signupModal = document.querySelector("#signup-modal");
const loginModal = document.querySelector("#login-modal");


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
    } else if (e.target.classList[0] === "remove-btn") {
        toggleModalVisibilty(e.target.classList[0]);
    } else if (e.target.dataset.id === "sign-up" || e.target.dataset.id === "log-in") {
        toggleModalVisibilty(e.target.dataset.id);
    } else if (e.target.id === "sign-up-btn") {
        handleSubmit(e);
    } else if (e.target.classList[0] === "explore-card") {
        handleMap(e);
    }
}

function handleWidthChange() {
    if (document.body.clientWidth > 1019 && nav.classList.contains("menu-open")) {
        nav.classList.remove("menu-open");
    }
}

function handleSubmit(e) {
    e.preventDefault();
    const signupForm = document.querySelector("#signup-form");

    const res = signupForm.children[0].children[1].value;

    alert(res);
}

function toggleModalVisibilty(id) {
    if (id === "sign-up") {
        signupModal.classList.toggle("hidden");
    } else if (id === "log-in") {
        loginModal.classList.toggle("hidden");
    } else if (id === "remove-btn") {
        if (!signupModal.classList.contains("hidden")) {
            signupModal.classList.toggle("hidden");
        } else if (!loginModal.classList.contains("hidden")) {
            loginModal.classList.toggle("hidden");
        }
    }
}

function handleMap(e) {
    document.getElementById("map").src = e.target.dataset.link;
}
/////////////////////////////////////////////////////////////////////
//      EVENT LISTENERS
/////////////////////////////////////////////////////////////////////
document.addEventListener("click", handleClick);

window.addEventListener("resize", handleWidthChange);