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
if (burger !== null) {
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
}
/**
 * start coding for cart open and close functionaltiy
 */
if (cart !== null) {
  cart.addEventListener("click", () => {
    cartBody.classList.toggle("active-cart");
    cartOverlay.classList.toggle("overlay-active");
    mainAreaOverlay.classList.toggle("overlay-active");
  });
}

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
if (cart !== null) {
  mainAreaOverlay.addEventListener("click", () => {
    cartBody.classList.remove("active-cart");
    cartOverlay.classList.remove("overlay-active");
    mainAreaOverlay.classList.remove("overlay-active");
    parent.forEach((menu) => {
      menu.classList.remove("active");
    });
  });
}

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
      slidesOffsetAfter: 0,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
    },
    540: {
      slidesPerView: 1.8,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
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
      slidesOffsetAfter: 0,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
    },
    540: {
      slidesPerView: 1.8,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
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
      slidesOffsetAfter: 0,
    },
    1280: {
      slidesPerView: 2.8,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
    },
    540: {
      slidesPerView: 1.4,
      spaceBetween: 30,
      slidesOffsetAfter: 0,
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
if (openSearch !== null) {
  openSearch.addEventListener("click", () => {
    searchParent.classList.toggle("search-active");
  });
  searchClose.addEventListener("click", () => {
    searchParent.classList.remove("search-active");
  });
}
// if has value on input
const myInput = document.getElementById("myInput");
const searchAutoComplete = document.getElementById("autocomplete-search");
if (myInput !== null) {
  myInput.addEventListener("input", () => {
    if (myInput.value) {
      searchAutoComplete.classList.add("autocomplete-active");
      cartOverlay.classList.add("overlay-active");
      mainAreaOverlay.classList.add("overlay-active");
    } else {
      searchAutoComplete.classList.remove("autocomplete-active");
      cartOverlay.classList.remove("overlay-active");
      mainAreaOverlay.classList.remove("overlay-active");
    }
  });
}
window.onclick = function (e) {
  if(searchAutoComplete !== null){
  if (!searchAutoComplete.contains(e.target)) {
    searchAutoComplete.classList.remove("autocomplete-active");
    }
  }
};
/**for input border */
const parents = document.querySelectorAll(".input-parent");
const inputs = document.querySelectorAll(".input");
if (inputs.length > 0) {
  inputs.forEach(function (i, index) {
    if (i.disabled) {
      parents[index].classList.add("disabled");
    }
    i.addEventListener("focus", function () {
      parents[index].classList.add("focused");
    });

    i.addEventListener("blur", function () {
      let stillFocused = false;
      inputs.forEach(function (input) {
        if (input === document.activeElement) {
          stillFocused = true;
        }
      });
      if (!stillFocused) {
        parents[index].classList.remove("focused");
      }
    });
  });
}

// start coding for accrodion

const accordionBtns = document.querySelectorAll(".accordion");
if (accordionBtns.length >= 0) {
  for (let i = 0; accordionBtns.length; i++) {
    if (i === 1) {
      break;
    }
    var parentel = accordionBtns[i].parentElement.parentElement;
    var article = accordionBtns[i].parentElement.nextElementSibling;
    parentel.classList.add("open");
    article.style.maxHeight = article.scrollHeight + "px";
  }

  accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
      this.parentElement.parentElement.classList.toggle("open");
      let content = this.parentElement.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
  });
}

// start coding for 1st section afmetingen
 
let breedteData = getSelectedRadioValue('breedte');


let afmetingen = document.querySelector('.parent-afmetingen');

const breedte = document.getElementsByName('breedte'); 
for (let i = 0; i < breedte.length; i++) {
  breedte[i].addEventListener('click', () => {
    const selectedBreedte = getSelectedRadioValue('breedte');
    breedteData = selectedBreedte; 
    if (breedteData.length != 0) { 
      afmetingen.classList.add('valued')
     }
  });
}

if (breedteData.length != 0) {
  afmetingen.classList.add('valued')
}else{
  afmetingen.classList.remove('valued')
}

// for hoogte
let hoogte = document.querySelector('.hoogte');

hoogte.addEventListener('input', () => { 
  var inputValue = hoogte.value;
  if (inputValue.length >= 1) {
    afmetingen.classList.add('valued')
  }else{
    if (breedteData.length === 0) {
      afmetingen.classList.remove('valued')
    }
  }
})


// function for kleur

let parentKleur = document.querySelector('.parent-kleur');

let kleurData = getSelectedRadioValue('kleur');
  
const kleur = document.getElementsByName('kleur'); 
for (let i = 0; i < kleur.length; i++) {
  kleur[i].addEventListener('click', () => {
    const selectedKleur = getSelectedRadioValue('kleur');
    kleurData = selectedKleur; 
    if (kleurData.length != 0) { 
      parentKleur.classList.add('valued')
     }
  });
}

if (kleurData.length != 0) {
  parentKleur.classList.add('valued')
}else{
  parentKleur.classList.remove('valued')
}

// coding for  Bediening

let bediening = document.querySelector('.parent-bediening');


// for  keuze
let keuzeData = getSelectedRadioValue('keuze'); 
const keuze = document.getElementsByName('keuze'); 
for (let i = 0; i < kleur.length; i++) {
  kleur[i].addEventListener('click', () => {
    const selectedKeuze = getSelectedRadioValue('keuze');
    keuzeData = selectedKeuze; 
    if (keuzeData.length != 0) { 
      bediening.classList.add('valued')
     }
  });
}

