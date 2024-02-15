function passwordValidator() {
  const correctPassword = "secret";

  let userInput;
  let attempts = 0;

  while (attempts < 3) {
    userInput = prompt("Enter the secret password:");

    if (userInput === correctPassword) {
      console.log("You entered the correct password after", attempts + 1, "attempt(s)");
      return;
    } else {
      attempts++;
    }
  }

  console.log("Your account is locked! You failed to enter the correct password", attempts, "times");
}

passwordValidator();
