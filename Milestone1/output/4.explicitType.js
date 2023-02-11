"use strict";
//In explicit type we explicitly declare variable,property and function
let x = 'wonderla';
console.log(x);
//explicit function
const greet = (greeting, personName) => {
    console.log(greeting + ' ' + personName);
};
greet('Welcome', 'Vikas');
const p1 = {
    name: 'Vikas',
    age: 20
};
//array
let games;
games = ['codewars', 'hackerrank'];
games.push('codeacademy');
console.log(games.push());
let objects;
objects = {
    name: 'Varun',
    game: 'Hockey',
    stipend: 5000
};
let object2 = {
    name: 'varun',
    game: 'Hockey',
    stipend: 4000
};