if (kleurData.length != 0) {
  bediening.classList.add('valued')
}else{
  bediening.classList.remove('valued')
}
// for  Optioneel
let optioneelData = getSelectedRadioValue('optioneel'); 
const optioneel = document.getElementsByName('optioneel'); 
for (let i = 0; i < optioneel.length; i++) {
  optioneel[i].addEventListener('click', () => {
    const selectedOptioneel = getSelectedRadioValue('optioneel');
    optioneelData = selectedOptioneel; 
    if (optioneelData.length != 0) { 
      bediening.classList.add('valued')
     }
  });
}

if (optioneelData.length != 0) {
  bediening.classList.add('valued')
}else{
  bediening.classList.remove('valued')
}
// for  bedieningszijde
let bedieningszijdeData = getSelectedRadioValue('bedieningszijde'); 
const bedieningszijde = document.getElementsByName('bedieningszijde'); 
for (let i = 0; i < bedieningszijde.length; i++) {
  bedieningszijde[i].addEventListener('click', () => {
    const selectedBedieningszijde = getSelectedRadioValue('bedieningszijde');
    bedieningszijdeData = selectedBedieningszijde; 
    if (bedieningszijdeData.length != 0) { 
      bediening.classList.add('valued')
     }
  });
}

if (bedieningszijdeData.length != 0) {
  bediening.classList.add('valued')
}else{
  bediening.classList.remove('valued')
}








// start coding for getSelectedRadioValue 
function getSelectedRadioValue(radioGroupName) {
  const radioButtons = document.getElementsByName(radioGroupName);
  let selectedValue = '';

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      selectedValue = radioButtons[i].value;
      break;
    }
  }

  return selectedValue;
} 

// const paging = new Swiper(".select-kleur", {
//   slidesPerView: 1.5, 
//   spaceBetween: 10, 
//   breakpoints: {
//     1280: {
//       slidesPerView: 5,
//       spaceBetween: 10, 
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 10, 
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 10, 
//     },
//     540: {
//       slidesPerView: 2.5,
//       spaceBetween: 10, 
//     },
//   },
//   navigation: {
//     nextEl: ".select-kleur-next",
//     prevEl: ".select-kleur-prev",
//   },
//   on: {
//     slideChange: function () {
//       currentSlide.innerHTML = paging.activeIndex + 1; 
//       totalSlide.innerHTML = paging.slides.length;
//      }
//   }
// });

// currentSlide.innerHTML = paging.activeIndex + 1; 
// totalSlide.innerHTML = paging.slides.length;


function openModal(img_name) {
  var modal = document.querySelector(".modal-colors");
  var modalImg = document.querySelector(".modal-img-color");
  modal.style.display = "block";
  modalImg.src = '';
  modalImg.src = img_name;
  modal.parentElement.classList.add('modal-active')
  
  var close = document.querySelector(".modal-close");

  close.addEventListener('click', () => {
    modal.parentElement.classList.remove('modal-active')
  })
  
}

var images = document.querySelectorAll(".expand-color");
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function () {
      let img_name = this.getAttribute('data-img')
     openModal(img_name)
  };
}


// for pagination 
const container = document.getElementById('paging-container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentSlide =  document.querySelector(".current-slide");
let totalSlide =  document.querySelector(".total-slide");
var divCount = 2; // Number of divs to display per page
let currentPage = 1; // Set the initial page to 1

function showPage(page) {
  const start = (page - 1) * divCount;
  const end = start + divCount;
  const divs = container.querySelectorAll('.item');
  totalSlide.innerHTML = Math.ceil(divs.length / divCount)
  currentSlide.innerHTML = currentPage
  // Hide all divs
  divs.forEach(div => {
    div.style.display = 'none';
  });

  // Show the divs for the current page
  for (let i = start; i < end; i++) {
    if (divs[i]) {
      divs[i].style.display = 'block';
    }
  }
}

// Show the initial page
showPage(currentPage);
prevButton.classList.add('nope'); 
// Add event listeners to the pagination buttons
prevButton.addEventListener('click', () => {
  currentPage--;
  nextButton.classList.remove('nope'); 
  if (currentPage <= 1) {
    currentPage = 1;
    prevButton.classList.add('nope'); 
  } else {
    prevButton.classList.remove('nope');
  }
  showPage(currentPage);
});

nextButton.addEventListener('click', () => {
  const pageCount = Math.ceil(container.querySelectorAll('.item').length / divCount);
  currentPage++;
  prevButton.classList.remove('nope'); 
  if (currentPage >= pageCount) {
    currentPage = pageCount;
    nextButton.classList.add('nope'); 
  } else {
    nextButton.classList.remove('nope'); 
   
  }
  showPage(currentPage);
});
function checkWidth() {
  const width = window.innerWidth;

  if (width >= 1024) {
    divCount = 5; 
    showPage(currentPage);
  } else if (width >= 768) {
    divCount = 4;
    showPage(currentPage);
  } else if (width >= 640) {
    divCount = 3;
    showPage(currentPage);
  } else {
    divCount = 2;
    showPage(currentPage);
  }
}
checkWidth();

window.addEventListener('resize', () => {
  checkWidth(); 
});
 