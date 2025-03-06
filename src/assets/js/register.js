var inputName = document.getElementById("inputName");
var email = document.getElementById("email");
var inputPassword = document.getElementById("inputPassword");
var confirmPassword = document.getElementById("confirmPassword");
var submit = document.getElementById("submit");
var message = document.getElementById("message");
var messagePassword = document.getElementById("messagePassword");
var repeatPassword = document.getElementById("repeatPassword");

let dataName = localStorage.getItem("name");
submit.addEventListener("click", register);
// submit.addEventListener("click", registerErorr());

// submit.addEventListener('submit', function(event) {
//   event.preventDefault(); // جلوگیری از بارگذاری مجدد صفحه

//   inputName.value.trim();

//   message.textContent = ''; // پاک کردن پیام خطا قبلی

//   // شرط اول: بررسی اینکه نام کاربری قبلاً ثبت شده است یا خیر
//   if (localStorage.getItem('dataName')) {
//     message.textContent = 'این نام قبلاً ثبت شده است.';
//       return;
//   }

//   // شرط دوم: بررسی اینکه نام کاربری وارد شده است یا خیر
//   if (!inputName) {
//       errorElement.textContent = 'لطفاً نام کاربری را وارد کنید.';
//       return;
//   }

//   // شرط سوم: ذخیره نام کاربری در لوکال استوریج اگر تکراری نبود
//   localStorage.setItem(name, true);
//   alert('ثبت نام با موفقیت انجام شد!');
// });
let itemsFromStorage;
function register(e) {
  e.preventDefault();
  if (inputName.value == "") {
    message.innerHTML = "نام کاربری نباید خالی باشد";
    message.style.color = "red";
    return;
  } else {
    message.innerHTML = "";
  }
  if (inputPassword.value == "") {
    messagePassword.innerHTML = " رمز عبور نباید خالی باشد";
    messagePassword.style.color = "red";
    return;
  }
  if (inputPassword.value.length < 8) {
    messagePassword.innerHTML = "رمز عبور باید حداقل هشت رقم باشد";
    messagePassword.style.color = "red";
    return;
  } else {
    messagePassword.innerHTML = "";
  }

  if (confirmPassword.value != inputPassword.value) {
    repeatPassword.innerHTML = "مقدار رمز عبور یکسان نمیباشد!";
    repeatPassword.style.color = "red";

    return;
  } else {
    messagePassword.innerHTML = "";
  }

  if (localStorage.getItem("names") == null) {
    itemsFromStorage = [];
  } else {
    if (localStorage.getItem("names").includes(inputName.value)) {
      message.innerHTML = "نام کاربری قبلا ثبت شده";
      message.style.color = "red";
      return;
    }
    message.innerHTML = "";
    itemsFromStorage = JSON.parse(localStorage.getItem("names"));
  }
  let pack = {
    username: inputName.value,
    password: inputPassword.value,
  };
  itemsFromStorage.push(pack);
  localStorage.setItem("names", JSON.stringify(itemsFromStorage));
  localStorage.setItem("register", true);
  alert("ثبت نام با موفقیت انجام شد");

  location.href = "index.html";
}

