// Реализовать метод `.delay`
// ...

Function.prototype.delay = function(time) {
    setTimeout(this, time);
}

foo.delay(300);


function foo() {
    console.log("Wow!");
}
