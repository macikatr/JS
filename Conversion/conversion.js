// Type conversion
let score;
console.log(score +1);
// NaN
score = "100";

console.log(score +1);
// 1001
score = Number(score);
console.log(score +1);
// 101
console.log(typeof score);
// number

let iwannabeanumber = Number("iwannabeanumber");
console.log(iwannabeanumber);
// NaN

let iwannabeastring = String(25);
console.log(iwannabeastring, typeof iwannabeastring);
// 25 string

let result = Boolean(100);
console.log(result, typeof result);
// true boolean

result = Boolean(0);
console.log(result, typeof result);
// false boolean

result = Boolean("0");
console.log(result, typeof result);
// true boolean

result = Boolean("");
console.log(result, typeof result);
// false boolean