//Object type

//using type
type User = {
    name: string,
    age: number
}
const userDetails: User = {
    name: 'Aravind',
    age: 40
}
console.log(typeof userDetails);

console.log(userDetails.name, userDetails.age);


//using interface
interface Employee {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
}


const empDetails: Employee={
    name: 'Aravind',
    age: 40,
    address: {
        city: 'Bangalore',
        country: 'India'
    }
}

console.log(empDetails);






