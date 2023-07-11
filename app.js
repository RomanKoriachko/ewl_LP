// --- Navigation ---

const aboutBtn = document.querySelector("#about-btn");
const vacancyBtn = document.querySelector("#vacancies-btn");
const conditionsBtn = document.querySelector("#conditions-btn");
const reviewsbtn = document.querySelector("#reviews-btn");
const contactsBtn = document.querySelector("#contacts-btn");

const aboutSection = document.querySelector(".about-section");
const conditionsSection = document.querySelector(".conditions-section");
const reviewSection = document.querySelector(".review-section");

const buttons = document.querySelectorAll(".main-btn");
const introduceBtn = document.querySelector(".introduce-section-btn");
const contacts = document.querySelector(".footer");

aboutBtn.addEventListener("click", () => {
    window.scrollTo({
        top:
            aboutSection.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: "smooth",
    });
});
conditionsBtn.addEventListener("click", () => {
    window.scrollTo({
        top:
            conditionsSection.getBoundingClientRect().top +
            window.pageYOffset -
            100,
        behavior: "smooth",
    });
});
reviewsbtn.addEventListener("click", () => {
    window.scrollTo({
        top:
            reviewSection.getBoundingClientRect().top +
            window.pageYOffset -
            100,
        behavior: "smooth",
    });
});
contactsBtn.addEventListener("click", () => {
    window.scrollTo({
        top: contacts.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: "smooth",
    });
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        window.scrollTo({
            top:
                contacts.getBoundingClientRect().top + window.pageYOffset - 100,
            behavior: "smooth",
        });
    });
}
introduceBtn.addEventListener("click", () => {
    window.scrollTo({
        top: contacts.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: "smooth",
    });
});

// ---

// --- Sliders ---

$(document).ready(function () {
    $(".housing-slider").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
    });
});

$(document).ready(function () {
    $(".review-slider").slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        variableWidth: true,
    });
});

// ---
