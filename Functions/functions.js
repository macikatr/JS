greet("John");
function greet(name) {
    console.log(`Hello, ${name}!`);
}


function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));

function subtract(a, b) {
    return a - b;
}

console.log(subtract(5, 2));

// varialbes assigned to functions can not be called before the function declaration
//CRITICAL: division(10, 2);  

let division = function divide(a, b) {
    return a / b;
}

console.log(division(10, 2));
