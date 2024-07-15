const readlineSync = require('readline-sync');

// Assignment 1

let num = -9;
let age = 19;
if (num == 0) {
  console.log("a is zero");
} else if (num > 0) {
  console.log("a is positive");
} else {
  console.log("a is negative");
}
if (age >= 18) {
  console.log("your are eligible");
} else {
  console.log("your not eligible");
}

// Assignment 2
let a = 9,
  b = 18,
  c = 12;

if (a > b) {
  if (a > c) {
    console.log("a is greater");
  } else {
    console.log("c is greater");
  }
} else {
  if (b > c) {
    console.log("b is greater");
  } else {
    console.log("c is greater");
  }
}

// Assignment 3

const day = parseInt(readlineSync.question('Enter a day number (1-7): '), 10);

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
        break;
}

const marks=parseInt(readlineSync.question('Enter a your marks: '), 10);

switch (true) {
    case (marks > 80):
        console.log("Marks are greater than 80: " + marks);
        console.log("Grade: A");
        break;
    case (marks >= 60 && marks <= 80):
        console.log("Marks are between 60 and 80: " + marks);
        console.log("Grade: B");
        break;
    case (marks >= 40 && marks < 60):
        console.log("Marks are between 40 and 60: " + marks);
        console.log("Grade: C");
        break;
    default:
        console.log("Marks are below 40: " + marks);
        console.log("Grade: F");
        break;
}


//Assignment 4
let number=parseInt(readlineSync.question('Enter a num: '), 10);
number%2==0?console.log("even"):console.log("odd")

//Assignment 5

let leapYear=parseInt(readlineSync.question("enter leap year : "),10)

if (leapYear % 4 === 0 && (leapYear % 100 !== 0 || leapYear % 400 === 0)) {
    console.log(leapYear + " is a leap year");
} else {
    console.log(leapYear + " is not a leap year");
}
