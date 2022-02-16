const menu = document.querySelector(".hamburger a");
const close = document.querySelector(".close");
const nav_header = document.querySelector(".nav-header");
const logo_header = document.querySelector(".header-logo");

menu.addEventListener("click", function (e) {
  e.preventDefault();
  nav_header.style.display = "block";
  close.style.display = "block";
  logo_header.classList.add("logo-in-menu");
  menu.style.display = "none";
});

close.addEventListener("click", function (e) {
  e.preventDefault();
  nav_header.style.display = "none";
  close.style.display = "none";
  logo_header.classList.remove("logo-in-menu");
  menu.style.display = "block";
});
