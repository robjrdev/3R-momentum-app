"use strict";
//DOM SELECTOR
//Time
const currentTime = document.querySelector(".current-time");
const greeting = document.querySelector(".greeting");
const showToggle = document.querySelector(".btn-show--toggle");
const toggleFormat = document.querySelector(".switch");
const switchToggle = document.querySelector(".toggle--switch");
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
let time;
const generateTime = function () {
  const date = new Date();
  const timeFormat = switchToggle.checked;

  if (timeFormat) {
    time = date.toLocaleTimeString("en-US", {
      timeStyle: "short",
      hour12: false,
    });
  } else {
    time = date.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });
  }
  return time;
};
setInterval(generateTime, 1000);
generateTime();
currentTime.innerHTML = time;

//Show Toggle
showToggle.addEventListener("click", function () {
  toggleFormat.classList.toggle("hidden");
});

//Costumize Greeting watch time
const hours = new Date().getHours();
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
