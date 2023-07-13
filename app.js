// --- Navigation ---

const aboutBtn = document.querySelector("#about-btn");
const vacancyBtn = document.querySelector("#vacancies-btn");
const conditionsBtn = document.querySelector("#conditions-btn");
const reviewsbtn = document.querySelector("#reviews-btn");
const contactsBtn = document.querySelector("#contacts-btn");

const aboutSection = document.querySelector(".about-section");
const conditionsSection = document.querySelector(".conditions-section");
const reviewSection = document.querySelector(".review-section");
const requirementsSection = document.querySelector(".requirements-section");

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
vacancyBtn.addEventListener("click", () => {
    window.scrollTo({
        top:
            requirementsSection.getBoundingClientRect().top +
            window.pageYOffset -
            100,
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
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: "60px",
                    variableWidth: true,
                },
            },
        ],
    });
});

$(document).ready(function () {
    $(".housing-mobile-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
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

// --- Burger menu ---

const openBurgerBtn = document.querySelector(".burger-menu-btn");
const closeBurgerBtn = document.querySelector(".burger-menu-close-btn");
const burgerMenu = document.querySelector(".burger-menu");

openBurgerBtn.addEventListener("click", () => {
    burgerMenu.classList.add("active");
});
closeBurgerBtn.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
});

// ---
