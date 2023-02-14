//keyof 
type staff = {
    name: string;
    salary:number;
}

type staffkeys  = keyof staff;//now staffKeys inclulde union of staff properties (name | salary)

//keyof in generics
const getProperty = <T,K extends keyof T>(prop:T,key:K):T[K] => {
    return prop[key];
}

const developer:staff={
    name:"Developer",
    salary:10000
};

const nametype = getProperty(developer, "name");
console.log(nametype);
/*
    the developer is of type staff the poperties are name and salary
    here the nametype var is assigned to getProperty which the developer 
    and property name is passed as args the name extends developer property which contains the union of properties name and salary 
    that can be accessed by keyof type operator if we access other properties other than developer property it will be a compile time error
*/

//typeof generic
const getType = <T>(arg:T):string => {
    return typeof arg;
} 
console.log(getType('Hello world!'));
console.log(getType(123));
console.log(getType(false));

//ReturnType utility function in TS - used to extract the return type of the function
const getID = (id:number):number => {
    return id;
}

type IdType = ReturnType<typeof getID>;

const myID:IdType = 5;

/*
the ReturnType utility function in TS - used to extract the return type of the function
of the getID function which is number and given the type to another varible myID and assigning it to a number 5
*/


//Indexed Access Types
type MobileInfo ={
    ram:number;
    phone:string;
 }
 type Ram = MobileInfo['ram'];
 const myRam:Ram = 8;

 /*
 In this indexed access type we are assigning the type Ram using the indexes of MobileInfo
 and giving that as type to myRam var and assigning it to number 8(8GB);
 */


 //Conditional Types
 type ExtractId<T extends {id:string|number}> = T['id']

 interface NumericID{
    id:number;
 }

 interface StringID{
    id:string;
 }

 type numericID = ExtractId<NumericID>;//numericID = number
 type stringID = ExtractId<StringID>;//stringID = string

 //Mapped types
type OnlyUser = {[key:string]:string|number}

const typeOnlyUser:OnlyUser = {
        name:'bhaarth'
}

//mapped type in generic - it uses union property
type OptionFlag<T> = {[P in keyof T]:boolean} // here T is any type by  using the keyof type assigning then values  that can have union of T


//Template literal types
type route_1 = {
    stop1:'Hopes',
    stop2:'FunMall'
}
type route_2 = {
    stop1:'Gandhipuram',
    stop2:'ukkadam'
}
type busStoppings = "route_1" | "route_2";

type printStoppings = `${busStoppings}_stop`


//Class
class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }
    greet(greet:string):string{
        return `${greet} ${this.name}`
    }
}

const p = new Person('Bharath');
console.log(p.greet('Welcome '));


