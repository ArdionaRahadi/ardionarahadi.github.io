new Typewriter("#typewriter", {
    strings: ["XII TKJ 3"],
    autoStart: true,
    loop: true
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".illustration", {
    duration: 1.5,
    x: 200,
    opacity: 0,
    ease: "back.out(1.7)"
});

gsap.from(".welcome-content", {
    duration: 1.5,
    x: -200,
    opacity: 0,
    ease: "power2.out"
});

gsap.from("nav", {
    duration: 1.2,
    y: -100,
    opacity: 0,
    ease: "power2.out"
});

// Dark Mode Toggle
const darkModeToggle = document.querySelector(".dark-mode-button");
const darkModeBall = document.querySelector(".dark-mode-ball");
const body = document.body;
const nav = document.querySelector(".nav");
const sidebar = document.querySelector(".sidebar");
const home = document.querySelector(".home");
const btnViewResume = document.querySelector(".home .button-view-resume");
const about = document.querySelector(".about");
const btnReadMore = document.querySelector(".about .button-read-more");
const projects = document.querySelector(".projects");
const btn = document.querySelectorAll(".button-projects");
const card = document.querySelectorAll(".card-projects");
const contact = document.querySelector(".contact");
const form = document.querySelector(".card-form");
const input = document.querySelectorAll(".card-form form input");
const textarea = document.querySelector(".card-form form textarea");
const btnForm = document.querySelector(".contact .button-send-form");
const footer = document.querySelector(".footer");
// Check for saved dark mode preference
if (localStorage.getItem("darkMode") === "enabled") {
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add("dark-mode");
    nav.classList.add("dark-mode");
    sidebar.classList.add("dark-mode");
    home.classList.add("dark-mode");
    btnViewResume.classList.add("dark-mode");
    about.classList.add("dark-mode");
    btnReadMore.classList.add("dark-mode");
    projects.classList.add("dark-mode");
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.add("dark-mode");
    }
    for (let i = 0; i < card.length; i++) {
        card[i].classList.add("dark-mode");
    }
    contact.classList.add("dark-mode");
    form.classList.add("dark-mode");
    for (let i = 0; i < input.length; i++) {
        input[i].classList.add("dark-mode");
    }
    textarea.classList.add("dark-mode");
    btnForm.classList.add("dark-mode");
    footer.classList.add("dark-mode")
    darkModeToggle.classList.add("active");
    darkModeBall.classList.add("active");
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    body.classList.remove("dark-mode");
    nav.classList.remove("dark-mode");
    sidebar.classList.remove("dark-mode");
    home.classList.remove("dark-mode");
    btnViewResume.classList.remove("dark-mode");
    about.classList.remove("dark-mode");
    btnReadMore.classList.remove("dark-mode");
    projects.classList.remove("dark-mode");
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove("dark-mode");
    }
    for (let i = 0; i < card.length; i++) {
        card[i].classList.remove("dark-mode");
    }
    contact.classList.remove("dark-mode");
    form.classList.remove("dark-mode");
    for (let i = 0; i < input.length; i++) {
        input[i].classList.remove("dark-mode");
    }
    textarea.classList.remove("dark-mode");
    btnForm.classList.remove("dark-mode");
    footer.classList.remove("dark-mode")
    darkModeToggle.classList.remove("active");
    darkModeBall.classList.remove("active");
    localStorage.setItem("darkMode", null);
}
