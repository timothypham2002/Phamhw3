function validateInput(hours, minutes, seconds) {
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
    return false;
  }
  return true;
}

function displayTime(hours, minutes, seconds) {
  return hours + "h" + minutes + "m" + seconds + "s";
}

function followingSecond(hours, minutes, seconds) {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
      if (hours >= 24) {
        hours = 0;
      }
    }
  }
  return displayTime(hours, minutes, seconds);
}

function main() {
  let hours = parseInt(prompt("Enter hours:"));
  let minutes = parseInt(prompt("Enter minutes:"));
  let seconds = parseInt(prompt("Enter seconds:"));

  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || !validateInput(hours, minutes, seconds)) {
    console.log("Invalid input. Please enter valid time values.");
    return;
  }

  console.log("Time input: " + displayTime(hours, minutes, seconds));

  console.log("One second later: " + followingSecond(hours, minutes, seconds));
}

main();
