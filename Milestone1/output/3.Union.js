"use strict";
//basic
let empID;
empID = 'BHARATH';
empID = 3456789;
console.log(empID);
//function
const printId = (id) => {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
};
printId('hey');
