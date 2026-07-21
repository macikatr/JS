// grabbing first paragraph and change its text
const firstPara = document.querySelector('p'); 
console.log(firstPara.innerText);

// firstPara.innerText = "This is the first paragraph.";
// firstPara.innerText += " And i have added some more text";
// firstPara.textContent = "This is the first paragraph";
// console.log(firstPara);

// grabbing all paragraphs and change their text
const allParas = document.querySelectorAll('p'); // querySelectorAll() returns an array of all elements that match the selector
allParas.forEach(para => {
    para.textContent += " New text";
});

// changing the HTML

const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML = `<h2 style="color:red">Brand new content</h2>`;
content.innerHTML += `<p>This is the added content</p>`;

const topics = ["HTML", "CSS", "JavaScript"];
topics.forEach(topic => {
    content.innerHTML += `<li>${topic} </li>`;
})