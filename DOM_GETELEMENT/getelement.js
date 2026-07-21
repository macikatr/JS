// get an element by ID - singular

const title = document.getElementById('page-title');
console.log(title);

// get an element by class name - plural
let errorClasses = document.getElementsByClassName('error');
console.log(errorClasses); // returns a HMTLCollection like an array but we cant use forEach
// errorClasses.forEach(error => {
//     console.log(error);
// });
console.log(errorClasses[0]); // but similarly we can access the elements by index

// get an element by tag name - plural
let lis = document.getElementsByTagName('li');
console.log(lis);