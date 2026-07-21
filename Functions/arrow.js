//arrow functions

// const greet = function(){
//     return "Hello";
// }

const greet = () => "Hello";

// console.log(greet());
result = greet();
console.log(result);
console.log(typeof result);
if(typeof result === "string"){
    console.log(result.toUpperCase());
}


// const bill = function(products, tax) {
//     let total = 0;
//     for (let i =0; i < products.length; i++) {
//         console.log(total)
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }



const bill = (products, tax) =>{
    let total = 0
    for (let i = 0; i < products.length; i++){
    total += products[i] + products[i] * tax;
    }
    return total;

}

console.log(bill([1, 2, 3], 0.1));

