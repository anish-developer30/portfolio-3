const menu = document.getElementById("menu_btn");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

document.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

window.onload = () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("container").style.display = "block";
};
