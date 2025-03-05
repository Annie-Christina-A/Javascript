const formElement = document.getElementById("form");
const userNameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const password2Element = document.getElementById("password2");
String.prototype.isEmail = function () {
  return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
};
function checkInformation(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      errorCall(input, `${getName(input)} is required`);
    } else {
      successCall(input);
    }
  });
}
function getName(input) {
  return input.getAttribute("data-name");
}
function errorCall(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group error";
  const p = formGroup.querySelector("p");
  p.innerHTML = message;
}
function successCall(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form-group success";
  const p = formGroup.querySelector("p");
  p.innerHTML = "";
}

function checkLength(input, min, max) {
  const data = input.value.trim().length;
  if (data == 0) {
    errorCall(input, `${getName(input)} is required`);
  }
  else if (data < min) {
    errorCall(
      input,
      `${getName(input)} must be atleast greater than ${min} characters`
    );
  } else if (data > max) {
    errorCall(
      input,
      `${getName(input)} must be atleast lesser than ${max} characters`
    );
  }
}
function checkConfirmPassword(password, password2) {
    
  if (password.value != password2.value) {
    errorCall(password2, `${getName(password2)} does not match`);
  }
}
function checkEmail(input){
    if (input.value.trim().length == 0) {
      errorCall(input, `${getName(input)} is required`);
    }
    else if(!input.value.trim().isEmail()){
        errorCall(input,`this is not a valid email address`)
    }
}
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInformation([
    userNameElement,
    emailElement,
    passwordElement,
    password2Element,
  ]);
  checkLength(userNameElement, 5, 10);
  checkLength(passwordElement, 5, 8);
  checkConfirmPassword(passwordElement, password2Element);
  checkEmail(emailElement)
});
