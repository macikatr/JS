//LOOPS
// for loop
// for (initialization variable; condition; increment/decrement) {code block}
for (let i = 0; i < 5; i++) {
    console.log(i);
}

languages = ['JavaScript', 'Java', 'CSS'];
for (let i = 0; i < languages.length; i++) {
    console.log(languages[i]);
    let html = `<li>${languages[i]}</li>`;
    console.log(html);
    // document.querySelector('#languages').innerHTML += html;
}



// while loop
// while (condition) {code block}
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do while loop
// do {code block} while (condition);
console.log("Loop finished");

i = 5;
do {
    console.log(i);
    i++;
} while (i < 5);
// to run the code block at least once



//CONDITIONALS
//if statement
let age = 18;
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
// Logical AND and OR
let password = "password";
if (password.length >= 8 && password.includes("@")) {
    console.log("Strong password");
} else if (password.length >= 8 || password.includes("@") && password.length > 5) {
    console.log("Medium password");
} else {
    console.log("Password is weak");
}

// logical NOT

let user = false;
if (!user) {
    console.log("User is not logged in");
}

// break and continue
languages = ['JavaScript', 'Java', 'CSS', 'HTML'];
for (let i = 0; i < languages.length; i++) {
    if (languages[i] === 'CSS') {
        break;
    }
    console.log(languages[i]);
}

for (let i = 0; i < languages.length; i++) {
    if (i === 2) {
        continue;
    }
    console.log(languages[i]);
}   

//switch statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    case "Wednesday":
        console.log("It's Wednesday");
        break;
    case "Thursday":
        console.log("It's Thursday");
        break;
    case "Friday":
        console.log("It's Friday");
        break;
    default:
        console.log("It's not Monday, Tuesday, Wednesday, Thursday, or Friday");
        break;
}