let ToTopBtn = document.getElementById("ToTopBtn");
ToTopBtn.addEventListener("click", topFunction);
window.onscroll = function scrollFunction() {
  if (document.documentElement.scrollTop > 500) {
    ToTopBtn.style.display = "block";
  } else {
    ToTopBtn.style.display = "none";
  }
};

function topFunction() {
  document.documentElement.scrollTop = 0;
  document.getElementById("ToTopBtn").style.classList.add = "animate-spin";
}

// ==========
// data
// ==========




document.getElementById("clickSecondSwiper").onclick=function () {
  localStorage.setItem("type","earings");
  window.location.href='products.html';
}



// ==========
// end of data
// ==========

// ==========
// functions
// ==========
const sowiperTwo = document.getElementById("sowiperTwo");
const sowiperThree = document.getElementById("sowiperThree");
const swiperFour = document.getElementById("swiperFour");




addData(earrings,sowiperTwo);
addData(necklace,sowiperThree);
addData(ring,swiperFour);


// function renderEarrings(products) {
//   const template = products
//     .map((product) => {
//       return `
//   <div class="swiper-slide">
//                 <div class="border borderClr-primary pb-5 shadow-lg">
//                   <img src="${product.image}" alt="" />
//                   <div class="flex flex-col gap-3 mt-3">
//                     <span>${product.title}</span>
//                     <span class="primary-color">${product.rating.rate}</span>
//                     <span>${product.price}</span>
//                   </div>
//                 </div>
//               </div>
//
//
//
// `;
//     })
//     .join("");
//
//   sowiperTwo.innerHTML = template;
// }
// renderEarrings(earrings);
//
// function renderNecklace(products) {
//   const template = products
//     .map((product) => {
//       return `
//     <div class="swiper-slide">
//             <div class="border borderClr-primary pb-5 text-center shadow-2xl">
//               <img src="${product.image}" alt="" />
//               <div class="flex flex-col gap-3 mt-3">
//                 <span>${product.title}</span>
//                 <span class="primary-color">${product.rating.rate}</span>
//                 <span>${product.price}</span>
//               </div>
//             </div>
//           </div>
//     `;
//     })
//     .join("");
//
//   sowiperThree.innerHTML = template;
// }
// renderNecklace(necklace);
//
// function renderRings(products) {
//   const template = products
//     .map((product) => {
//       return `
// <div class="swiper-slide shadow-2xl">
//                 <div class="border borderClr-primary pb-5 text-center">
//                   <img src="${product.image}" alt="" />
//                   <div class="flex flex-col gap-3 mt-3">
//                     <span>${product.title}</span>
//                     <span class="primary-color">${product.rating.rate}</span>
//                     <span>${product.price}</span>
//                   </div>
//                 </div>
//               </div>
//
// `;
//     })
//     .join("");
//   swiperFour.innerHTML = template;
// }
// renderRings(ring);

// ==========
// end of functions
// ==========

// ==========
// swipers
// ==========

const firstswiper = new Swiper("#firstSwiper", {
  // Optional parameters

  loop: true,
  speed: 900,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
// ================================================================
const secondswiper = new Swiper("#secondSwiper", {
  // Optional parameters

  loop: true,
  speed: 900,
  autoplay: {
    delay: 3000,
  },
  slidesPerView: 2,
  spaceBetween: 25,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },

    700: {
      slidesPerView: 3,
    },
    960: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 6,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ================================================================
const thirdSwiper = new Swiper("#thirdSwiper", {
  // Optional parameters

  loop: true,
  speed: 900,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirection: true,
  },
  spaceBetween: 25,

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    960: {
      slidesPerView: 5,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ================================================================
const fourthSwiper = new Swiper("#fourthSwiper", {
  // Optional parameters

  loop: true,
  speed: 900,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    reverseDirection: true,
  },
  spaceBetween: 25,

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    960: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 6,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ================================================================
const fifthSwiper = new Swiper("#fifthSwiper", {
  // Optional parameters

  loop: true,
  speed: 900,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  spaceBetween: 25,

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    960: {
      slidesPerView: 5,
    },
    1280: {
      slidesPerView: 6,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ================================================================
const sixthSwiper = new Swiper("#sixthSwiper", {
  // Optional parameters

  loop: true,
  speed: 900,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },
  spaceBetween: 25,

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 3,
    },
    960: {
      slidesPerView: 5,
    },

    1400: {
      slidesPerView: 7,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ==========
// end of swipers
// ==========

// =========
// navbar
// =========
const navbar = document.getElementById("navbar");
const bars = document.getElementById("bars");
const xmark = document.getElementById("xmark");
const oneSwiper = document.getElementById("oneSwiper");

function activeNavbar() {
  navbar.classList.remove("translate-x-full");

  
 
}
function deactiveNavbar() {
  navbar.classList.add("translate-x-full");
 
}

bars.addEventListener("click", activeNavbar);
xmark.addEventListener("click", deactiveNavbar);
// =========
// end of navbar
// =========
