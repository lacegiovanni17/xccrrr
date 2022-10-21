import { now } from "./utility.js";

const getClockTemplate = (id) => `<div id="clock-${id}" class="clock">
    <div class="hand second-hand" id="clock-${id}-second-hand"></div>
    <div class="hand minute-hand" id="clock-${id}-minute-hand"></div>
    <div class="hand hour-hand" id="clock-${id}-hour-hand"></div>
    <div class="clock-center"></div>
</div>`;

const startClock = () => {
  document.body.innerHTML = getClockTemplate(0);
};
const tikTok = () => {
  var sdegree = 270 + 6 * now().seconds;
  var srotate = "rotate(" + sdegree + "deg) translate(50%)";
  document
    .getElementById("clock-0-second-hand")
    .setAttribute("style", "transform: " + srotate);

  var mdegree = 270 + (60 * now().minutes + now().seconds) / 10;
  var mrotate = "rotate(" + mdegree + "deg)  translate(50%)";
  document
    .getElementById("clock-0-minute-hand")
    .setAttribute("style", "transform: " + mrotate);

  var hdegree =
    270 + (3600 * now().hours + 60 * now().minutes + now().seconds) / 120;
  var hrotate = "rotate(" + hdegree + "deg) translate(50%)";
  document
    .getElementById("clock-0-hour-hand")
    .setAttribute("style", "transform: " + hrotate);
};
startClock();
setInterval(tikTok(), 1000);

let timerId = setInterval(() => tikTok(), 1000);
/*
Description:
    Your job is to fix this broken clock!
    Right now it's only right twice a day.

Skills: 
    CSS Transforms, JavaScript Dates, setTimeout()/setInterval(), HTML/CSS in JavaScript
*/

// Calculate rotation with seconds
// degrees = 270 + 6 * seconds

// With Minutes
// degrees = 270 + (60 * minutes + seconds) / 10

// With Hours
// 270 + (3600 * time.hours + 60 * time.minutes + time.seconds) / 120
