const number = Number(prompt("Enter a number between 1-100:"));
if ((number > 1) && (number < 100)) {
   console.log(`Thank you! You entered ${number}, a valid number.`);
}
else {
   console.log(`Sorry, ${number} is not a valid entry.`);
}

