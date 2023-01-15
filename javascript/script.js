"use strict";
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validateEmail = function (email) {
  return email.match(regex);
};

let inputEmail = document.getElementById("email");
let personalInfo = document.querySelector(".info-group");
let emailForm = document.querySelector(".email-input-group");
let jobContent = document.querySelectorAll(".job-content");

const emailButton = document.querySelector(".email-btn");
const closeButton = document.querySelector(".close-btn");
const viewButton = document.querySelectorAll(".view-btn");

emailButton.addEventListener("click", function () {
  if (validateEmail(inputEmail.value)) {
    personalInfo.style.display = "block";
    emailForm.style.display = "none";
  }
});

closeButton.addEventListener("click", function () {
  personalInfo.style.display = "none";
  emailForm.style.display = "block";
  inputEmail.value = "";
});

for (let i = 0; i < viewButton.length; i++) {
  viewButton[i].addEventListener("click", function () {
    if (jobContent[i].style.display === "none") {
      jobContent[i].style.display = "block";
      viewButton[i].textContent = "View less";
    } else {
      jobContent[i].style.display = "none";
      viewButton[i].textContent = "View more";
    }
  });
}
