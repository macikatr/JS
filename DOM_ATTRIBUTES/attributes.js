const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.mikrotest.com.tr');
link.innerText = "MikroTest";

const mssg = document.querySelector('p');
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green');
mssg.innerText = "This is a success message";
