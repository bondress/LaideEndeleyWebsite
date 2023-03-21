// Function to pad single numbers with zero and/or pluralize/depluralize days, hours, minutes and seconds.
function padOrPluralize(variable, text) {
  variable = variable < 10 ? "0" + variable : variable;
  text = variable < 2 ? text : text + "s";
  return variable + " " + text;
}

// Countdown to the next TWS programme
let timerContainer = getOne(".tws-countdown-timer"),
  timer = getOne(".timer"),
  twsDate = new Date("Mar 26, 2023").getTime();

let countdownManager = setInterval(() => {
  let now = new Date().getTime(),
    distance = twsDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours = Math.floor(distance / (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

  days = padOrPluralize(days, "day");
  hours = padOrPluralize(hours, "hour");
  minutes = padOrPluralize(minutes, "minute");
  seconds = padOrPluralize(seconds, "second");

  timer.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

  if (distance < 0) {
    clearInterval(countdownManager);
    timer.innerHTML = "IT'S TODAY, PEOPLE!!!";
  }
}, 1000);