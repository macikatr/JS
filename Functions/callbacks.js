//callbacks & foreach
function myFunc(callback) {
    console.log("myFunc");
    callback();
}

// const myFunc = function(callback) {
//     console.log("myFunc");
//     callback();
// }

myFunc(function() {
    console.log("inside myFunc");
});