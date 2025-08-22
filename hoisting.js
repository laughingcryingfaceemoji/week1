//Declared function can be called from anywhere. Expression function can be called only below the part from where it's been declared from. Note both are called the same
//way


// 1.
function cube(x) {
  return x * x * x;
}
// const cube = function (x) {
//return x * x *x;};

// 2.
function fullName(first, last) {
  return first + " " + last;
}
//const fullName = function (first, last){
//return first + "" + last;};

// 3.
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}
// const power = function (base, exp){
//if (exp === 0) {
//    return 1;
//  }
//  return base * power(base, exp - 1);};


// 4.
function sumCubes(numbers) {
  var total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}
// const sumCubes = function (numbers) {
//var total = 0;
//  for (let i = 0; i < numbers.length; i++) {
//    total = total + cube(numbers[i]);
//  return total;
//};

//1.
// Why does JavaScript output undefined instead of throwing an error in the following code?
// console.log(message);

// var message = 'Hi there!';
//ANSWER: Because it finds the message variable but not whats inside of it, because its declared after console log command.

//2.
// Why does JavaScript throw an error instead of logging undefined in the following code?

// console.log(message);

// let message = 'Hi there!';
//ANSWER:Because Var can be called above its declaration and Let only below its declaration.

//3.
// Explain precisely what happens when the following code is executed.

// console.log(showMessage());

// const showMessage = function(){
//   return 'Hi there!';
// };
//ANSWER: this is a function expression which means it is not been initialized after the console.log like it should've been but before. Console.log cannot "see it"

//4.
// Why does JavaScript not throw any errors when the following code is executed?

// console.log(showMessage());

// function showMessage(){
//   return 'Hi there!';
// }
//ANSWER: this is a declared function function which means it's fully hoisted, it moves the function name and its body to the tope of the scope.

// 1.
// for(let i = 0; i < values.length; i++){
//   console.log(values[i]);
// }

// let values = [10, 20, 30];

//CORRECTED VERSION
var values = [10, 20, 30];
for(let i = 0; i < values.length; i++){
   console.log(values[i]);
 }
// // 2.
// console.log(welcome('Charlie', 'Munger'));

// function welcome(first, last) {
//   return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
// };
// let lastLogin = '1/1/1970';
//CORRECTED VERSION
var lastLogin = '1/1/1970';

function welcome(first, last) {
   return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};
 console.log(welcome('Charlie', 'Munger'));
