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
