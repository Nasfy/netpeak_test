let form = document.querySelector(".form");
let validateBtn = form.querySelector(".validate");
let length = form.querySelector(".length");
let height = form.querySelector(".height");
let radius = form.querySelector(".radCircle");
let number = form.querySelector(".amt");

let generateError = function(text) {
  let error = document.createElement("span")
  error.className = "error";
  error.innerHTML = text;
  return (error);
}

let removeValidation = function() {
  let errors = form.querySelectorAll(".error")
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
}

form.addEventListener("submit", function (event) {
removeValidation();
if (isNaN(length.value)) {
  event.preventDefault()
  length.className = "err"
  let error = generateError(" Введите число");
  length.parentElement.appendChild(error)
}
if (isNaN(height.value)) {
  event.preventDefault();
  height.className = "err";
  let error = generateError(" Введите число");
  height.parentElement.appendChild(error);
}
if (isNaN(radius.value)) {
  event.preventDefault();
  radius.className = "err";
  let error = generateError(" Введите число");
  radius.parentElement.appendChild(error);
}
else if (radius.value > (length.value / 2)) {
  event.preventDefault();
  radius.className = "err";
  let error = generateError(" Введите меньшее число");
  radius.parentElement.appendChild(error);
}
})
