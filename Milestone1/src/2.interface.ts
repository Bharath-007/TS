//Interface

interface Users {
    name: string,
    age: number
}
const user: Users = {
    name: 'John',
    age: 20
}
//or
interface MachineDetails {//interface structure
    machineName: string;
    manufacturedYear: number;
}

function printMachineDetails(machine: MachineDetails) {//print method
    console.log(machine.machineName + ' ' + machine.manufacturedYear);
}

let machineData1 = { machineName: 'Laser Machine', manufacturedYear: 2022 };
printMachineDetails(machineData1);

//functuin

interface User {
    (name: string, age: number): void;
}

const userDetails: User = (userName, userAge) => {
    return userName + ' ' + userAge;
}

console.log(userDetails('Bharath', 21));

//Extending Interfaces

interface Employee extends Users {
    salary: number;
}
const employeeDetails: Employee = {
    name: 'John',
    age: 20,
    salary: 10000
}

//type cant br replaced with interface
type EmpExperience = {
    position: string,
    experience: number
}

const experienceDetails: EmpExperience = {
    position: 'Software Engineer',
    experience: 3
}
