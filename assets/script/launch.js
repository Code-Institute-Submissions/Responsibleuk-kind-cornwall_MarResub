/* jshint esversion: 8 */

// Countdown

// Defining the months for our countdown timer
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Defining the days for our countdown timer
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const giveaway = document.querySelector('.date');
const deadline = document.querySelector('.launch');
const items = document.querySelectorAll('.launch-format h4');

// This sets the date that we are counting down to our launch date
let launchDate = new Date(2022, 3, 25, 9, 30, 0);

const year = launchDate.getFullYear();
const hours = launchDate.getHours();
const minutes = launchDate.getMinutes();

let month = launchDate.getMonth();
month = months[month];
const weekday = weekdays[launchDate.getDay()];
const date = launchDate.getDate();

giveaway.textContent = `Launches ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const launchTime = launchDate.getTime();
function getRemaindingTime() {
  const today = new Date().getTime();

  /*
  This section sets out the values for our days, hours, minutes, seconds, 
  the values are in milliseconds, 1 day = 24 hours, 1 hour = 60 minutes, 1 minute = 60 seconds, 1 second = 1000 miliseconds  
  */

  const t = launchTime - today;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // This section calculates the values for seconds, minutes, hours and days
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // Set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Kind Cornwall has launched, membership giveaway has ended</h4>`;
  }
}

let countdown = setInterval(getRemaindingTime, 1000);

// finally we set the initial values for the countdown
getRemaindingTime();
