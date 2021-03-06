const nav = document.querySelector("#nav");
const menu = document.querySelector("#menu");
const menuToggle = document.querySelector(".nav__toggle");
const heightMenu = document.querySelector(".header");
const titleHide = document.querySelector(".header--title");
const pageWidth = document.querySelector(".header__wrapper");
let isMenuOpen = false;
// screen width bigger than 666px
window.onload = function () {
  const widthOfScreen = screen.width;
  if (widthOfScreen >= "666") {
    console.log(widthOfScreen);
    isMenuOpen = !isMenuOpen;

    // toggle a11y attributes and active class
    menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
    menu.hidden = !isMenuOpen;
    nav.classList.toggle("nav--open");
    pageWidth.style.position = "relative";

  }
}
// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener("click", (e) => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;

  // toggle a11y attributes and active class
  menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle("nav--open");
  heightMenu.classList.toggle("headerMenu");
  titleHide.classList.toggle("hidden");
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener("keydown", (e) => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll(".nav__link");
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

