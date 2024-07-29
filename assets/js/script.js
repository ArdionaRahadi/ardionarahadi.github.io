let menu = document.getElementById("menu");
let sideBar = document.getElementById("sidebar");
menu.addEventListener("click", function () {
    sideBar.classList.toggle("open");
    menu.classList.toggle("open");
});

document.addEventListener("click", function (e) {
    if (!menu.contains(e.target)) {
        sideBar.classList.remove("open");
    }
});
