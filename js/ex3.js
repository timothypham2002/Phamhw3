const DayEntered = prompt("What day of the week is it?");
switch (DayEntered) {
  case "sun":
    console.log("You entered: sun");
    console.log("The Following day is: mon");
    break;
  case "mon":
    console.log("You entered: mon");
    console.log("The Following day is: tue");
    break;
  case "tue":
    console.log("You entered: tue");
    console.log("The Following day is: wed");
    break;
  case "wed":
    console.log("You entered: wed");
    console.log("The Following day is: thu");
    break;
  case "thu":
    console.log("You entered: thu");
    console.log("The Following day is: fri");
    break;
  case "fri":
    console.log("You entered: fri");
    console.log("The Following day is: sat");
    break;
  case "sat":
    console.log("You entered: sat");
    console.log("The Following day is: sun");
    break;
  default:
    console.log("Not a valid entry for the day");
}