"use strict";
//typeScript Objects
//Implicit or type inference
let car = {
    year: 2022,
    name: "Hectar",
    brand: "MG",
    color: "Black"
};
car.year = 3029;
console.log(car);
// car.made = 'German'//TS wont allow to redefine the undefined properties
//we can reasign the object values but we cant add extra attributes to it
car = {
    year: 2012,
    name: "800",
    brand: "Maruti",
    color: "white",
    // made:'Indian' - it will throw an error at compile time
};
//Explicit - In explicit we give the type
let employee = {
    empName: 'Sathan',
    age: 22,
    isPermanent: false
};
let employee1 = {
    empName: 'Sathan',
    age: 22,
    isPermanent: false
};
let user1 = {
    username: 'Sarah',
    password: 'password',
};
