//In explicit type we explicitly declare variable,property and function
let x:string = 'wonderla';
console.log(x);

//explicit function
const greet = (greeting:string,personName:string):void =>{
    console.log(greeting+' '+personName);
}
greet('Welcome','Vikas');

//explicit interface
interface Person{
    name:string;
    age:number;
}

const p1:Person ={
    name:'Vikas',
    age:20
}

//array
let games:string[];
games = ['codewars','hackerrank']
games.push('codeacademy')
console.log(games.push());


//object
type objectStructure = {
    name:string;
    game:string;
    stipend:Number;
}
let objects:objectStructure;
objects = {
    name:'Varun',
    game:'Hockey',
    stipend:5000
}
let object2:objectStructure = {
    name:'varun',
    game:'Hockey',
    stipend:4000
}

