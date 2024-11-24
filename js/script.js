new Typewriter("#typewriter", {
  strings: ["XII TKJ 3"],
  autoStart: true,
  loop: true,
});

gsap.registerPlugin(ScrollTrigger);
gsap.from(".illustration", {
  duration: 1.5,
  x: 200,
  opacity: 0,
  ease: "back.out(1.7)",
});

gsap.from(".welcome-content", {
  duration: 1.5,
  x: -200,
  opacity: 0,
  ease: "power2.out",
});

gsap.from("nav", {
  duration: 1.2,
  y: -100,
  opacity: 0,
  ease: "power2.out",
});

// darkmode
let darkmode = localStorage.getItem("darkmode");
let switchButton = document.querySelectorAll("#theme-switch");
let buttonOne = document.querySelectorAll("a.button");
let buttonTwo = document.querySelectorAll("button.button");
let cardProjects = document.querySelectorAll("div.card.card-projects");
let section = document.querySelectorAll("section");
let navbar = document.get;

for (let indexButton = 0; indexButton < switchButton.length; indexButton++) {
  switchButton[indexButton].addEventListener("click", function () {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
    console.log(darkmode);
  });
}

if (darkmode === "active") enableDarkmode();

function enableDarkmode() {
  for (let indexSection = 0; indexSection < section.length; indexSection++) {
    section[indexSection].classList.add("dark");
  }
  localStorage.setItem("darkmode", "active");
}

function disableDarkmode() {
  for (let indexSection = 0; indexSection < section.length; indexSection++) {
    section[indexSection].classList.remove("dark");
  }
  localStorage.clear();
}
