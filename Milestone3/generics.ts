//function
//eg 1
//using any type we can write reusable code but it is not the best practices
const toArray = (a:any,b:any,c:any) =>{
    return [a,b,c]; 
}
console.log(toArray("a","b","c"));//it returns it as an array

//Generic
const identity = <T>(arg: T): T=>{
    return arg;
} 
console.log(identity("a"));
console.log(identity(123));
console.log(identity(true));
console.log(identity([1,2,3,4,5]));

//Multiple types
//we can use generics to get different types for different arguments and also give the primitive types with type assertion
const getValues = <A,B,C,D>(a:A,b:B,c:C,d:boolean) => {
    return(`a is "${typeof a}" and b is "${typeof b}" and c is "${typeof c}" and d is "${typeof d}"`);
}

console.log(getValues(1,[1,2,3],'hello',false));

//generic using interface
interface UserData<X,Y>{
    name:X;
    rollNo:Y;
}

const user: UserData<string,number> ={
    name:'Ram',
    rollNo:123
}
console.log(user.name);
console.log(user.rollNo);

//generic classes
class Student<T,U>{
    private ID : T;
    private Name : U;
    constructor(id:T,name:U){
        this.ID = id;
        this.Name = name;
    }
    setValue(id:T,name:U):void{
        this.ID = id;
        this.Name = name;
    }
    display():void{
        console.log(`ID = ${this.ID}, Name = ${this.Name}`);
    }

}
let stu = new Student<number,string>(12,'Arjun');
stu.setValue(12,'Arjun')
stu.display();

//generic using interface
interface StudentDetails {
    name: string;
    rollNo: number;
}
interface ClassDetails extends StudentDetails{
    className: string;
}
const printClassDetails = <T extends ClassDetails>(input:T)=>{
    console.log(`name = ${input.name},rollNo = ${input.rollNo},className = ${input.className}`);
}
let stu1 = {
    name:'Ranjith',
    rollNo:231,
    className:'8th class',
}
printClassDetails(stu1);
