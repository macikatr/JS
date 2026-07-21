// primitive types : number, string, boolean, undefined, null, symbol STORED IN STACK
// reference types : object, array, function , date STORED IN HEAP
let a = 10;
let b = "Hello";
let c = true;
let d = undefined;
let e = null;
let f = Symbol("symbol");

console.log(`a : ${a}`);


// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne; // seperately stored in stack
console.log(`scoreOne : ${scoreOne}` , `scoreTwo : ${scoreTwo}`);
// scoreOne : 50 scoreTwo : 50
scoreOne = 100;
console.log(`scoreOne : ${scoreOne}` , `scoreTwo : ${scoreTwo}`);
// scoreOne : 100 scoreTwo : 50

// reference values
const userOne = {name: "John", age: 30}; // stored in heap 
const userTwo = userOne; // both of these pointers point to the same object
console.log(userOne,  userTwo);
// {name: 'John', age: 30} {name: 'John', age: 30}

userOne.age = 40; // if we update one it updates the other too, because both are pointing to the same object
console.log(userOne,  userTwo);
// {name: 'John', age: 40} {name: 'John', age: 40}

// these reference types stored once with two seperate pointers


