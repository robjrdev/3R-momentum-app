'use strict';
//DOM SELECTOR
//Time
const currentTime = document.querySelector('.current-time');
const greeting = document.querySelector('.greeting');
const showToggle = document.querySelector('.btn-show--toggle');
const toggleFormat = document.querySelector('.switch');
const switchFormat = document.querySelector('.format-switch-btn');
//User name
const userName = document.getElementById('user-name');
const getName = document.getElementById('get-name');
const inputName = document.querySelector('.input-name');
const btnSubmit = document.querySelector('.btn--name');
const nameContainer = document.querySelector('.name-section');

//Focus
const focusSection = document.querySelector('.focus');
const focusInput = document.querySelector('.focus-input');
const focusMessage = document.querySelector('.focus-message');
const userInputFocus = document.querySelector('.user-focus-input');
const focusBtn = document.querySelector('.edit-focus');
const doneBtn = document.querySelector('.done-focus');
const randMessage = document.querySelector('.random-message');

//Get time
//Live clock

let formatValue;
const liveTime = function () {
  const d = new Date();
  let time;
  let hour = d.getHours();
  const period = hour >= 12 ? 'PM' : 'AM';
  let min = d.getMinutes();
  min = min > 9 ? min : '0' + min;
  const sec = d.getSeconds();

  if (localStorage.getItem('timeFormat') !== '12') {
    hour = hour > 12 ? hour % 12 : hour;
    time = `${hour}:${min}:${sec} ${period}`;
  } else {
    time = `${hour}:${min}:${sec}`;
  }

  currentTime.textContent = time;
};
setInterval(liveTime, 1000);

//Show Toggle
showToggle.addEventListener('click', function () {
  toggleFormat.classList.toggle('hidden');
});

//Switch Format
switchFormat.addEventListener('click', () => {
  formatValue = switchFormat.getAttribute('data-format');
  localStorage.setItem('timeFormat', formatValue);

  if (formatValue === '12') {
    switchFormat.setAttribute('data-format', '24');
  } else {
    switchFormat.setAttribute('data-format', '12');
  }
});

//Costumize Greeting watch time
const hours = new Date().getHours();
const costumGreet = function () {
  if (hours < 12) {
    greeting.textContent = 'Good Morning,';
  } else if (hours < 18) {
    greeting.textContent = 'Good afternoon,';
  } else {
    greeting.textContent = 'Good evening,';
  }
};
costumGreet();

//Enter key event listener
const pressEnter = function (e) {
  //Get user name

  if (e.key === 'Enter') {
    if (getName.value.length !== 0) {
      inputName.classList.add('hidden');
      userName.value = getName.value;
      localStorage.setItem('currentUser', getName.value);
    }

    //Get focus input
    if (focusInput.value.length !== 0) {
      focusSection.classList.add('hidden');
      focusMessage.value = focusInput.value;
      userInputFocus.classList.remove('hidden');
      localStorage.setItem('userFocus', focusInput.value);
    }
  }
};

//get name from user
inputName.addEventListener('keypress', pressEnter);

//get focus message
focusSection.addEventListener('keypress', pressEnter);

//Get userInput from localStorage
let currentUser = localStorage.getItem('currentUser');
const currentFocus = localStorage.getItem('userFocus');

userName.value = currentUser;
focusMessage.value = currentFocus;

// Edit Name
userName.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    let newName = userName.value;
    newName = userName.value;
    currentUser = localStorage.setItem('currentUser', newName);
    e.preventDefault();
    e.target.blur();
  }
});

// Validation if user input is needed
if (userName.value.length !== 0) {
  inputName.classList.add('hidden');
}

//Edit Focus
if (focusMessage.value.length !== 0) {
  focusSection.classList.add('hidden');
}

focusBtn.addEventListener('click', () => {
  focusSection.classList.remove('hidden');
  userInputFocus.classList.add('hidden');
});

const randomMessage = [
  '',
  'Very Good',
  "You're The Best",
  'Great Work!',
  'Keep Going',
];
const randNumber = Math.trunc(Math.random() * 4) + 1;
doneBtn.addEventListener('click', function () {
  localStorage.setItem('doneFocus', JSON.stringify(doneBtn.checked));
  if (doneBtn.checked) {
    console.log(doneBtn.checked + 'checkbox');
    focusMessage.style.backgroundColor = 'red';
    randMessage.textContent = randomMessage[randNumber];
  } else {
    focusMessage.style.textDecoration = 'none';
    randMessage.textContent = '';
  }
  console.log(JSON.parse(localStorage.getItem('doneFocus')));
});
