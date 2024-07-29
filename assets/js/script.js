let menu = document.getElementById("menu");
let sideBar = document.getElementById("sidebar");
menu.addEventListener("click", function () {
  sideBar.classList.toggle("open");
  menu.classList.toggle("open");
});
