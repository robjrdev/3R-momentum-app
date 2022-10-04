"use strict";
//DOM SELECTOR
//Time
const currentTime = document.querySelector(".current-time");
//User name
const userName = document.getElementById("user-name");
const getName = document.getElementById("get-name");
const inputName = document.querySelector(".input-name");
const btnSubmit = document.querySelector(".btn--name");

//Focus
const focusSection = document.querySelector(".focus");
const focusInput = document.querySelector(".focus-input");
const focusBtn = document.querySelector(".btn--focus");
const focusMessage = document.querySelector(".focus-message");

//get time on machine
let a;
let time;

const hours12 = function () {
  a = new Date();
  time = a.toLocaleTimeString("en-us", {
    timeStyle: "short",
  });
  currentTime.textContent = time;
};

const updateTime = setInterval(hours12, 1000);

//get name from user
btnSubmit.addEventListener("click", function () {
  userName.textContent = ` ${getName.value}.`;
  inputName.classList.add("hidden");
});

//get focus message

focusBtn.addEventListener("click", function () {
  focusMessage.textContent = focusInput.value;
  focusSection.classList.add("hidden");
});
