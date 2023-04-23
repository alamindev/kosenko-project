/**
 * variables
 */
let mainAreaOverlay = document.querySelector("#main-area-overlay");
let cart = document.querySelector("#cart");
let cartBody = document.querySelector("#cart-body");
let cartOverlay = document.querySelector("#cart-overlay-menu");
// for mega menu variable
const menuButtons = document.querySelectorAll(".menu-button");
const closeMegaMenu = document.querySelectorAll(".close-mega-menu");
const parent = document.querySelectorAll(".parent");

// for burger menu
let burger = document.querySelector("#burger-menu-button");
let close = document.querySelector("#close");
let navbar = document.querySelector("#navbar");
let overlay = document.querySelector(".overlay-area");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  overlay.classList.add("active");
  document.body.classList.add("overflow-hidden");
});

overlay.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  cartBody.classList.remove("active-cart");
  document.body.classList.remove("overflow-hidden");
});
close.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  cartBody.classList.remove("active-cart");
  parent.forEach((menu) => {
    menu.classList.remove("active");
  });
  document.body.classList.remove("overflow-hidden");
});

/**
 * start coding for cart open and close functionaltiy
 */

cart.addEventListener("click", () => {
  cartBody.classList.toggle("active-cart");
  cartOverlay.classList.toggle("overlay-active");
  mainAreaOverlay.classList.toggle("overlay-active");
});

// start coding for mega menu

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const menu = button.nextElementSibling;
    mainAreaOverlay.classList.toggle("overlay-active");
    menu.classList.toggle("active");
  });
});

closeMegaMenu.forEach((button) => {
  button.addEventListener("click", () => {
    const menu = button.closest(".parent");
    mainAreaOverlay.classList.remove("overlay-active");
    menu.classList.remove("active");
  });
});

/**
 * for close cart and mega menu
 */
mainAreaOverlay.addEventListener("click", () => {
  cartBody.classList.remove("active-cart");
  cartOverlay.classList.remove("overlay-active");
  mainAreaOverlay.classList.remove("overlay-active");
  parent.forEach((menu) => {
    menu.classList.remove("active");
  });
});

// start coding for swiper

const swiper = new Swiper(".slider-one", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".swiper-next-1",
    prevEl: ".swiper-prev-1",
  },
});
new Swiper(".slider-two", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
new Swiper(".slider-three", {
  slidesPerView: 1.1,
  spaceBetween: 10,
  slidesOffsetAfter: 16,
  breakpoints: {
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    540: {
      slidesPerView: 1.8,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-next-3",
    prevEl: ".swiper-prev-3",
  },
});
new Swiper(".slider-four", {
  slidesPerView: 1.1,
  spaceBetween: 10,
  slidesOffsetAfter: 16,
  breakpoints: {
    1400: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    540: {
      slidesPerView: 1.8,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-next-4",
    prevEl: ".swiper-prev-4",
  },
});
new Swiper(".slider-five", {
  slidesPerView: 1.1,
  spaceBetween: 10,
  slidesOffsetAfter: 16,
  breakpoints: {
    1400: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 2.8,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    540: {
      slidesPerView: 1.4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-next-5",
    prevEl: ".swiper-prev-5",
  },
});

let openSearch = document.querySelector(".open-search");
let searchClose = document.querySelector("#search-close");
let searchParent = document.querySelector("#search-parent");

openSearch.addEventListener("click", () => {
  searchParent.classList.toggle("active");
});
searchClose.addEventListener("click", () => {
  searchParent.classList.remove("active");
});

// if has value on input
const myInput = document.getElementById("myInput");
const searchAutoComplete = document.getElementById("autocomplete-search");
myInput.addEventListener("input", () => {
  if (myInput.value) {
    searchAutoComplete.classList.add("active");
  } else {
    searchAutoComplete.classList.remove("active");
  }
});
