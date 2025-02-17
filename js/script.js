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
const offcanvas = document.querySelector("div#offcanvasExample");
const navbar = document.querySelector("nav.nav");
const home = document.querySelector("section.home");
const button = document.querySelector("a.button");
const about = document.querySelector("section.about");
const readMore = document.querySelector("button.button");
const projects = document.querySelector("section.projects");
const contact = document.querySelector("section.contact");
const formBtn = document.querySelector("form.form button.button");
const socials = document.querySelectorAll("#socials .button");

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
    offcanvas.classList.add("dark-mode");
    navbar.classList.add("dark-mode");
    home.classList.add("dark-mode");
    button.classList.add("dark-mode");
    about.classList.add("dark-mode");
    readMore.classList.add("dark-mode");
    projects.classList.add("dark-mode");
    contact.classList.add("dark-mode");
    formBtn.classList.add("dark-mode");
    for (let i = 0; i < socials.length; i++) {
        socials[i].classList.add("dark-mode");
    }
    darkModeToggle.classList.add("active");
    darkModeBall.classList.add("active");
    localStorage.setItem("darkMode", "enabled");
}

function disableDarkMode() {
    body.classList.remove("dark-mode");
    offcanvas.classList.remove("dark-mode");
    navbar.classList.remove("dark-mode");
    home.classList.remove("dark-mode");
    button.classList.remove("dark-mode");
    about.classList.remove("dark-mode");
    readMore.classList.remove("dark-mode");
    projects.classList.remove("dark-mode");
    contact.classList.remove("dark-mode");
    formBtn.classList.remove("dark-mode");
    for (let i = 0; i < socials.length; i++) {
        socials[i].classList.remove("dark-mode");
    }
    darkModeToggle.classList.remove("active");
    darkModeBall.classList.remove("active");
    localStorage.setItem("darkMode", null);
}
