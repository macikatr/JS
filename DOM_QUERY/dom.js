// Querying the DOM : Reaching nodes

// Store the reference of the HTML element in a variable
const firstPara = document.querySelector('p'); 
// querySelector() returns the first element that matches the selector
console.log(firstPara);

// grabbing a particular element
const allParas = document.querySelectorAll('p'); // querySelectorAll() returns an array of all elements that match the selector
console.log(allParas); // returns a nodelist like an array
console.log(allParas[0]); // similarly we can access the elements by index or forEach method
allParas.forEach(para => {
    console.log(para);
});

const firstError = document.querySelector('.error');
console.log(firstError);
const divError = document.querySelector('div.error');
console.log(divError);

const errors = document.querySelectorAll('.error');
errors.forEach(error => {
    console.log(error);
});

const lis = document.querySelectorAll('li'); // querySelectorAll() returns an array of all elements that match the selector
console.log(lis);

//inspect > RMC on element> copy menu > copy selector 
const firstTitle = document.querySelector('body > h1');
console.log(firstTitle);



// let i = 0;
// for (i = 0; i < lis.length; i++) {
//     console.log(lis[i]);
// }


