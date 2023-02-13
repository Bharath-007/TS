//named function
function display1() {
    console.log('Hello TypeScript');
}
display1();

//function can include parameter and return type
function sum(x: number, y: number): number {
    return x+y;
}
console.log(sum(2,3));


//anonymous function
let greeetings = function(){
    console.log('Hello TypeScript');
}
greeetings();

let Sum = function(x: number, y: number): number {
    return  x+y;
};
console.log(Sum(5,10));

//arrow function
let validate = function(x: number):boolean{
    return isNaN(x);
}
console.log(validate(10));

//function overloading
class Greeter{
    message:string;
    constructor(message:string){
        this.message = message;
    }
    greet(person:string):string;
    greet(persons:string[]):string[];

    greet(person:unknown):unknown{
        if(typeof person === 'string'){
            return `${this.message}, ${person}`;
        }else if(Array.isArray(person)){
            return person.map(name => `${this.message}, ${name}`)
        }
        throw new Error('Unable to greet')
    }
}

const obj = new Greeter('Hello');
console.log(obj.greet('Aalan'));
console.log(obj.greet(['Groot', 'wolf']));