console.log('Hello World!');

let age = 20;
let firstName = 'John';
let lastName = 'Doe';

let fullName = firstName + ' ' + lastName;  

console.log(fullName, age);
/*
age = 21;

console.log(name, age); */

console.log(fullName[0]);

console.log(fullName.length);

console.log(fullName.toUpperCase());

let result = fullName.split(' ');
console.log(result, result.length, result[0], result[1]);

result = fullName.toLowerCase();
console.log(result);

let index = fullName.indexOf('J');
    console.log(index);

    for (let i = 0; i <= fullName.length; i++) {
        let result = fullName.slice(0,i)
        console.log(result);
    }

// concatenation way
let person = "The " + fullName + " is " + age + " years old";
console.log(person);
// template string way
person = `The ${fullName} is ${age} years old`;
console.log(person);   
// creating HTML template
let htmlTemplate = `
<div>
  <h1>${fullName}</h1>
  <p>Age: ${age}</p>
</div>
`;
console.log(htmlTemplate);



let email = 'john.doe@gmail.com';

let validEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
let hasAtSymbol = email.includes('@');
// true or false
const isValidEmail = email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) !== null;
// true or false

console.log(validEmail);
// (4) ['john.doe@gmail.com', '.doe', undefined, '.com', index: 0, input: 'john.doe@gmail.com', groups: undefined]
console.log(isValidEmail);
// true

if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
  console.log('Valid email');
} else {
  console.log('Invalid email');
}

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const testValidEmail = emailRegex.test(email);
console.log(testValidEmail); // true
/* Above regex rejects many valid emails, for example:
❌ john+test@gmail.com
❌ john_doe@sub.example.co.uk
❌ john-doe@my-domain.io
❌ a@b.email
*/ 


// A safer “practical” regex (commonly used)
const lessRestrictiveEmailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailRegex.test(email)); // true

/*
Regex reading cheat sheet
Symbol	Means
^	    start of string
$	    end of string
+	    one or more
*	    zero or more
?	    optional
[]	    character set
[^ ]	NOT these characters
\w	    letter / number / underscore
\s	    whitespace
\.	    literal dot
*/

// math operators + - * / % **
// order of operations B I D M A S (Brackets, Indices, Division, Multiplication, Addition, Subtraction)
// let result = 2 + 3 * 4 / 5 % 6;
// let result = (2 + 3) * 4 / 5 % 6;
let x = 10;
let y = 5;

let sum = x + y;
console.log(sum);
// 15
let difference = x - y;
console.log(difference);
// 5
let product = x * y;
console.log(product);
// 50
let quotient = x / y;
console.log(quotient);
// 2
let remainder = x % y;
console.log(remainder);
// 0
let power = x ** y;
console.log(power);
// 100000 

// Shorthand math operators ++, --, +=, -=, *=, /=, %=, **=
x++;
console.log(x);
// 11
x--;
console.log(x);
// 10
++x;
console.log(x);
// 11
--x;
console.log(x);
// 10
x += 2;
console.log(x);
// 12
x -= 2;
console.log(x);
// 10
x *= 2;
console.log(x);
// 20
x /= 2;
console.log(x);
// 10
x %= 2;
console.log(x);
// 0
x **= 2;
console.log(x);
// 0

//NaN (Not a Number)
console.log(5 / "hello"); // NaN
