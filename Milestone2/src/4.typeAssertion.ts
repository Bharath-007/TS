//Type Assertion

let code: any = 123; 
let employeeCode = <number> code; 
console.log(typeof(employeeCode)); //Output: number'

let employeeCode2 = {name:'Employ',empID:211}
let empname = (employeeCode2 as {name:string}).name;
console.log(empname);