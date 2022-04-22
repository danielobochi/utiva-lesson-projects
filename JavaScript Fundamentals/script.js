/****************************************
 * Variables and Data Types
 */

// const firstName = "John"; // Camel case notation
// console.log(firstName);

// const lastName = "Smith";
// const age = 28;

// const adult = true;
// console.log(adult);

// let job;

// var container = "something";
// console.log(container);

// // Rules
// // const 3years = 3;
// // const johnmark = 'John Mark'
// // const delete = 'ok';

// console.log(container);
// console.log(job);

/****************************************
 * Basic Operators
 */

// const thisYear = 2022;

// // Math operators
// const johnYear = thisYear - 28;
// const markYear = thisYear - 34;

// console.log(johnYear);
// // console.log(thisYear + 2);
// // console.log(thisYear * 2);
// // console.log(thisYear / 2);

// // Logical operators
// console.log(markYear);
// console.log(johnYear > markYear);
// console.log(johnYear < markYear);

// // typeof operator
// let job;
// console.log(typeof job);

/****************************************
 * if and else statements
 */

// const firstName = "John";
// const maritalStatus = "single";

// if (maritalStatus === "married") {
//   console.log(`${firstName} is married.`);
// } else {
//   console.log(`${firstName} will hopefully marry soon!`);
// }

// const isMarried = false;

// if (isMarried) {
//   console.log(`${firstName} is married.`);
// } else {
//   console.log(`${firstName} will hopefully marry soon!`);
// }

/****************************************
 * Arrays
 */

// const names = ["John", "Mark", "Jane"];

// console.log(names);
// console.log(names[0]);
// console.log(names.length);

// names[4] = "Mary";

// names.push("Vick");
// names.unshift("Ola");
// console.log(names.sort());

/****************************************
 * Objects
 */

const john = {
  picture: "https://www.where-my-picture-is.jpg",
  name: "John Smith",
  phone: "08028929292",
  email: "john@gmail.com",
  age: 28,
  isMaried: true,
};

const mark = {
  picture: "https://www.where-my-picture-is.jpg",
  name: "John Smith",
  phone: "08028929292",
  email: "john@gmail.com",
  age: 28,
  isMaried: true,
};

const people = [john, mark];

const onlyHisEmail = john.email;
console.log(onlyHisEmail);

delete john.isMaried;
console.log(john);
