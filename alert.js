"use strict";

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);

// function pow(x, n) {
//     return x ** n;
// }

// let x = Number(prompt("x", ""));
// let n = Number(prompt("n", ""));

// alert(pow(x, n));

// function min(a, b) {
//     if (a <= b) {
//         return a
//     } else {
//         return b
//     }
// }

// alert(min(3, 2));

// let age = 20;

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Did parents allow you?');
//     }
// }

// function checkAgeQuestionMark(age) {
//     return (age > 18) ? true : confirm('checkAgeQuestionMark: Did parents allow you?');
// }

// function checkAgeOR(age) {
//     return (age > 18 || confirm('checkAgeOR: Did parents allow you?'));
// }

// checkAge(age);
// checkAgeQuestionMark(age);
// checkAgeOR(age);

// let a = +prompt('a?', '');

// // If block...
// if (a == 0) {
//     alert(0);
// }
// if (a == 1) {
//     alert(1);
// }

// if (a == 2 || a == 3) {
//     alert('2,3');
// }

// // ...transformed into switch case block
// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert("2,3");
//         break;

// }

// let browser = prompt("Which browser are you using?", "")

// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge!");
//         break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;

//     default:
//         alert('We hope that this page looks ok!');
// }

// if (browser == "Edge") {
//     alert("You've got the Edge!");
// } else if (browser == "Chrome"
//     || browser == "Firefox"
//     || browser == "Safari"
//     || browser == "Opera") {
//     alert('Okay we support these browsers too');
// } else {
//     alert('We hope that this page looks ok!');
// }

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//     for (let j = 2; j < i; j++) { // look for a divisor..
//         if (i % j == 0) continue nextPrime; // not a prime, go next i
//     }

//     alert(i); // a prime
// }

// let max = 10;
// let max = prompt("Output prime numbers up to a max of", 10);
// let denom;

// iLoop: for (let i = 2; i <= max; i++) {
//     // alert(`${i} is being tested.`)
//     // denom = 2;
//     for (let denom = 2; denom <= Math.sqrt(i); denom++) {
//         if (i % denom == 0) continue iLoop;
//     }
//     alert(`${i} is a prime number.`)
// }

// let inputNumber;
// do {
//     inputNumber = prompt("Please enter a number greater than 100", "")
// } while (inputNumber <= 100 && inputNumber);

// let i = 0;

// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }

// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//     alert(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//     alert(i);
// }

// let i = 1;
// do {
//     alert(i);
//     i++;
// } while (i < 3);

// let age = prompt("How old are you?", "");

// if (age < 14 || age > 90) {
//     alert("Age is not between 14 and 90");
// } else {
//     alert("Age is between 14 and 90");
// }

// let login = prompt("Who are you?", "Employee");

// let message;

// message = (login == 'Employee') ? 'Hello' :
//     (login == 'Director') ? 'Greetings' :
//         (login == '') ? 'No login' :
//             "";

// alert(message);

// let age = 9;

// let accessAllowed = age > 18 ? true : false;
// alert(accessAllowed);

// let result;
// let a = 2;
// let b = 2;

// result = (a + b < 4) ? 'Below' : 'Over';

// alert(result);

// let input_number = Number(prompt("Please enter a number", ""));
// let sign;

// if (input_number > 0) {
//     sign = 1;
// } else if (input_number < 0) {
//     sign = -1;
// } else if (input_number == 0) {
//     sign = 0;
// }

// alert(sign);

// let nameGuess = prompt("What's the official name of JavaScript?")

// if (nameGuess == "ECMAScript") {
//     alert("Right!");
// } else {
//     alert("You don???t know? ECMAScript!");
// }

// let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// let cond = (year == 2015); // equality evaluates to true or false

// if (year < 2015) {
//     alert("Too early");
// } else if (year > 2015) {
//     alert("Too late");
// } else {
//     alert("That's correct!");
// }

// let a = Number(prompt("First number?", 1));
// let b = Number(prompt("Second number?", 2));

// alert(a + b); // 12

// let name = prompt("What is your name?", "");
// alert(`Your name is ${name}.`);

// let age = prompt("How old are you in years?", 22);
// alert(`You said you are ${age} years old.`);

// alert(typeof alert); // "number")
// alert(typeof 0); // "number")

// let isGreater = 4 > 1;

// alert(isGreater); // true (the comparison result is "yes")

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${str}`;

// alert(phrase);

// let ourPlanet = "Earth";
// let visitor;
// visitor = "Jamie";

// alert(ourPlanet);
// alert(visitor);

// let admin;
// let name;

// name = "John";
// admin = name;
// alert(admin);

// const COLOR_ORANGE = "#FF7F00";

// let color = COLOR_ORANGE;
// alert(color);

// let hello = 'Hello world!'
// let message;

// message = hello;
// alert(message);

// alert("I???m JavaScript!");
