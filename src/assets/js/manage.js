// window.onload = function() {
// let data =  localStorage.getItem('newProduct')
  
// productList.innerHTML = data
// }




const productForm = document.getElementById("productForm");
const productList = document.getElementById("productList");

productForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const productName = document.getElementById("productName").value;
  const productPrice = document.getElementById("productPrice").value;
  const productRating = document.getElementById("productRating").value;
  const productImage = document.getElementById("productImage").files[0];

  const reader = new FileReader();
  reader.onloadend = function () {
    const productCard = document.createElement("div");
    productCard.className = " ";
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
  price : productPrice,
  rate :productRating,
  img : productImage,
}
itemsDataStorage=[]
itemsDataStorage.push(itemsData)
console.log(itemsDataStorage);

    productList.appendChild(productCard);
    
    productForm.reset();
 
    
  };

  if (productImage) {
    reader.readAsDataURL(productImage);
  }
  
  
  
});
