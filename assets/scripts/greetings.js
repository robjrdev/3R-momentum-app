"use strict";
//DOM SELECTOR
//Time
const currentTime = document.querySelector(".current-time");
const greetingAm = document.querySelector(".greeting-am");
const greetingPm = document.querySelector(".greeting-pm");
const greetingNight = document.querySelector(".greeting-night");
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
const checkGreet = function () {
  greetingAm.classList.toggle("hidden");
  greetingPm.classList.toggle("hidden");
  greetingNight.classList.toggle("hidden");
};

//Costumize Greeting watch time
const timeOfDay = [a.getHours(), a.getMinutes()];
console.log(timeOfDay);
const costumGreeting = function () {
  const am = time[0];
};
costumGreeting();

//Enter key event listener
const pressEnter = function (e) {
  //Get user name
  const user = getName.value;
  if (e.key === "Enter") {
    if (user.length !== 0) {
      userName.textContent = ` ${user}.`;
      inputName.classList.add("hidden");
    }

    //Get focus input
    const focusValue = focusInput.value;
    if (focusValue.length !== 0) {
      focusMessage.textContent = focusValue;
      focusSection.classList.add("hidden");
    }
  }
};

//get name from user
inputName.addEventListener("keypress", pressEnter);
//get focus message
focusSection.addEventListener("keypress", pressEnter);
