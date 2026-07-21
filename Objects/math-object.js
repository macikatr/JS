// math object

console.log(Math);
console.log(Math.PI); // built-in constants
// E :  2.718281828459045
// LN2 :  0.6931471805599453
// LN10 :  2.302585092994046
// LOG2E:  1.4426950408889634
// LOG10E:  0.4342944819032518
// PI :  3.141592653589793
// SQRT1_2 :  0.7071067811865476
// SQRT2 :  1.4142135623730951

const area = 7.7;

console.log(Math.round(area));  // rounds the number "to the nearest integer" = 8
console.log(Math.floor(area));  // rounds the number "down" to the nearest integer = 7
console.log(Math.ceil(area));   // rounds the number "up" to the nearest integer = 8
console.log(Math.trunc(area));  // rounds the number "towards zero" to the nearest integer = 7

// generating random numbers
 

const random = Math.random(); // generates a random number between 0 and 1  with decimal
console.log(random);
console.log(Math.round(random*100)); // generates a random number between 0 and 100
console.log(Math.round(random * 100 + 100)); // generates a random number between 100 and 200