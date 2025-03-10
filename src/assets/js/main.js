// ==========
// login and register
// ==========

window.onload = function () {
  let checkRegister = localStorage.getItem("register");
  if (checkRegister == "true") {
    let array = JSON.parse(localStorage.getItem("names"));

    const lastItem = array[array.length - 1];

    document.getElementById("nameChange").innerHTML = `<div class="text-sm">
  <a id="logOut" class="hover:text-black" >خروج از حساب</a> | <span> ${lastItem.username} </span>
 </div> `;
  } else if (checkRegister == "false") {
    let checkLogin = localStorage.getItem("login");
    if (checkLogin == "true") {
      let lastLogin = JSON.parse(localStorage.getItem("packLogin"));
      document.getElementById("nameChange").innerHTML = `<div class="text-sm">
      <a id="logOut" class="hover:text-black" >خروج از حساب</a> | <span> ${lastLogin[0].username} </span>
     </div> `;
    }
  }

  let logOut = document.getElementById("logOut");

  logOut.addEventListener("click", clearData);
};
function clearData() {
  localStorage.setItem("login", false);
  localStorage.setItem("register", false);
  location.reload();
}

// ==========
// end of login and register
// ==========



// ==========
// data
// ==========
let earrings = [
  {
    id: 1,
    title: "earrings 1",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper2/earring1.webp",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "earrings 2",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper2/earring2.webp",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 3,
    title: "earrings 3",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper2/earring3.webp",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 4,
    title: "earrings 4",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper2/earring3.webp",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 5,
    title: "earrings 5",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper2/earring5.webp",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 6,
    title: "earrings 6",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper2/earring6.webp",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 7,
    title: "earrings 7",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper2/earring1.webp",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 8,
    title: "earrings 8",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper2/earring2.webp",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 9,
    title: "earrings 9",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper2/earring3.webp",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];


let necklace = [
  {
    id: 1,
    title: "necklace 1",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper3/necklace3.png",
    rating: {
      rate: 4.5,
      count: 120,
    },
  },
  {
    id: 2,
    title: "necklace 2",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper3/necklace3.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 3,
    title: "necklace 3",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper3/necklace5.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 4,
    title: "necklace 4",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper3/necklace2.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 5,
    title: "necklace 5",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper3/necklace3.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 6,
    title: "necklace 6",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper3/necklace4.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 7,
    title: "necklace 7",
    price: 109.95,
    description: "Your perfect pack for everyday",
    category: "women's earrings",
    image: "./assets/imgs/swiper3/necklace5.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

let ring = [
  {
    id: 1,
    title: "ring 1",
    price: 265.0,
    description: "Your perfect pack for everyday",
    category: "women's rings",
    image: "./assets/imgs/swiper4,5/ring7.png",
    rating: {
      rate: 4.1,
      count: 120,
    },
  },
  {
    id: 2,
    title: "ring 2",
    price: 265.0,
    description: "Your perfect pack for everyday",
    category: "women's rings",
    image: "./assets/imgs/swiper4,5/ring7.png",
    rating: {
      rate: 4.1,
      count: 120,
    },
  },
  {
    id: 3,
    title: "ring 3",
    price: 265.0,
    description: "Your perfect pack for everyday",
    category: "women's rings",
    image: "./assets/imgs/swiper4,5/ring6.png",
    rating: {
      rate: 4.1,
      count: 120,
    },
  },
  {
    id: 4,
    title: "ring 4",
    price: 265.0,
    description: "Your perfect pack for everyday",
    category: "women's rings",
    image: "./assets/imgs/swiper4,5/ring5.png",
    rating: {
      rate: 4.1,
      count: 120,
    },
  },
  {
    id: 5,
    title: "ring 5",
    price: 265.0,
    description: "Your perfect pack for everyday",
    category: "women's rings",
    image: "./assets/imgs/swiper4,5/ring5.png",
    rating: {
      rate: 4.1,
      count: 120,
    },
  },
  {
    id: 6,
    title: "ring 6",
    price: 265.0,
    description: "Your perfect pack for everyday",
    category: "women's rings",
    image: "./assets/imgs/swiper4,5/ring4.png",
    rating: {
      rate: 4.1,
      count: 120,
    },
  },
  {
    id: 7,
    title: "ring 7",
    price: 265.0,
    description: "Your perfect pack for everyday",
    category: "women's rings",
    image: "./assets/imgs/swiper4,5/ring3.png",
    rating: {
      rate: 4.1,
      count: 120,
    },
  },
  {
    id: 8,
    title: "ring 8",
    price: 265.0,
    description: "Your perfect pack for everyday",
    category: "women's rings",
    image: "./assets/imgs/swiper4,5/ring2.png",
    rating: {
      rate: 4.1,
      count: 120,
    },
  },
  {
    id: 9,
    title: "ring 9",
    price: 265.0,
    description: "Your perfect pack for everyday",
    category: "women's rings",
    image: "./assets/imgs/swiper4,5/ring1.png",
    rating: {
      rate: 4.1,
      count: 120,
    },
  },
];


// ==========
// end of data
// ==========
 



// ==========
// functions
// ==========


const sowiperTwo = document.getElementById("sowiperTwo");
const sowiperThree = document.getElementById("sowiperThree");
const swiperFour = document.getElementById("swiperFour");
function renderproduct(products, element) {
  const template = products
    .map((product) => {
      return `
  <div class="swiper-slide">
                <div class="border borderClr-primary pb-5 shadow-lg">
                  <img src="${product.image}" alt="" />
                  <div class="flex flex-col gap-3 mt-3">
                    <span>${product.title}</span>
                    <span class="primary-color">${product.rating.rate}</span>
                    <span>${product.price}</span>
                  </div>
                </div>
              </div>



`;
    })
    .join("");

  element.innerHTML = template;
}

renderproduct(earrings, sowiperTwo);
renderproduct(necklace, sowiperThree);
renderproduct(ring, swiperFour);

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
    delay: 0,
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


// const nameChange = document.getElementsByClassName("nameChange");

// function setName() {
//   const name = localStorage.getItem("name");
//   nameChange.innerHTML = name;
// }
// setName();


// ========
// مشاهده بیشتر
// =======
document.getElementById("clickSecondSwiper").onclick=function () {
  localStorage.setItem("type",'earrings');
}
document.getElementById("clickThirdSwiper").onclick=function () {
  localStorage.setItem("type",'necklace');
}
document.getElementById("clickFourthSwiper").onclick=function () {
  localStorage.setItem("type",'ring');
}


// ========
// مشاهده بیشتر پایان
// =======