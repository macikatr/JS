// Booleans, comparsions

console.log(true, false, "true", "false");


// Methods can return booleans
let email = 'john.doe@gmail.com';

let result = email.includes('@');
console.log(result);
// true

//comparison operators
let age = 25;
console.log(age > 18); 
// true
console.log(age < 18);
// false
console.log(age >= 18);
// true
console.log(age <= 18);
// false
console.log(age != 25);
// false
console.log(age == 25);
// true
console.log(age == "25");
// true
console.log(age === "25");
// false type coercion does not occur with strict equality operator (===)

//logical operators
let isAdult = age > 18;
console.log(isAdult);
// true
isAdult = age < 18;
console.log(isAdult);
// false