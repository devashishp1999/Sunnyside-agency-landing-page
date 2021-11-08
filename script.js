`use strict`;

const ham = document.querySelector(`.ham`);
const menu = document.querySelector(`.menu`);

ham.addEventListener("click", function (e) {
  menu.classList.toggle("hidden");
});

let lastScrollTop = 0;
const head = document.querySelector(".head");

window.addEventListener(`scroll`, function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    head.style.top = "-15vh"; // Height of the navBar
  } else {
    head.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
