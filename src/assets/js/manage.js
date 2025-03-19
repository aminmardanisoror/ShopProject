// ==========
// make product card
// ===========

const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");

function makeProduct(event) {
  event.preventDefault();

  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productType = document.getElementById("productType").value;
  const productRating = document.getElementById("productRating").value;
  const productImage = document.getElementById("productImage").files[0];

  const reader = new FileReader();
  reader.onloadend = function () {
    const productCard = document.createElement("div");

    productCard.innerHTML = `  
            <div class="border borderClr-primary pb-5 flex flex-col justify-center bg-white">
                  <img src="${reader.result}" alt="${productName}" />
                  <div class="flex flex-col gap-3 mt-3 text-center">
                    <span>${productName}</span>
                    <span class="primary-color">${productRating}</span>
                    <span>${productPrice}</span> 
                  </div>
                   <a
                    href=""
                    class="border w-max mx-auto py-1 borderClr-primary px-4"
                    >خرید</a>
                </div>
        `;
    const itemsData = {
      name: productName,
      price: productPrice,
      type: productType,
      rate: productRating,
      img: reader.result,
    };
    let itemsDataStorage = [];
    if (localStorage.getItem("newItems") == null) {
      itemsDataStorage.push(itemsData);
      localStorage.setItem("newItems", JSON.stringify(itemsDataStorage));
      console.log(itemsDataStorage);
    } else {
      itemsDataStorage = JSON.parse(localStorage.getItem("newItems"));
      itemsDataStorage.push(itemsData);

      localStorage.setItem("newItems", JSON.stringify(itemsDataStorage));
    }

    productList.appendChild(productCard);

    productForm.reset();
  };

  if (productImage) {
    reader.readAsDataURL(productImage);
  }
  location.reload();
}

productForm.addEventListener("submit", makeProduct);
// ==========
//end of make product card
// ===========

// ==========
//push product form storage
// ===========
let data = JSON.parse(localStorage.getItem("newItems"));

if (data != null) {
  function renderProducts(products) {
    const template = products
      .map((product, index) => {
        return `
         <div class="border borderClr-primary pb-5 flex flex-col justify-center bg-white">
         <div class="flex justify-between w-11/12 mx-auto">
         
         <button class="text-red-600 deleteBtn " data-index="${index}" >حذف</button>
        
         <span>ویرایش</span>
         </div>
                    <img src="${product.img}"  />
                    <div class="flex flex-col gap-3 mt-3 text-center">
                      <span>${product.name}</span>
                      <span class="primary-color">${product.rate}</span>
                      <span>${product.price}</span> 
                    </div>
                     <a
                      href="" 
                      class="border mt-4 w-max mx-auto py-1 borderClr-primary px-4"
                      >خرید</a>
                  </div>
        `;
      })
      .join("");

    data.forEach((product) => {
      console.log(product.type);
      if (product.type === "گوشواره") {
        const productListEarrings = document.getElementById(
          "productListEarrings"
        );
        productListEarrings.innerHTML = template;
      } else if (product.type === "گردنبند") {
        // (product.type.includes("گردنبند"))
        const productListNecklace = document.getElementById(
          "productListNecklace"
        );
        productListNecklace.innerHTML = template;
      }
    });

    const deleteButtons = document.querySelectorAll(".deleteBtn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        deleteProduct(index);
      });
    });
  }

  function deleteProduct(index) {
    data.splice(index, 1); // محصول را از آرایه حذف می‌کند

    localStorage.setItem("newItems", JSON.stringify(data)); // به روز رسانی localStorage
    renderProducts(data); // مجدد لیست محصولات را رندر می‌کند
  }
  renderProducts(data);
}

// ==========
//end of push product form storage
// ==========
