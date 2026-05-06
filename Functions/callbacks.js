//callbacks & foreach


const myFunc = function(callback) {
    console.log("myFunc");
    callback();
}

myFunc(function() {
    console.log("inside myFunc");
});