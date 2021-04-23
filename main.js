"use strict";

let email = document.getElementById("email");
let errorIcon = document.getElementById("error-btn");
let errorText = document.getElementById("error-text");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  if (!emailIsValid(email.value)) {
    e.preventDefault();
    errorIcon.style.opacity = 1;
    errorText.style.opacity = 1;
    form.style.console.log("Email is invalid");
  } else {
    errorIcon.style.opacity = 0;
    errorText.style.opacity = 0;
    console.log("Email is valid");
  }
});

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
