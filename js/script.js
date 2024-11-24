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

// darkmode fitur
let darkmode = localStorage.getItem("darkmode");
let switchButton = document.querySelectorAll("#theme-switch");
let navbar = document.querySelector("nav");
let canvas = document.getElementById("offcanvasExample");
let section = document.querySelectorAll("section");
let buttonA = document.querySelectorAll("a.button");
let buttonB = document.querySelectorAll("button.button");
let cardProjects = document.querySelectorAll("div.card.card-projects");
let contact = document.getElementById("card-form");
let footer = document.querySelector(".footer");
let footerText = document.querySelector(".footer-text");

for (let i = 0; i < switchButton.length; i++) {
    switchButton[i].addEventListener("click", function () {
        darkmode = localStorage.getItem("darkmode");
        darkmode !== "active" ? enableDarkmode() : disableDarkmode();
        console.log(darkmode);
    });
}

if (darkmode === "active") enableDarkmode();

function enableDarkmode() {
    localStorage.setItem("darkmode", "active");
    navbar.classList.add("dark");
    canvas.classList.add("dark");
    for (let i = 0; i < section.length; i++) {
        section[i].classList.add("dark");
    }
    for (let i = 0; i < buttonA.length; i++) {
        buttonA[i].classList.add("dark");
    }
    for (let i = 0; i < buttonB.length; i++) {
        buttonB[i].classList.add("dark");
    }
    for (let i = 0; i < switchButton.length; i++) {
        switchButton[i].classList.add("dark");
    }
    for (let i = 0; i < cardProjects.length; i++) {
        cardProjects[i].classList.add("dark");
    }
    contact.classList.add("dark");
    footer.classList.add("dark");
    footerText.classList.add("dark");
}

function disableDarkmode() {
    localStorage.clear();
    navbar.classList.remove("dark");
    canvas.classList.remove("dark");
    for (let i = 0; i < section.length; i++) {
        section[i].classList.remove("dark");
    }
    for (let i = 0; i < buttonA.length; i++) {
        buttonA[i].classList.remove("dark");
    }
    for (let i = 0; i < buttonB.length; i++) {
        buttonB[i].classList.remove("dark");
    }
    for (let i = 0; i < switchButton.length; i++) {
      switchButton[i].classList.remove('dark')
    }
    for (let i = 0; i < cardProjects.length; i++) {
        cardProjects[i].classList.remove("dark");
    }
    contact.classList.remove("dark");
    footer.classList.remove("dark");
    footerText.classList.remove("dark");
}
