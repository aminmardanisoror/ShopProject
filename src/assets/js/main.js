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
  slidesPerView:2,
spaceBetween:25,
breakpoints: {
  0: {
    slidesPerView:2,
  },
  
  700: {
    slidesPerView:3,
  },
  960: {
    slidesPerView:4,
  },
  1280: {
    slidesPerView:6,
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
  spaceBetween:25,

  breakpoints: {
    0: {
      slidesPerView:2,
    },
    500: {
      slidesPerView:3,
    },
    960: {
      slidesPerView:5,
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
  spaceBetween:25,

  breakpoints: {
    0: {
      slidesPerView:2,
    },
    500: {
      slidesPerView:3,
    },
    960: {
      slidesPerView:5,
    },
    1280: {
      slidesPerView:6,
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
  spaceBetween:25,

  breakpoints: {
    0: {
      slidesPerView:2,
    },
    500: {
      slidesPerView:3,
    },
    960: {
      slidesPerView:5,
    },
    1280: {
      slidesPerView:6,
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
  spaceBetween:25,

  breakpoints: {
    0: {
      slidesPerView:2,
    },
    500: {
      slidesPerView:3,
    },
    960: {
      slidesPerView:5,
    },
   
    1400: {
      slidesPerView:7,
    },
   
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});
// ================================================================
const mainPageProductsContainer = document.getElementById("main-page-products");
const root = document.getElementById("main-page-products");
async function getLimitedProduct(limitCount = 4) {
  //   let data = "";
  return await fetch(`https://fakestoreapi.com/products?limit=${limitCount}`)
    .then((res) => res.json())
    .then((json) => json);
}

async function getAllProduct() {
  //   let data = "";
  const resust = await fetch(`https://fakestoreapi.com/products`)
    .then((res) => res.json())
    .then((json) => json);

  return resust;
}

// async function logProducts() {
//   const resust = await getLimitedProduct();

//   console.log(resust);
// }

async function renderMainPageProducts() {
  const products = await getLimitedProduct(4);

  const template = products
    .map((product) => {
      const { title, image, price } = product;
      return `
<div
class="flex flex-col items-center rounded-lg shadow-xl text-center border
 pb-4 overflow-hidden w-full">
<img
class="w-full aspect-square object-cover"
src="${image}"
width="400px"
alt=""
/>

<h2 class="font-bold text-xl mt-4 line-clamp-1">${title}</h2>
<span>${price}</span>
<span>تومان</span>

</div>


`;
    })
    .join("");

  mainPageProductsContainer.innerHTML = template;
}
renderMainPageProducts();

async function renderAllProductsPage() {
  const skeleton = `
  <div
        class="flex flex-col items-center rounded-lg shadow-xl text-center border pb-4 overflow-hidden w-full"
      >
        <div class="w-full aspect-square bg-slate-400 animate-pulse"></div>
        <div class="w-1/2 mt-4 h-5 bg-slate-400 animate-pulse"></div>
        <div class="w-1/2 mt-4 h-5 bg-slate-400 animate-pulse"></div>
      </div>
        <div
        class="flex flex-col items-center rounded-lg shadow-xl text-center border pb-4 overflow-hidden w-full"
      >
        <div class="w-full aspect-square bg-slate-400 animate-pulse"></div>
        <div class="w-1/2 mt-4 h-5 bg-slate-400 animate-pulse"></div>
        <div class="w-1/2 mt-4 h-5 bg-slate-400 animate-pulse"></div>
      </div>
        <div
        class="flex flex-col items-center rounded-lg shadow-xl text-center border pb-4 overflow-hidden w-full"
      >
        <div class="w-full aspect-square bg-slate-400 animate-pulse"></div>
        <div class="w-1/2 mt-4 h-5 bg-slate-400 animate-pulse"></div>
        <div class="w-1/2 mt-4 h-5 bg-slate-400 animate-pulse"></div>
      </div>
        <div
        class="flex flex-col items-center rounded-lg shadow-xl text-center border pb-4 overflow-hidden w-full"
      >
        <div class="w-full aspect-square bg-slate-400 animate-pulse"></div>
        <div class="w-1/2 mt-4 h-5 bg-slate-400 animate-pulse"></div>
        <div class="w-1/2 mt-4 h-5 bg-slate-400 animate-pulse"></div>
      </div>
`;
  const container = `
   <div id="all-products-page-products"
class="container-primary mt-8 md:gap-6 md:flex md:justify-center"
>
${skeleton}
</div> 
`;

  root.innerHTML = container;
}
