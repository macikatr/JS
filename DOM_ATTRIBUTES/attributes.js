const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.mikrotest.com.tr');
link.innerText = "MikroTest";

const mssg = document.querySelector('p');
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green'); // it overwrites the existing style
mssg.innerText = "This is a success message";

console.log(mssg.style); // we can use style property to add or remove styles without overwriting the existing styles
// Also shows how CSS styles should be written in JS like instead font-size we write fontSize
mssg.style.margin = "0 0 0 50px"; // we can add new styles
mssg.style.color = "red"; // we can update existing styles
mssg.style.margin = ""; // we can remove existing styles


mssg.style.fontSize = "20px"; 