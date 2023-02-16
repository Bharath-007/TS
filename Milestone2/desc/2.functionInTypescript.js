"use strict";
//named function
function display1() {
    console.log('Hello TypeScript');
}
display1();
//function can include parameter and return type
function sum(x, y) {
    return x + y;
}
console.log(sum(2, 3));
//anonymous function
let greeetings = function () {
    console.log('Hello TypeScript');
};
greeetings();
let Sum = function (x, y) {
    return x + y;
};
console.log(Sum(5, 10));
//arrow function
let validate = function (x) {
    return isNaN(x);
};
console.log(validate(10));
//function overloading
