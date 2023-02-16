//typeof guard
//example 1
const padLeft = (padding: number | string, input: string) => {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}

console.log(padLeft(45, 'pad-left'));
console.log(padLeft('45', 'pad'));

//example 2
const StudentID = (studentDetail: string | number) => {
    if (typeof studentDetail == 'string') {
        console.log(`Student Name: ${studentDetail}`);
    } else if (typeof studentDetail === 'number') {
        console.log(`Student Roll number: ${studentDetail}`);
    } else {
        console.log('Invalid student details');
    }
}

StudentID('Rahul');
StudentID(1280541);

/*
    In the above program the studentID has a parameter which is of type union parameter entry string or number 
    if the varaible is string the studentName will be printed
    if the variable is number the studentRoll will be printed
    else invalid student details will be printed
    here the typeof typeguard help us to extract type form
*/

//instanceof guard
//example 1
class Banana {
    isTasty(): boolean {
        return true;
    }
}
class Apple {
    isJuicy(): boolean {
        return true;
    }
}

type Fruit = Banana | Apple;

const buyFruit = (fruit: Fruit): number => {
    let price = 0;
    if (fruit instanceof Apple) {//this is the type guard of instanceof it have the instance of class Apple so we can access the methods inside the apple if we accesss the method of class Banana inside the instanceof typeguard there will be a runtime error
        price = fruit.isJuicy() ? 5 : 10;
    }
    return price;
}

const apple = new Apple();
console.log(buyFruit(apple));

//example 2
interface Shoes {
    brand: string;
}
class Shoe1 implements Shoes {
    material: string;
    brand: string;
    constructor(brand: string, material: string) {
        this.brand = brand;
        this.material = material;
    }
}
class Shoe2 implements Shoes {
    modelNumber: number;
    brand: string;
    constructor(modelNumber: number, brand: string) {
        this.modelNumber = modelNumber;
        this.brand = brand;
    }
}
const getRandomAccess = () => {
    return Math.random() < 0.5 ? new Shoe2(2022, 'WoodLand') : new Shoe1('Leather', 'PUMA');
}
let accessor = getRandomAccess();
if (accessor instanceof Shoe1) {
    console.log(accessor.material);
}
if (accessor instanceof Shoe2) {
    console.log(accessor.brand);
}
/* 
In the above program there are two class shoe1 and shoe2 both implements the Shoes interface.
the getRandomAccess method reurns either shoe1 or shoe2 object.the constructor signature of 
shoe1 and shoe2 are different the instance of typeguard compares the both comstructor to effectively determine the type
*/

//in guard
console.log(`In typeguard`);
// example 1
const House = {
    name: 'test',
    house: {
        part: 'door'
    }
}
console.log('house' in House);//house exists in House object so it returns true using in typeguard we are checking the property exists or not

//example 2
interface People {
    age: number;
}
class Adult implements People {
    name: string;
    age: number;
    vote: boolean;
    constructor(name: string, age: number, vote: boolean) {
        this.name = name;
        this.age = age;
        this.vote = vote;
    }
}
class Child implements People {
    name: string;
    age: number;
    vote: boolean;
    constructor(name: string, age: number, vote: boolean) {
        this.name = name;
        this.age = age;
        this.vote = vote;
    }
}
const canVote = (vote: boolean) => {
    console.log(`can vote ${vote}`);
}
const cantVote = (vote: boolean) => {
    console.log(`can't vote ${vote}`);
}
const getIndentity = (person: People) => {
    if ('vote' in person) {
        canVote((person as Adult).vote);
    } else if ('vote' in person) {
        cantVote((person as Child).vote);
    } else {
        console.log('no vote');
    }
}
getIndentity(new Child('Arun', 15, false));
getIndentity(new Adult('Shiv', 18, true));

/*
    the above program has two classes Child and Adult both implements People interface
    the getIndentity method reurns either Child or Adult object
    the first call invokes the child obj invokes cantVote method since child has the cantVote method
    the second call invokes the adult obj invokes canVote method since adult has the canVote method
*/

//equality narrowing
const getValues = (a: number | string, b: string) => {
    if (a === b) {
        //here the narrowing takes place
        console.log(`narrowed ${typeof a}`);//string
    } else {
        //no narrowing remines unknown
        console.log(`no norrowing ${typeof a}`);//number
    }
}
getValues(1, '332');
getValues(1, '1');
getValues('hello', 'world');
getValues('hello', 'hello');

//custom type guard 
interface Bird {
    name: string;
    feathersColor: string;
}
interface Fish {
    name: string;
    finsColor: string;
}
type Animal = Bird | Fish;

//custom type guard
const isBird = (animal: Animal): animal is Bird => {
    return (animal as Bird).feathersColor !== undefined;
}

const parrot: Animal = { name: "Parrot", feathersColor: "orange" }
const shark: Animal = { name: "Shark", finsColor: "black" }

console.log(isBird(parrot));//true
console.log(isBird(shark));//false

/*in the above program there are 2 interfaces Bird and Fish we are creating a custom type animal that can be bird or Fish using union
parameters and the isBird method is the custom type guard to check weather it is a bird or fish if bird the first call will return true
in the second call if it not a bird it will return false
*/