let array = JSON.parse(localStorage.getItem("names"));
console.log(array);

// let userData = []

// array.forEach((items) => {

// let data = {
//   names:items.username,
//   password:items.password
// }

// userData.push(data)

//   let nemes = items.username
//   let password = items.password
//   userName.push(nemes);
// userPassword.push(password);
// });

let newRegister = document.getElementById("newRegister");
let inputName = document.getElementById("inputName");
let submit = document.getElementById("submit");
let inputPassword = document.getElementById("inputPassword");
let errorName = document.getElementById("errorName");
let errorMessage = document.getElementById("errorMessage");

let checkRegister = localStorage.getItem("register");
function login(e) {
  e.preventDefault();
  if(checkRegister == null){
    errorMessage.textContent = "نام کاربری یا پسورد اشتباه است.";
      errorMessage.style.color = "red";
  }
  
  if (checkRegister == "false") {
    let user = array.find(
      (user) =>
        user.username === inputName.value &&
        user.password === inputPassword.value
    );
    if (user) {
      alert("ورود با موفقیت انجام شد");
      localStorage.setItem("login", true);
      let itemsFromStorage = []
      let packLogin = {
        username: inputName.value,
        password: inputPassword.value,
      };
      itemsFromStorage.push(packLogin)
      localStorage.setItem("packLogin", JSON.stringify(itemsFromStorage));
      location.href = "index.html";
    } else {
      errorMessage.textContent = "نام کاربری یا پسورد اشتباه است.";
      errorMessage.style.color = "red";
    }
 
  }
}
// if (inputPassword.value === "") {
//   errorpassword.innerHTML = " رمز عبور را وارد کنید";
//   errorpassword.style.color = "red";
// } else if (inputPassword.value != array.password) {
//   errorpassword.innerHTML = "رمز عبور اشتباه است";
//   errorpassword.style.color = "red";
// }

// window.location.href = "./index.html";

submit.addEventListener("click", login);
