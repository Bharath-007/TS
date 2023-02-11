"use strict";
//Interface
const user = {
    name: 'John',
    age: 20
};
function printMachineDetails(machine) {
    console.log(machine.machineName + ' ' + machine.manufacturedYear);
}
let machineData1 = { machineName: 'Laser Machine', manufacturedYear: 2022 };
printMachineDetails(machineData1);
const userDetails = (userName, userAge) => {
    return userName + ' ' + userAge;
};
console.log(userDetails('Bharath', 21));
const employeeDetails = {
    name: 'John',
    age: 20,
    salary: 10000
};
const experienceDetails = {
    position: 'Software Engineer',
    experience: 3
};
