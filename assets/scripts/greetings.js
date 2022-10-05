"use strict";
//DOM SELECTOR
//Time
const currentTime = document.querySelector(".current-time");
const greeting = document.querySelector(".greeting");
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

//Get time on machine
let a;
let time;
const minuteCount = 60000;

const hours12 = function () {
  a = new Date();
  time = a.toLocaleTimeString("en-us", {
    timeStyle: "short",
    hours: "numeric",
  });
  currentTime.textContent = time;
  setInterval(hours12, minuteCount);
};
hours12();

//Costumize Greeting watch time
const hours = a.getHours();
const costumGreet = function () {
  if (hours < 12) {
    greeting.textContent = "Good Morning,";
  } else if (hours < 18) {
    greeting.textContent = "Good afternoon,";
  } else {
    greeting.textContent = "Good evening,";
  }
};
costumGreet();

//Enter key event listener
const pressEnter = function (e) {
  //Get user name

  if (e.key === "Enter") {
    if (getName.value.length !== 0) {
      inputName.classList.add("hidden");
      userName.textContent = getName.value;
      localStorage.setItem("currentUser", getName.value);
    }

    //Get focus input
    if (focusInput.value.length !== 0) {
      focusMessage.textContent = focusInput.value;
      focusSection.classList.add("hidden");
      localStorage.setItem("userFocus", focusInput.value);
    }
  }
};

//get name from user
inputName.addEventListener("keypress", pressEnter);

//get focus message
focusSection.addEventListener("keypress", pressEnter);

//Get userInput from localStorage
const currentUser = localStorage.getItem("currentUser");
userName.textContent = currentUser;
const currentFocus = localStorage.getItem("userFocus");
focusMessage.textContent = currentFocus;

// Validation if user input is needed
if (userName.textContent.length !== 0) {
  inputName.classList.add("hidden");
}
if (focusMessage.textContent.length !== 0) {
  focusSection.classList.add("hidden");
}
