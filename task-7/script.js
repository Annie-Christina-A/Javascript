const toggel = document.getElementById("toggelbar");
const inputbox = document.querySelector(".input-container input");
const content = document.querySelector(".content");
const contain=document.querySelector(".input-container")
let password = true;
toggel.addEventListener("click", function () {
  if (password) {
    inputbox.setAttribute("type", "text");
    toggel.classList.add("fa-eye-slash");
    toggel.classList.remove("fa-eye");
    password = false;
  } else {
    inputbox.setAttribute("type", "password");
    toggel.classList.remove("fa-eye-slash");
    toggel.classList.add("fa-eye");
    password = true;
  }
});
let min = 5;
let max = 8;
inputbox.addEventListener("keyup", function () {
  if (inputbox.value.length < min) {
    contain.classList.add("error");
    contain.classList.remove("good");
    content.innerHTML = "password greater than 5";
  } else if (inputbox.value.length > max) {
    contain.classList.add("error");
    contain.classList.remove("good");
    content.innerHTML = "password less than 8";
  } else {
    contain.classList.remove("error");
    contain.classList.add("good");
    content.innerHTML = "";
  }
});
