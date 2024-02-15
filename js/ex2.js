const NameEntered = String(prompt("Enter your name:"));
const GradeStanding = Number(prompt("Enter the number of units:"));
if ((GradeStanding >= 0) && (GradeStanding <= 30)) {
   console.log(`Hi ${NameEntered}`);
   console.log(`Your grade standing is Freshman.`);
}
else if ((GradeStanding >= 31) && (GradeStanding <= 60)) {
   console.log(`Hi ${NameEntered}`);
   console.log(`Your grade standing is Sophomore.`);
}
else if ((GradeStanding >= 61) && (GradeStanding <= 90)) {
   console.log(`Hi ${NameEntered}`);
   console.log(`Your grade standing is Junior.`);
}
else if (GradeStanding >= 91) {
   console.log(`Hi ${NameEntered}`);
   console.log(`Your grade standing is Senior.`);
}

else {
   console.log('Invalid input. Please input correct name and unit number.')
}

