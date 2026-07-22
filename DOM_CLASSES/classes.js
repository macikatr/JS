const firstPara = document.querySelector('p');

console.log(firstPara.classList); // DOMTokenList ['error', value: 'error']

firstPara.classList.add('success'); // adds a class to the element
firstPara.classList.remove('error'); // removes a class from the element
