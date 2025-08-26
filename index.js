const sidenav = document.getElementById("sidenav");
const menuicon = document.getElementById("menuicon");
const closenav = document.getElementById("close-nav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = "0%";
});

closenav.addEventListener("click", function () {
sidenav.style.right = "-100%";
sidenav.style.right = "-105%";
});
