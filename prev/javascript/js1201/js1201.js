// Q1
//
//   var word = prompt("Type in a word:");
//
//   if (word.length < 3) {
//     console.log("Too Short!");
//   }
//
// Q2
//   var word = prompt("Enter a word: ");
//   if (word.length == 0) {
//     console.log("Please Reply.");
//   }
//
// Q3
//
//   var input = prompt("Input: ");
//   if (Number(input) != "NaN") {
//     console.log("Number");
//   }
//
// Q4
//
//   var input = prompt("Enter a number: ");
//   if (Number.isInteger(Number(input))) {
//     console.log("It is an integer");
//   }
//   else {
//     console.log("It is not an integer, enter another number")
//   }
//
// Q5
//   var year = prompt("Enter a year: ");
//   if (Number.isInteger(Number(year) / 4)) {
//
//     if (Number.isInteger(Number(year) / 400)) {
//       console.log("It is a leap year");
//     }
//
//     else if (Number.isInteger(Number(year) / 100)) {
//       console.log("It is not a leap year.");
//     }
//
//     else {
//       console.log("It is a leap year.");
//     }
//   }
//
//   else{
//     console.log("It is not a leap year.");
//   }
//
//
// Q6
//   var number1 = Math.ceil(Math.random() * 100 + 1);
//   var number2 = Math.ceil(Math.random() * 100 + 1);
//   if (number1 == number2) {
//     console.log(number1 + " and " + number2 + " are equal.");
//   }
//   else if (number1 > number2) {
//     console.log (number1 + " is larger than " + number2 + ".")
//   }
//   else{
//     console.log (number2 + " is larger than " + number1 + ".")
//   }

//Q6
  //
  // var number = 0;
  //   while (number < 101) {
  //     if (Number.isInteger(Number(number) / 3)) {
  //       console.log("Hey");
  //     }
  //     else {
  //       console.log(number);
  //     }
  //     number += 1;
  //   }

//Q7
  // var number = 0;
  // while (number < 1001) {
  //   if (Number.isInteger(Math.sqrt(Number(number)))) {
  //     console.log(number);
  //   }
  //   number += 1
  // }

// //Q8
//   var subjects = ["English", "Mathematics", "Science", "Technology", "History", "Geography", "Visual Arts", "Music"]
//   for(var i=0; i<subjects.length; i+=1) {
//     console.log(subjects[i]);
//   }

//Q9
  // var addTwo = function() {
  //   var num1 = Math.ceil(Math.random() * 100 +1);
  //   var num2 = Math.ceil(Math.random() * 100 +1);
  //
  //   console.log(num1);
  //   console.log(num2);
  //
  //   return num1 + num2;
  // }
//
//
// var multiplication = function() {
//   var num1 = Math.ceil(Math.random() * 9);
//   var num2 = Math.ceil(Math.random() * 9);
//
//   var answer = num1 * num2;
//
//   var user = prompt(num1 + " X " + num2 + " = ");
//
//   if (answer == Number(user)) {
//     alert("Correct!");
//   }
//   else {
//     alert("Wrong answer, correct answer = " + answer);
//   }
// }


var multTwo = function () {
  var product = 1;
  for(var i=0; i <arguments.length; i+=1) {
    product = product * arguments[i];
  }
  return product;
}

var hoyoung = {
  firstname: "Hoyoung",
  lastname: "Lim",
  dob: "30/04/2002",
  age: "15",
  gender: "male"
}
