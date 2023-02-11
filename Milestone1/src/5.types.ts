//Array
let list: number[] = [1, 2, 3, 45, 6, 7];

//generic type array
let list1: Array<Number> = [1, 2, 3, 4, 5, 6, 7]

//tuple 
let tuple1: [string, number];
tuple1 = ['hello', 89]
// tuple1 = [10,'hello'];//Type 'number' is not assignable to type 'string'.Type 'string' is not assignable to type 'number'.
console.log(tuple1[0]);//hello
console.log(tuple1[1]);//89

console.log(tuple1[0].substring(2));//substring print the string from given index
console.log(tuple1[1]);//substring does not exist on type number
//tuple only permits readin gwe cant reassign
tuple1[1] = 43;
console.log(tuple1);//we can reassign the tuple with the same type if number - number if string - string
// tuple1[3] = 'nmessage' - we cant reassign bcoz the length of the string is 2


//Enum
enum Colors {
    Red, Green, Blue, Yellow
}
let c: Colors = Colors.Red;
console.log(c);//it will return 1
let d = Colors[2];
console.log(d);//Blue will return
let e: string = Colors[1];
console.log(e);
//let f:number = Colors[1];//can't assign type string to a number
// let f:string = Colors.Blue; -cant assign trying to assign a numeric value to a variable of type string

//Unknown

let notSure: unknown = 4;//when we are not sure with the type we can use type as unknown
notSure = 'May also be a string'
console.log(notSure);//May also be a string

declare const mayBe: unknown;
// const aNumber:number = mayBe; - we cant assign type unknown to number
//  const aBoolean:boolean = mayBe;//cant assign unknown to boolean
// const aString:string = mayBe;//cant assign unknown to string


//Any
let somevalue: any = 'hey, Good evening';
console.log(somevalue);
somevalue = 42;
console.log(somevalue);

//Void
// void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:
const Something = (msg: number): void => {
    console.log(typeof msg.toString());
}
Something(876);

//Never
//function returning never must have a reachable end point
const error = (msg: string): never => {
    throw new Error(msg);
}
// error('custom error');

//Object
let customer1: { name: string; age: number; } = {
    name: 'John Doe',
    age: 30
};
//object using interface
interface Customer {
    name: string;
    age: number;
}

let customer: Customer = {
    name: 'John Doe',
    age: 30
};
console.log(customer.name);

//Type assertion
//type one -  as-syntax
let someValue: unknown = 'this isa some value';
let strLength: number = (someValue as string).length;
console.log(strLength);
//type two - angle bracket syntax
let someVal: unknown = 'this isa some value';
let strLen: number = (<string>someVal).length;
console.log(strLen);

//Type aliases
type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid
// input = false; // Compiler error

//null checking

type Color = string | null;

const color1: Color = null;

//Check if null
if (color1 === null) {
    console.log('value is equal to null');
} else {
    console.log('value is NOT equal to null');
}
//Check if NOT equal to null
if (color1 !== null) {
    console.log('value is NOT equal to null');
}
