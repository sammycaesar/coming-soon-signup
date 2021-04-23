"use strict";

// Variables
let email = document.getElementById("email");
let errorIcon = document.getElementById("error-btn");
let errorText = document.getElementById("error-text");
let form = document.getElementById("form");

// When user triggers form
form.addEventListener("submit", (e) => {
  //   User inputs invalid email
  if (!emailIsValid(email.value)) {
    e.preventDefault();
    errorIcon.style.opacity = 1;
    errorText.style.opacity = 1;
    form.style.border = "1px solid hsl(0, 95%, 66%)";
    console.log("Email is invalid");
  } else {
    // User inputs valid email
    errorIcon.style.opacity = 0;
    errorText.style.opacity = 0;
    form.style.border.opacity = 0;
    console.log("Email is valid");
  }
});

// Determines if email is inputted correctly
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
